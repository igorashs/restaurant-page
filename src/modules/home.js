function createAboutSection() {
  const about = document.createElement('section');
  about.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'About';

  about.appendChild(title);

  const para = document.createElement('p');
  para.classList.add('section-description');
  para.textContent =
    'Star Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt';

  about.appendChild(para);
  return about;
}

function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function loadHome() {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');

  content.textContent = '';

  const aboutSection = createAboutSection();

  setBtnActive('home');

  content.appendChild(aboutSection);
}

export default loadHome;
