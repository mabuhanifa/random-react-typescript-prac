import { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import Product from './Product';

export default function NewReducer() {
    const { state: { products, cart }, dispatch } = useShop();
    console.log(cart);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://dummyjson.com/products");
            const _data = await res.json();
            dispatch({
                type: 'ADD_DATA',
                payload: _data.products
            })
        }
        fetchData();
    }, [])

    return (
        <div className='main'>
            <h1>Products</h1>
            <div className='product'>

                {
                    products && products.map((p) =>
                        <Product {...p} key={p.id} />
                    )
                }

            </div>
        </div>
    )
}
