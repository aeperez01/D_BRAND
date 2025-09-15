document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const productList = document.getElementById('product-list');

  const products = [
    {
      name: 'Camisa básica',
      image: 'https://placehold.co/150x150?text=Camisa',
      desc: 'Camisa unisex de algodón, disponible en varios colores.'
    },
    {
      name: 'Smartphone',
      image: 'https://placehold.co/150x150?text=Smartphone',
      desc: 'Teléfono inteligente con cámara de alta resolución y batería duradera.'
    },
    {
      name: 'Lámpara LED',
      image: 'https://placehold.co/150x150?text=Lampara',
      desc: 'Ideal para escritorios y espacios de lectura con luz blanca regulable.'
    },
    {
      name: 'Shampoo natural',
      image: 'https://placehold.co/150x150?text=Shampoo',
      desc: 'Producto orgánico para el cuidado del cabello sin sulfatos ni parabenos.'
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
