function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function loadMenu() {
  const content = document.getElementById('tab-content');
  content.textContent = 'Menu';
  setBtnActive('menu');
}

export default loadMenu;
