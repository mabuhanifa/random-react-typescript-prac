import { ProductType, useShop } from '../context/ShopContext';

const Product = ({ id, price, brand, category, description,
    discountPercentage, images, quantity,
    rating, stock, thumbnail, title }: ProductType) => {
    const { state: { products, cart }, dispatch } = useShop();
    let cartProduct: ProductType = {
        id, price,
        quantity: 1
    }
    return (
        <div className='single_product'>
            <div>
                <h4>
                    {title}
                </h4>
                <img src={images?.[0]} alt="" className='img' />

            </div>
            {
                cart.some((c) => c.id === id) ?
                    <button onClick={() => dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: id
                    })}>Remove From Cart</button>
                    :
                    <button onClick={() => dispatch({

                        type: 'ADD_TO_CART',
                        payload: cartProduct
                    })}>Add To Cart</button>
            }
        </div>
    );
};

export default Product;