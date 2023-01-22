import '../../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const BestSellers = (props) => {

    const [cardInfo, setCardInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
            .then((resolve) => {
                console.log(resolve.data);
                setCardInfo(resolve.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    let products = cardInfo
        .map((el) => <div className="card router" key={el.id}>
            <img src={el.image} alt="image" />
            <h4>{el.title}</h4>
            <p className="price">${el.price}</p>
            <button onClick={() => {
                navigate(`/product/${el.id}`)
            }}>Show more</button>
        </div>
        )

    return (
        <div className='bestSeller' >
            <div className='cards'>
                {products}
            </div>
        </div>
    );
}
