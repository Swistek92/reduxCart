import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My frist book',
    description: 'the first book i ever wrote',
  },
  {
    id: 'p2',
    price: 4,
    title: 'My secound book',
    description: 'the secound book i  wrote',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((e) => (
          <ProductItem
            key={e.id}
            id={e.id}
            title={e.title}
            price={e.price}
            description={e.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
