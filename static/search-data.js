// static/js/search-data.js
// Full page index for AIESEC Canada Hub + aiesec.ca clone
// Each entry: title, url, section, description, keywords[]

const SEARCH_DATA = [

  // ── MAIN SITE ────────────────────────────────────────────────────
  {
    title: "Home",
    url: "/",
    section: "AIESEC in Canada",
    description: "Volunteer, lead, intern and travel with AIESEC.",
    keywords: ["home","aiesec canada","leadership","volunteer","intern","travel","exchange","membership","youth","about"]
  },
  {
    title: "This is AIESEC",
    url: "/this-is-aiesec",
    section: "About Us",
    description: "Learn about AIESEC — the world's largest youth-led organization.",
    keywords: ["about","aiesec","what is aiesec","organization","youth","leadership","history","global","non profit","NGO"]
  },
  {
    title: "Our Mission",
    url: "/our-mission",
    section: "About Us",
    description: "The AIESEC Way — our history from 1948 to today.",
    keywords: ["mission","vision","values","aiesec way","history","1948","SDGs","sustainable development","purpose","why aiesec"]
  },
  {
    title: "Meet the Team",
    url: "/meet-the-team",
    section: "About Us",
    description: "Meet the AIESEC in Canada national team and board of directors.",
    keywords: ["team","staff","national president","board of directors","people","leadership team","MCVP","MC","directors","contact"]
  },
  {
    title: "Our Partners",
    url: "/our-partners",
    section: "About Us",
    description: "Meet our corporate partners — RBC, EDC, Cenovus, BMO and more.",
    keywords: ["partners","corporate","sponsors","RBC","EDC","BMO","Cenovus","Telfer","AGF","Economist","champion","platinum","gold","silver","CAPP"]
  },
  {
    title: "Alumni",
    url: "/alumni",
    section: "About Us",
    description: "Resources and community for AIESEC Canada alumni.",
    keywords: ["alumni","graduate","former member","past member","alumni network","reconnect","after aiesec"]
  },
  {
    title: "Support Us",
    url: "/support-us",
    section: "About Us",
    description: "Donate to help develop youth leadership across Canada.",
    keywords: ["donate","donation","support","funding","contribute","leadership","charity","give","impact"]
  },
  {
    title: "Exchange",
    url: "/exchange",
    section: "For Youth",
    description: "Discover all AIESEC exchange programs and how they work.",
    keywords: ["exchange","programs","abroad","international","opportunity","youth","leadership","travel","how it works","apply","FAQ","countries","Spain","Germany","Mexico","Netherlands","Italy","Hong Kong"]
  },
  {
    title: "Sign Up for Exchange",
    url: "/exchange-signup",
    section: "For Youth",
    description: "Sign up for an AIESEC exchange experience.",
    keywords: ["signup","sign up","register","apply","exchange","form","application","get started","consultation"]
  },
  {
    title: "Global Volunteer",
    url: "/global-volunteer",
    section: "For Youth",
    description: "Volunteer abroad with NGOs and make an impact in communities worldwide.",
    keywords: ["global volunteer","volunteer","NGO","community","impact","abroad","SDG","6 weeks","8 weeks","host family","accommodation","GV","oGV"]
  },
  {
    title: "Global Teacher",
    url: "/global-teacher",
    section: "For Youth",
    description: "Teach abroad in languages, STEM, sports and boost your career.",
    keywords: ["global teacher","teach","teacher","teaching abroad","education","STEM","language","cross-cultural","career","GT","GTE","school"]
  },
  {
    title: "Global Talent",
    url: "/global-talent",
    section: "For Youth",
    description: "Intern abroad and gain cross-cultural professional experience.",
    keywords: ["global talent","intern","internship","professional","career","work abroad","stipend","industry","GTA","iGT","9 weeks","78 weeks"]
  },
  {
    title: "Membership",
    url: "/membership",
    section: "For Youth",
    description: "Learn about becoming an AIESEC member and developing your leadership.",
    keywords: ["membership","member","join","local committee","LC","leadership","student","university","team","develop","campus"]
  },
  {
    title: "Join Us",
    url: "/join-us",
    section: "For Youth",
    description: "Become an AIESEC member at a local committee near you.",
    keywords: ["join","become a member","apply","recruitment","local committee","sign up","member","campus","university"]
  },
  {
    title: "Partner with AIESEC",
    url: "/about-partnerships",
    section: "For Companies",
    description: "Why partner with AIESEC — national and exchange partnerships.",
    keywords: ["partner","partnership","corporate","company","business","CSR","hire","talent","national partner","exchange partner","sponsor","Y2B"]
  },
  {
    title: "Youth to Business (Y2B)",
    url: "/y2b",
    section: "For Companies",
    description: "Y2B Forum, Summit and Survey — bridging youth and business.",
    keywords: ["Y2B","youth to business","forum","summit","survey","report","RBC","Cenovus","Telfer","EDC","MNP","Fraser Institute","2022","business","2024"]
  },
  {
    title: "Hire through AIESEC",
    url: "/exchange-for-organizations",
    section: "For Companies",
    description: "Hire international talent through AIESEC for your organization.",
    keywords: ["hire","hiring","organizations","companies","international talent","intern","work permit","exchange","global talent","recruit"]
  },
  {
    title: "Annual Reports",
    url: "/annual-reports",
    section: "General",
    description: "AIESEC Canada annual reports and Y2B reports going back to 2009.",
    keywords: ["annual report","report","Y2B report","financial","impact","2022","2021","2020","2019","2018","2017","EN","FR","french","english","issuu"]
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    section: "General",
    description: "AIESEC Canada privacy policy and data practices.",
    keywords: ["privacy","policy","data","GDPR","personal information","legal","terms"]
  },
  {
    title: "Safety Policy",
    url: "/safety-policy",
    section: "General",
    description: "AIESEC safety and COVID policies for exchange and membership.",
    keywords: ["safety","covid","covid-19","health","policy","travel","guidelines","exchange policy","WHO","outgoing exchange","FAQ","Air Canada","pandemic"]
  },

  // ── HUB ──────────────────────────────────────────────────────────
  {
    title: "Hub Home",
    url: "/hub",
    section: "AIESEC Canada Hub",
    description: "The AIESEC Canada internal resources hub.",
    keywords: ["hub","resources","internal","guide","materials","NEC","conference","entity plan","AIESEC hub"]
  },

  // ── NEC ──────────────────────────────────────────────────────────
  {
    title: "NEC Quizzes",
    url: "/nec-quizzes",
    section: "National Educational Cycle",
    description: "Complete your NEC quiz after finishing each portfolio section.",
    keywords: ["quiz","NEC quiz","test","national educational cycle","complete","assessment","questions"]
  },
  {
    title: "GDPR & ECB",
    url: "/gdpr-nec-content",
    section: "National Educational Cycle",
    description: "GDPR and ECB content for the NEC.",
    keywords: ["GDPR","ECB","data protection","privacy","NEC","national educational cycle","compliance"]
  },
  {
    title: "Incoming Global Talent (NEC)",
    url: "/incoming-global-talent-1",
    section: "National Educational Cycle",
    description: "NEC content for Incoming Global Talent portfolio.",
    keywords: ["incoming global talent","IGT","iGT","NEC","incoming","global talent","portfolio","national educational cycle","funnel"]
  },
  {
    title: "Outgoing Global Exchange (NEC)",
    url: "/outgoing-global-exchange",
    section: "National Educational Cycle",
    description: "NEC for oGX — outgoing global volunteer, talent and teacher.",
    keywords: ["OGX","oGX","outgoing global exchange","GV","GTA","GTE","NEC","outgoing","performance management","EXPA","LC2LC","IR","EP contracts","COVID","GV minimums","policies","analytics"]
  },
  {
    title: "Business to Customer (NEC)",
    url: "/b2c-1",
    section: "National Educational Cycle",
    description: "NEC content for the B2C portfolio.",
    keywords: ["B2C","business to customer","NEC","national educational cycle","portfolio","customer","sales"]
  },
  {
    title: "Talent Management (NEC)",
    url: "/talent-management-1",
    section: "National Educational Cycle",
    description: "TM NEC — MXP, PDP, 1-1 meetings, NMS data.",
    keywords: ["talent management","TM","MXP","member experience program","PDP","personal development plan","1-1 meetings","NMS data","calibration","NEC","standards","process"]
  },
  {
    title: "Finance (NEC)",
    url: "/finance-1",
    section: "National Educational Cycle",
    description: "Finance NEC — resource hub, basics playlist, materials.",
    keywords: ["finance","NEC","EFT","budget","financial","resource hub","playlist","national educational cycle","accounting"]
  },
  {
    title: "Local Committee President (NEC)",
    url: "/local-committee-president",
    section: "National Educational Cycle",
    description: "LCP NEC — LC start-up, running LCMs, tracking, managing portfolios.",
    keywords: ["LCP","local committee president","NEC","LC start-up","LCM","EBM","tracking","management","iGT","BoA","TMF","B2C","oGX","MC Illuminate","running","effective"]
  },
  {
    title: "Leaders 101",
    url: "/leaders-101-1",
    section: "National Educational Cycle",
    description: "Team leader guidelines, Blue Code, MXP Standards.",
    keywords: ["leaders 101","team leader","guidelines","blue code","MXP standards","leadership","NEC","resources","books","TL","VP"]
  },
  {
    title: "Data Management (NEC)",
    url: "/data-management",
    section: "National Educational Cycle",
    description: "Data management NEC — IGT funnel recording, NMS, reports.",
    keywords: ["data management","NEC","IGT funnel","funnel recording","NMS","prospecting","report","creating a report","importance","activity recording","data"]
  },

  // ── CONFERENCE OUTPUT ────────────────────────────────────────────
  {
    title: "Conference Overview",
    url: "/conference-overview",
    section: "Conference Output",
    description: "National and regional conference output — NLDC, NC, NSDC, SLC.",
    keywords: ["conference","overview","NLDC 2023","NC 2023","NSDC 2022","summer leadership camp","NC 2022","LCP","August NPM","historical","output","ORC 2023","NC 2024"]
  },
  {
    title: "Youth Leadership Launch",
    url: "/youth-leadership-launch",
    section: "Conference Output",
    description: "YLL 2020 — OGX, IGT, B2C, TM, FIN, EWA, LCP session outputs.",
    keywords: ["YLL","youth leadership launch","2020","virtual conference","OGX","IGT","B2C","TM","finance","FIN","EWA","LCP","on-demand","NEC","stronger together","sessions"]
  }
];