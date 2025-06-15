/**
 * Smoothly scroll to any section by ID.
 * @param {string} id - The ID of the target element.
 */
function scrollToSection(id) {
  // Guard clause: only attempt if element actually exists
  const section = document.getElementById(id);
  if (!section) return;

  /* `scrollIntoView` handles the animation.
     behavior: 'smooth' → smooth scroll
     block: 'start'     → align element to the top of the viewport
  */
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

/*
  ========= NEXT STEPS =========
  • Replace 'flashx-logo.png' in index.html with your actual file name.
  • Drop that file next to index.html or adjust the src path.
  • If you add more JS—for example, opening a sign-up modal—just keep functions here
    or split into modules, then import with <script type="module">.
*/