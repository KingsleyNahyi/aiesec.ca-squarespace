// Shared nav + footer injection
// Called from each page: injectLayout()

function injectLayout() {
  const navHTML = `
<nav>
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">
      <!-- TODO: Replace with local copy of logo or keep Squarespace CDN URL -->
      <img src="https://images.squarespace-cdn.com/content/v1/6283ea60183691041842ecd8/086d60e1-b2ca-49f6-8129-6e393cf703bf/White-Blue-Logo+%281%29.png?format=1500w" alt="AIESEC in Canada">
    </a>
    <ul class="nav-links">
      <li class="dropdown">
        <span>About Us ▾</span>
        <ul class="dropdown-menu">
          <li><a href="this-is-aiesec.html">This is AIESEC</a></li>
          <li><a href="our-mission.html">Our Mission</a></li>
          <li><a href="meet-the-team.html">Our Team</a></li>
          <li><a href="our-partners.html">Meet our Partners</a></li>
          <li><a href="alumni.html">For Alumni</a></li>
          <li><a href="support-us.html">Support Us</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <span>For Youth ▾</span>
        <ul class="dropdown-menu">
          <li><a href="exchange.html">Learn About Exchange</a></li>
          <li><a href="exchange-signup.html">Go on Exchange</a></li>
          <li><a href="membership.html">Learn About Membership</a></li>
          <li><a href="join-us.html">Become a Member</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <span>For Companies ▾</span>
        <ul class="dropdown-menu">
          <li><a href="about-partnerships.html">Why Partner with AIESEC?</a></li>
          <li><a href="y2b.html">Youth-2-Business Series</a></li>
          <li><a href="exchange-for-organizations.html">Hire through AIESEC</a></li>
        </ul>
      </li>
      <li><a href="exchange-signup.html" class="nav-cta">Sign Up for Exchange!</a></li>
    </ul>
    <div class="nav-hamburger">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="mobile-menu">
    <div class="mobile-section-title">About Us</div>
    <a href="this-is-aiesec.html">This is AIESEC</a>
    <a href="our-mission.html">Our Mission</a>
    <a href="meet-the-team.html">Our Team</a>
    <a href="our-partners.html">Meet our Partners</a>
    <a href="alumni.html">For Alumni</a>
    <a href="support-us.html">Support Us</a>
    <div class="mobile-section-title">For Youth</div>
    <a href="exchange.html">Learn About Exchange</a>
    <a href="exchange-signup.html">Go on Exchange</a>
    <a href="membership.html">Learn About Membership</a>
    <a href="join-us.html">Become a Member</a>
    <div class="mobile-section-title">For Companies</div>
    <a href="about-partnerships.html">Why Partner with AIESEC?</a>
    <a href="y2b.html">Youth-2-Business Series</a>
    <a href="exchange-for-organizations.html">Hire through AIESEC</a>
    <a href="exchange-signup.html" style="color:#ffd700;margin-top:12px;">Sign Up for Exchange!</a>
  </div>
</nav>`;

  const footerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="this-is-aiesec.html">About AIESEC</a></li>
          <li><a href="our-mission.html">Our Mission</a></li>
          <li><a href="meet-the-team.html">Meet the Team</a></li>
          <li><a href="support-us.html">Support Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Exchange</h4>
        <ul>
          <li><a href="exchange.html">Learn about Exchange</a></li>
          <li><a href="global-volunteer.html">Global Volunteer</a></li>
          <li><a href="global-teacher.html">Global Teacher</a></li>
          <li><a href="global-talent.html">Global Talent</a></li>
          <li><a href="exchange-signup.html">Go on Exchange</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Membership</h4>
        <ul>
          <li><a href="membership.html">Learn about Membership</a></li>
          <li><a href="join-us.html">Join AIESEC</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Partners</h4>
        <ul>
          <li><a href="about-partnerships.html">Learn about Partnerships</a></li>
          <li><a href="y2b.html">Youth 2 Business</a></li>
          <li><a href="exchange-for-organizations.html">Exchange for Companies</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Alumni</h4>
        <ul>
          <li><a href="alumni.html">For Alumni</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>General</h4>
        <ul>
          <li><a href="annual-reports.html">Annual Reports</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="safety-policy.html">Safety Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>AIESEC is a non-governmental not-for-profit organization in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO. AIESEC Canada Inc. is registered as a not-for-profit Organization under the Canadian not-for-profit Corporations Act. Charity Number: 129835872RR0001 in Toronto, Ontario, Canada.</p>
      <p style="margin-top:12px;">© 2020 AIESEC Canada Inc. All rights reserved. &nbsp;|&nbsp; For general inquiries: <a href="mailto:info@aiesec.ca" style="color:rgba(255,255,255,0.8)">info@aiesec.ca</a></p>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

injectLayout();
