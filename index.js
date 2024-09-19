// Array de objetos con las verdudas
const vegetables = [
  {
    name: 'Tomate',
    price: '7,99 €/kg',
    ref: 'Ref. 0056',
    uds: '3-6 unidades aprox. (1,0 kg. - 1,2 kg.)',
    image: '/images/img-4.png'
  },
  {
    name: 'Lechuga trocadero',
    price: '2,49 €/kg',
    ref: 'Ref. 0018',
    uds: '1 unidad (200gr - 300gr)',
    image: '/images/img-5.png'
  },
  {
    name: 'Berenjena',
    price: '4,99 €/kg',
    ref: 'Ref. 0039',
    uds: '3 unidades aprox. por kilo',
    image: '/images/img-6.png'
  },
  {
    name: 'Calabacín',
    price: '2,99 €/kg',
    ref: 'Ref. 0056',
    uds: '2 unidades aprox. por kilo',
    image: '/images/img-8.png'
  },
  {
    name: 'Okra',
    price: '7,99 €/kg',
    ref: 'Ref. 0055',
    uds: '10 unidades aprox. por kilo',
    image: '/images/img-7.png'
  },
  {
    name: 'Patatas nuevas',
    price: '1,99 €/kg',
    ref: 'Ref. 0036',
    uds: 'Bolsa de 1kg',
    image: '/images/img-9.png'
  },
  {
    name: 'Pimientos colores',
    price: '5,99 €/kg',
    ref: 'Ref. 0074',
    uds: '5-6 unidades aprox. por kilo',
    image: '/images/img-10.png'
  },
  {
    name: 'Calabaza pelada y cortada',
    price: '3,99€/kg',
    ref: 'Ref. 0029',
    uds: 'Paquete de 500 gr. aprox',
    image: '/images/img-11.png'
  },
  {
    name: 'Chile verde',
    price: '2.99 €/kg',
    ref: 'Ref. 0021',
    uds: 'Paquete de 300gr.',
    image: '/images/img-12.png'
  },
  {
    name: 'Nabos',
    price: '7.99€/kg',
    ref: 'Ref. 0056',
    uds: '3-6 unidades aprox. (1,0 kg. - 1,2 kg.)',
    image: '/images/img-13.png'
  }
];

const vegetableContainer = document.querySelector('#vegetables_container > .row');
console.log(vegetableContainer);
vegetables.forEach(vegetal => {
  let name = vegetal.name;
  let image = vegetal.image;
  let price = vegetal.price;
  let ref = vegetal.ref;
  let uds = vegetal.uds;
  const card = 
  `<div class="col">
    <div class="box_section">
      <div class="image_4"><img src="${image}"></div>
      <h2 class="dolor_text">${price}</h2>
      <h2 class="dolor_text">${name}</h2>
      <h2 class="dolor_text_1">${ref}</h2>
      <p class="tempor_text">${uds}</p>
      <div class="buy_bt_1 active"><a href="#">Comprar</a></div>
    </div>
  </div>`;
vegetableContainer.insertAdjacentHTML("beforeend", card);
});