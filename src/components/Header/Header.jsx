import '../../App.css';
import logo from '../../assets/img/logo.svg'
import cart from '../../assets/img/cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../Modal/Modal';
import { cartModal } from '../../redux/counterCart';

export const Header = () => {

  const cartUpdate = useSelector((state) => state.addToCart.items);
  const cartModalHandler = useSelector((state) => state.addToCart.isOpen);
  const dispatch = useDispatch();

  return (
    <div className='header' >
      <img src={logo} alt="logo" />
      <div className='cart'
        onClick={() =>  dispatch(cartModal())}
      >
        <img
          src={cart} alt="cart" />

        {cartUpdate.length > 0 ?
          <div className='cartNumber'>{cartUpdate.length}</div>
          : null}
      </div>

      {
        cartModalHandler && <Modal />
      }
    </div>
  );
}
