const items = document.querySelectorAll('.item');

function insertViewTransitionName() {
  items.forEach((item, i) => {
    item.style.viewTransitionName = `item-${i++}`;
  });
}

function animateItem(e) {
  const hero = document.querySelector('li[data-pos="1"]');
  const target = e.target;
  [hero.dataset.pos, target.dataset.pos] = [target.dataset.pos, hero.dataset.pos];
}

function init(e) {
  if (!e.target.matches('li')) return;
  insertViewTransitionName();
  !document.startViewTransition
    ? animateItem(e)
    : document.startViewTransition(() => animateItem(e));
}

window.addEventListener('click', init, false);