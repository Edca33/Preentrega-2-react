export const products = [
  {
    id: 1,
    name: 'Spider-Man 2 "',
    stock: 10,
    price: '50 usd',
    category: 'Ps5',
    description: 'Spider Man 2 Game ',
    img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/marvels-spider-man-2-3054076.jpg',
  },
  {
    id: 2,
    name: 'Protocolo Calisto ',
    stock: 15,
    category: 'Xbox s/x',
    price: '45 usd',
    description: 'Protocolo Calisto',
    img: 'https://gagadget.com/media/uploads/calsto.png',

  },
  {
    id: 3,
    name: 'Grand Theft Auto VI',
    stock: 'PreOderNow',
    category: 'Ps5',
    price: '65 usd',
    PreOderNow: 'Dicember 24',
    description: 'Grand Theft Auto VI',
    img: 'https://media.vandal.net/m/12-2023/2023125940893_1.jpg',
  },


  {
    id: 4,
    name: 'Assassins Creed Valhalla',
    stock: 20,
    category: 'Xbox s/x',
    price: '40 usd',
    description:'Assassin Creed Valhalla',
      
    img: 'https://allgamersin.com/wp-content/uploads/2020/05/Assassins-Creed-Valhalla-art.jpg',
  },



];
export const productosFail = [];

//Promesa

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      reject(new Error('Products is empty'));
    }
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.find((product) => product.id.toString() === id.toString())
      );
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};
