// assets/js/layout/header.js
export const siteHeader = `
<header class="site-header">
  <div class="nav container">

    <!-- TOP BAR (mobile only) -->
    <div class="nav__mobile flex items-center justify-center gap-4 w-full md:hidden">
      <a href="index.html" class="nav__logo">
        <img src="assets/img/logo.png" alt="Logo" class="nav__logo-img" />
      </a>

      <button
        class="nav__toggle"
        type="button"
        aria-label="Apri il menu di navigazione"
        aria-expanded="false"
      >
        <span class="nav__toggle-lines">
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
        </span>
      </button>
    </div>

    <!-- DESKTOP NAV (hidden on mobile) -->
    <nav class="nav__desktop hidden md:flex items-center justify-center w-full">
      <ul class="nav__desktop-left flex items-center gap-6">
        <li><a class="nav__link" href="index.html#hero">Home</a></li>
        <li><a class="nav__link" href="chi-sono.html">Chi sono</a></li>
        <li><a class="nav__link" href="consulenze-unity.html">Consulenze</a></li>
      </ul>

      <!-- Center logo -->
      <a href="index.html" class="nav__logo mx-10">
        <img src="assets/img/logo.png" alt="Logo" class="nav__logo-img" />
      </a>

      <ul class="nav__desktop-right flex items-center gap-6">
        <li><a class="nav__link" href="eventi-gruppi.html">Eventi & Gruppi</a></li>
        <li><a class="nav__link" href="percorsi-reiki.html">Percorsi & Reiki</a></li>
        <li><a class="nav__link" href="contatti.html">Contatti</a></li>
      </ul>
    </nav>

    <!-- MOBILE DROPDOWN MENU -->
    <nav aria-label="Navigazione mobile" class="md:hidden">
      <ul class="nav__links">
        <li><a class="nav__link" href="index.html#hero">Home</a></li>
        <li><a class="nav__link" href="chi-sono.html">Chi sono</a></li>
        <li><a class="nav__link" href="consulenze-unity.html">Consulenze</a></li>
        <li><a class="nav__link" href="eventi-gruppi.html">Eventi & Gruppi</a></li>
        <li><a class="nav__link" href="percorsi-reiki.html">Percorsi & Reiki</a></li>
        <li><a class="nav__link" href="contatti.html">Contatti</a></li>
      </ul>
    </nav>

  </div>
</header>
`;
