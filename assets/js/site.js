// Portafolio: tema claro/oscuro, menú móvil y filtros de habilidades.
(function () {
  var root = document.documentElement;

  // Tema
  var themeBtn = document.querySelector('.theme-btn');
  if (themeBtn) {
    var sync = function () { themeBtn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false'); };
    sync();
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  }

  // Menú móvil
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (menuBtn && menu) {
    var setOpen = function (open) {
      menu.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuBtn.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  }

  // Filtros de habilidades
  var filters = document.querySelectorAll('.filter');
  var skills = document.querySelectorAll('.skills li');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      skills.forEach(function (li) { li.hidden = !(cat === 'all' || li.getAttribute('data-cat') === cat); });
    });
  });
})();
