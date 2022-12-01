import { useShop } from "../context/ShopContext";

export default function Cart() {
    const { state: { cart }, dispatch } = useShop();
    console.log(cart);
    const changeQuantity = (id: number, quantity?: number) => {
        dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
                id: id,
                quantity: quantity
            }
        })

    }
    return (
        <div>
            {
                cart && cart.map((c) =>

                    <div key={c.id}>
                        {c.title}
                        {c.quantity}
                        <button onClick={() => changeQuantity(c.id, c.quantity)}>+</button>
                    </div>

                )
            }
        </div >
    )
}
