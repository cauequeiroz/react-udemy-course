import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch(cartActions);

  const handleAddToCartClick = () => {
    dispatch(cartActions.addProduct({ id, title, price }))
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCartClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
