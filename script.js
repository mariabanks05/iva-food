const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const restaurantList = document.getElementById('restaurantList');

const restaurants = [
  {
    name: 'Burger Express',
    description: 'Hambúrgueres artesanais e batata frita crocante.',
    category: 'hamburguer',
  },
  {
    name: 'Pizzaria La Forno',
    description: 'Pizza de massa fina e ingredientes frescos.',
    category: 'pizza',
  },
  {
    name: 'Sushi Ivaí',
    description: 'Sushi, sashimi e temaki para pedidos rápidos.',
    category: 'japonesa',
  },
  {
    name: 'Doce Tentação',
    description: 'Doces, bolos e sobremesas geladas.',
    category: 'sobremesa',
  },
];

function renderRestaurants(filter = 'all', query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  restaurantList.innerHTML = '';

  const filtered = restaurants.filter((restaurant) => {
    const matchCategory = filter === 'all' || restaurant.category === filter;
    const matchQuery =
      restaurant.name.toLowerCase().includes(normalizedQuery) ||
      restaurant.description.toLowerCase().includes(normalizedQuery);

    return matchCategory && matchQuery;
  });

  if (filtered.length === 0) {
    restaurantList.innerHTML = '<p>Nenhum restaurante encontrado. Tente outro filtro ou palavra-chave.</p>';
    return;
  }

  filtered.forEach((restaurant) => {
    const card = document.createElement('article');
    card.className = 'card restaurant-card';
    card.dataset.category = restaurant.category;
    card.innerHTML = `
      <h4>${restaurant.name}</h4>
      <p>${restaurant.description}</p>
    `;
    restaurantList.appendChild(card);
  });
}

function setActiveCategory(button) {
  categoryButtons.forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    setActiveCategory(button);
    renderRestaurants(category, searchInput.value);
  });
});

searchInput.addEventListener('input', () => {
  const activeCategoryButton = document.querySelector('.category-btn.active');
  const category = activeCategoryButton ? activeCategoryButton.dataset.category : 'all';
  renderRestaurants(category, searchInput.value);
});

renderRestaurants();
