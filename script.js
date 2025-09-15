document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const productList = document.getElementById('product-list');

  const products = [
    {
      name: 'Camisa básica',
      image: 'https://placehold.co/150x150?text=Camisa',
      desc: 'Camisa unisex de algodón, disponible en varios colores.',
      price: '$250'
    },
    {
      name: 'Smartphone',
      image: 'https://placehold.co/150x150?text=Smartphone',
      desc: 'Teléfono inteligente con cámara de alta resolución y batería duradera.',
      price: '$6,500'
    },
    {
      name: 'Lámpara LED',
      image: 'https://placehold.co/150x150?text=Lampara',
      desc: 'Ideal para escritorios y espacios de lectura con luz blanca regulable.',
      price: '$450'
    },
    {
      name: 'Shampoo natural',
      image: 'https://placehold.co/150x150?text=Shampoo',
      desc: 'Producto orgánico para el cuidado del cabello sin sulfatos ni parabenos.',
      price: '$120'
    },
    {
      name: 'Laptop',
      image: 'https://placehold.co/150x150?text=Laptop',
      desc: 'Portátil ligera con 16GB de RAM y 512GB SSD.',
      price: '$18,999'
    },
    {
      name: 'Cafetera automática',
      image: 'https://placehold.co/150x150?text=Cafetera',
      desc: 'Cafetera programable con molinillo integrado.',
      price: '$3,200'
    },
    {
      name: 'Tenis deportivos',
      image: 'https://placehold.co/150x150?text=Tenis',
      desc: 'Calzado con amortiguación especial para running.',
      price: '$1,350'
    },
    {
      name: 'Audífonos Bluetooth',
      image: 'https://placehold.co/150x150?text=Audifonos',
      desc: 'Audífonos con cancelación activa de ruido y estuche de carga.',
      price: '$899'
    }
  ];

  const renderProducts = (filtered = products) => {
    productList.innerHTML = '';
    filtered.forEach(p => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <p class="price">${p.price}</p>
        <p>${p.desc}</p>
      `;
      productList.appendChild(div);
    });
  };

  renderProducts();

  searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    renderProducts(filtered);
  });
});
