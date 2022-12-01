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
    return (
        <div>
            {
                cart && cart.map((c) =>

                    <div key={c.id}>
                        {c.title}
                        {c.quantity}
                        <button className="btn__add" onClick={() => changeQuantity(c.id, c.quantity ? c.quantity + 1 : 1)}>+</button>
                        <button className="btn__remove" onClick={() => changeQuantity(c.id, c.quantity ? c.quantity - 1 : 1)}>-</button>
                    </div>

                )
            }
        </div >
    )
}
