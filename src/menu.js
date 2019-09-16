function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function createFood(src, text, price, alt) {
  const food = document.createElement('div');
  food.classList.add('food');
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.classList.add('description');

  const foodName = document.createElement('h3');
  foodName.textContent = text;

  const foodPrice = document.createElement('h2');
  foodPrice.textContent = price;

  description.appendChild(foodName);
  description.appendChild(foodPrice);

  food.appendChild(img);
  food.appendChild(description);
  return food;
}

function loadMenu() {
  const content = document.getElementById('tab-content');
  content.classList.add('grid-lay');
  content.classList.remove('flex-lay');

  content.textContent = '';
  setBtnActive('menu');

  const foods = [
    createFood(
      '../dist/imgs/foods/ackbar-ice-cream.jpg',
      'acbar ice Cream',
      '10CR',
      'acbar ice cream'
    ),
    createFood(
      '../dist/imgs/foods/corellian-coffee.jpg',
      'corellian coffee',
      '4CR',
      'corellian coffee'
    ),
    createFood(
      '../dist/imgs/foods/darth-maul-quinoa.jpg',
      'darth maul quinoa',
      '20CR',
      'darth maul quinoa'
    ),
    createFood(
      '../dist/imgs/foods/ewok-cookies.jpg',
      'ewok cookies',
      '4CR',
      'ewok cookies'
    ),
    createFood(
      '../dist/imgs/foods/lemon-tart.jpg',
      'lemon tart',
      '6CR',
      'lemon tart'
    ),
    createFood(
      '../dist/imgs/foods/porg-puffs.jpg',
      'porg puffs',
      '12CR',
      'porg puffs'
    ),
    createFood(
      '../dist/imgs/foods/sith-trooper-root-beer.jpg',
      'sith trooper root beer',
      '9CR',
      'sith trooper root beer'
    ),
    createFood(
      '../dist/imgs/foods/vader-peanut-butter-blossoms.jpg',
      'vader peanut butter blossoms',
      '20CR',
      'vader peanut butter blossoms'
    )
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
}

export default loadMenu;
