import { ProductType } from '../context/ShopContext';

const Product = ({ id, price, brand, category, description,
    discountPercentage, images, quantity,
    rating, stock, thumbnail, title }: ProductType) => {
    return (
        <div className='single_product'>
            <div>
                <h4>
                    {title}
                </h4>
                <img src={images?.[0]} alt="" className='img' />

            </div>
        </div>
    );
};

export default Product;