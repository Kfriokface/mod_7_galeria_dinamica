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
    uds: '3-6 unidades (aprox. 1,0 kg. - 1,2 kg.)',
    image: '/images/img-13.png'
  },
  {
    name: 'Berenjenas',
    price: '5.49€/kg',
    ref: 'Ref. 0074',
    uds: '3-6 unidades (aprox. 1kg)',
    image: '/images/berenjenas.jpg'
  },
  {
    name: 'Cebollas',
    price: '1.99€/kg',
    ref: 'Ref. 0048',
    uds: '4 unidades',
    image: '/images/cebollas.jpg'
  }
];

const vegetableContainer = document.querySelector('#vegetables_container');

const select = `
<select name="select" class="select me-3">
  <option value="1" selected>1 kg</option>
  <option value="2">2 kg</option>
  <option value="3">3 kg</option>
  <option value="4">4 kg</option>
  <option value="5">5 kg</option>
</select>
`;

vegetables.forEach(vegetal => {
  let name = vegetal.name;
  let image = vegetal.image;
  let price = vegetal.price;
  let ref = vegetal.ref;
  let uds = vegetal.uds;
  const card = 
  `<div class="vegetables_wrapper__item card">
    <figure class="p-3 mb-3 position-relative">
      <img src="${image}" class="card-img-top" alt="${name}">
      <span class="price position-absolute">${price}</span>
    </figure>
    <div class="body p-3 d-flex flex-wrap flex-column gap-3">
      <div class="text-wrapper d-flex flex-wrap flex-column gap-1">
        <h3 class="title">${name}</h3>
        <h6 class="subtitle">${ref}</h6>
        <p class="text m-0">${uds}</p>
      </div> 
      <div class="addtocart d-flex justify-content-between mt-3 align-items-stretch">
        <div class="d-flex align-items-stretch"><span class="align-self-center me-2">Cantidad:</span>${select}</div>
        <a href="javascript:void(0)" class="btn btn-shop" title="Añadir a la cesta"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </div>
  </div>`;
vegetableContainer.insertAdjacentHTML("beforeend", card);
});

// toggle nav
const body = document.body;
const open = document.querySelector('.aside-open');
const close = document.querySelector('.aside-close');

open.addEventListener('click', () => {
  body.classList.add('aside-active');
});

close.addEventListener('click', () => {
  if (body.classList.contains('aside-active')) {
    body.classList.remove('aside-active');
  }
});

// date
const actualDate = new Date();
const actualYear = actualDate.getFullYear();
const copyrightText = document.querySelector('.copyright_text');

copyrightText.innerHTML = `© ${actualYear} - <a href="javascript:void(0)"><strong>Alberto Sancho</strong></a>`;


