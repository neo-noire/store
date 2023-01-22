import '../../../App.css';
import cart from '../../../assets/img/cart.svg'
import { useSelector } from 'react-redux'


export const Cart = () => {

    const cartUpdate = useSelector((state) => state.addToCart.items);
    
    return (
        <div className='cartMenu'>
            
        </div>
    );
}
