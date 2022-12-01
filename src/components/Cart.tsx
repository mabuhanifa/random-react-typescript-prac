import { useShop } from "../context/ShopContext";

export default function Cart() {
    const { state: { cart }, dispatch } = useShop();
    const changeQuantity = (id: number, quantity: number = 1) => {
        dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
                id: id,
                quantity: quantity
            }
        })
        console.log(id, quantity)
    }
    const totalPrice = cart.reduce((a, c) => a + ((c.price ? c.price : 0) * (c.quantity ? c.quantity : 0)), 0)
    return (
        <>
            <h1>Cart</h1>
            <h2>Total Items: {cart.length}</h2>
            <h2>Total Price: {totalPrice}</h2>

            <div className="cart">


                {
                    cart && cart.map((c) =>

                        <div key={c.id} className="cart_body">
                            <h4>{c.title}</h4>
                            <p>Quantity: {c.quantity}</p>
                            <p>Price: {c.price}</p>

                            <div className="btn_div">
                                <button className="btn__add"
                                    onClick={() => changeQuantity(c.id, c.quantity ? c.quantity + 1 : 1)}>+</button>
                                <button className="btn__remove"
                                    onClick={() => changeQuantity(c.id, c.quantity ? c.quantity - 1 : 1)}>-</button>
                            </div>
                        </div>

                    )
                }
            </div >
        </>
    )
}
