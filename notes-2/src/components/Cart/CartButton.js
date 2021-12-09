import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const handleCartClick = () => dispatch(uiActions.toggleCartVisibility());

  return (
    <button className={classes.button} onClick={handleCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
