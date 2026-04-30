// static/js/search-engine.js
// Token scoring search engine with Levenshtein fuzzy matching
// Depends on: search-data.js being loaded first

const SearchEngine = (function () {

  // ── LEVENSHTEIN DISTANCE ────────────────────────────────────────
  // Measures how many single-character edits separate two strings.
  // "managment" vs "management" = distance 1 (one missing 'e')
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    // Bail early on obvious cases
    if (m === 0) return n;
    if (n === 0) return m;
    if (a === b)  return 0;

    // Only need two rows at a time — space efficient
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    let curr = new Array(n + 1);

    for (let i = 1; i <= m; i++) {
      curr[0] = i;
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        curr[j] = Math.min(
          curr[j - 1] + 1,       // insertion
          prev[j] + 1,            // deletion
          prev[j - 1] + cost      // substitution
        );
      }
      [prev, curr] = [curr, prev];
    }
    return prev[n];
  }

  // ── FUZZY MATCH ─────────────────────────────────────────────────
  // Returns true if queryToken is "close enough" to targetToken.
  // Threshold scales with token length so short tokens are strict.
  function fuzzyMatch(queryToken, targetToken) {
    if (targetToken.includes(queryToken)) return true; // substring fast path
    const threshold = queryToken.length <= 3 ? 0
                    : queryToken.length <= 5 ? 1
                    : 2;
    return levenshtein(queryToken, targetToken) <= threshold;
  }

  // ── TOKENIZE ────────────────────────────────────────────────────
  // Splits a string into lowercase tokens, strips punctuation.
  function tokenize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 0);
  }

  // ── SCORE ONE TOKEN AGAINST ONE FIELD ───────────────────────────
  // Returns a score based on match quality and field weight.
  //
  //  Field weights:
  //    title       — 10 exact, 6 partial
  //    keywords    — 8 exact, 4 partial
  //    section     — 5 exact, 3 partial
  //    description — 3 exact, 2 partial
  //
  //  Fuzzy (edit distance 1-2) gets 60% of exact score.
  //
  function scoreTokenInField(queryToken, fieldTokens, exactScore, partialScore) {
    let best = 0;

    for (const ft of fieldTokens) {
      if (ft === queryToken) {
        // Exact hit — top score
        best = Math.max(best, exactScore);
        break; // can't do better
      } else if (ft.startsWith(queryToken) || ft.includes(queryToken)) {
        // Partial / substring
        best = Math.max(best, partialScore);
      } else if (fuzzyMatch(queryToken, ft)) {
        // Fuzzy — 60% of exact
        best = Math.max(best, Math.floor(exactScore * 0.6));
      }
    }

    return best;
  }

  // ── SCORE ONE PAGE ───────────────────────────────────────────────
  // Runs every query token against every field and sums up.
  function scorePage(page, queryTokens) {
    if (queryTokens.length === 0) return 0;

    // Pre-tokenize fields once
    const titleTokens   = tokenize(page.title);
    const sectionTokens = tokenize(page.section);
    const descTokens    = tokenize(page.description);
    const kwTokens      = page.keywords.flatMap(kw => tokenize(kw));

    let totalScore = 0;

    for (const qt of queryTokens) {
      const titleScore   = scoreTokenInField(qt, titleTokens,   10, 6);
      const kwScore      = scoreTokenInField(qt, kwTokens,       8, 4);
      const sectionScore = scoreTokenInField(qt, sectionTokens,  5, 3);
      const descScore    = scoreTokenInField(qt, descTokens,      3, 2);

      // Take the best score this token achieved across all fields
      // (avoids double-counting if same word is in title AND keywords)
      totalScore += Math.max(titleScore, kwScore, sectionScore, descScore);
    }

    // Bonus: if ALL query tokens matched, multiply by 1.3
    // This surfaces "exact multi-word matches" above partial hits
    const allMatched = queryTokens.every(qt => {
      const all = [...titleTokens, ...kwTokens, ...sectionTokens, ...descTokens];
      return all.some(ft => fuzzyMatch(qt, ft) || ft.includes(qt));
    });

    return allMatched ? Math.round(totalScore * 1.3) : totalScore;
  }

  // ── PUBLIC API ───────────────────────────────────────────────────
  return {
    // query: string
    // limit: max results to return (default 8)
    // Returns array of { page, score } sorted by score desc, score > 0 only
    search(query, limit = 8) {
      const queryTokens = tokenize(query);
      if (queryTokens.length === 0) return [];

      const scored = SEARCH_DATA
        .map(page => ({ page, score: scorePage(page, queryTokens) }))
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

      return scored;
    }
  };

})();