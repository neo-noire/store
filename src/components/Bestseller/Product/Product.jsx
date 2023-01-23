import '../../../App.css';
import axios from 'axios';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import rating from '../../../assets/img/rating.svg'
import cartWhite from '../../../assets/img/cartWhite.svg'
import { useParams, Link } from 'react-router-dom';
import arrowBack from '../../../assets/img/arrowBack.svg'
import { Reviews } from './Reviews/Reviews';
import { useSelector, useDispatch } from 'react-redux'
import { add, cartModal } from '../../../redux/counterCart';


export const Products = () => {

    const cartUpdate = useSelector((state) => state.addToCart.items);
    const dispatch = useDispatch();

    const [product, setProductInfo] = useState(null);
    const [isProductInCart, setProductInCart] = useState(false);
    let { productId } = useParams();

    //fn assignment
    const serverReq = () => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
            .then((resolve) => {
                setProductInfo(resolve.data);
                const indeRes = cartUpdate.findIndex(el => el._id === resolve.data._id);
                if (indeRes != -1) return setProductInCart(true)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const cartHandler = () => {
        setProductInCart(true);
        const productToCart = {
            _id: product._id,
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            ordered: 1,
            inCart: true,
        };
        dispatch(add(productToCart))
        alert(`${product.title} успешно добавлен в корзину`)
    }

    const openCart = () => {
        dispatch(cartModal())
    }

    /// This fn helps element() avoid first render, 
    //due to product fills up only after render
    // and not to have null in product._id
    function useDidUpdateEffect(inputs) {
        const didMountRef = useRef(false);

        useEffect(() => {
            if (didMountRef.current) {
                const index = cartUpdate.findIndex((item) => item._id === product._id);
                if (index === -1) return setProductInCart(false)
            }
            didMountRef.current = true;
        }, inputs);
    }

    //fn use
    useEffect(() => {
        serverReq()
    }, [])


    // useLayoutEffect(() => {
    //     const index = cartUpdate.findIndex((item) => item._id === product._id);
    //     if (index === -1) return setProductInCart(false) 
    // }, [cartUpdate])
    // useDidUpdateEffect(cartUpdate)

    return (
        <div className='router'>
            {
                product === null ?
                    <h1> Loading....</h1>
                    :
                    <>
                        <div className='arrowBack'>
                            <Link to="/store"><img src={arrowBack} alt="back" /> Back to Best Seller</Link>
                        </div>
                        <div className="product">
                            <img src={product.image} alt="" />
                            <div className="info">
                                <p className="title">{product.title}</p>
                                <p className="price">$ {product.price}</p>
                                <div className="rating">
                                    <p>Rating: {product.rating.rate}</p>
                                    <img src={rating} alt="" />
                                </div>
                                <div className="category">
                                    <span>Category:</span>
                                    <p>{product.category}</p>
                                </div>
                                <p className="description">{product.description}</p>
                                {
                                    isProductInCart ?
                                        <button onClick={openCart} >
                                            <img src={cartWhite} alt="" />
                                            Go to cart
                                        </button>
                                        :
                                        <button onClick={cartHandler}>
                                            <img src={cartWhite} alt="" />
                                            Add to cart
                                        </button>
                                }
                            </div>
                        </div>
                        <Reviews />
                    </>
            }
        </div>
    );
}
