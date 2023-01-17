import '../../../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import rating from '../../../assets/img/rating.svg'
import cartWhite from '../../../assets/img/cartWhite.svg'
import { useParams, Link } from 'react-router-dom';
import arrowBack from '../../../assets/img/arrowBack.svg'


export const Products = (props) => {

    const [product, setProductInfo] = useState(null);
    let { productId } = useParams();

    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
            .then((resolve) => {
                console.log(resolve.data);
                setProductInfo(resolve.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>


            {
                product === null ?
                    <h1> Loading....</h1>
                    :
                    <>
                        <div className='arrowBack'>
                            <Link to="/"><img src={arrowBack} alt="back" /> Back to Best Seller</Link>
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
                                <button>
                                    <img src={cartWhite} alt="" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </>
            }

        </div>
    );
}
