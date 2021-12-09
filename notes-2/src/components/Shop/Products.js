import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Macbook Pro",
    price: 266,
    description: "An apple notebook for developers.",
  },
  {
    id: 2,
    title: "Iphone 13",
    price: 124,
    description: "An apple smartphone for smart people.",
  },
  {
    id: 3,
    title: "Apple Watch",
    price: 89,
    description: "An apple watch for premium wrists.",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
