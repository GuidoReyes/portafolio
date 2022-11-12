/* menu */

((d) => {
  const $btnmenu = d.querySelector('.menu-btn');
  const $menu = d.querySelector('.menu');
  $btnmenu.addEventListener('click', () => {
    $btnmenu.firstElementChild.classList.toggle('none');
    $btnmenu.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });
  const $global = d.addEventListener('click', (e) => {
    if (!e.target.matches('.menu a')) return false;
    console.log($global);

    $btnmenu.firstElementChild.classList.remove('none');
    $btnmenu.lastElementChild.classList.add('none');
    $menu.classList.remove('is-active');
  });
})(document);
