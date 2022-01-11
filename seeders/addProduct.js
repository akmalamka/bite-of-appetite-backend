import Product from '../models/Product';

const addProduct = async () => {
  await Product.bulkCreate(
    [
      { title: 'Bidang Mahasiswa dan Kaderisasi', price: 3000 },
      { title: 'Bidang Dakwah', price: 5000 },
    ],
    //   { validate: true },
  );
};

export default addProduct;
