export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products; }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products2; }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products; },
  }
];

export const products = [
  {
    id: 4,
    serialNumber: '90LM0500-B01370',
    isNew: 0,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/18307112.jpg',
    title: 'Asus TUF Gaming VG27AQ',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: '90LM0500-B01370',
    isNew: 1,
    photo: 'https://content2.rozetka.com.ua/goods/images/big_tile/324436566.png',
    title: 'Product 2',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
];

export const products2 = [
  {
    id: 1,
    serialNumber: '90LM0500-B01370',
    isNew: 1,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/18307112.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: '90LM0500-B01370',
    isNew: 1,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/18307112.jpg',
    title: 'Product 12',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: '90LM0500-B01370',
    isNew: 1,
    photo: 'https://content2.rozetka.com.ua/goods/images/big_tile/324436566.png',
    title: 'Product 13',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 3,
    date: '2017-06-29 12:09:33'
  }
];