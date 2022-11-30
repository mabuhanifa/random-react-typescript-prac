import { useShop } from "../context/ShopContext";

export default function Cart() {
    const { state: { cart }, dispatch } = useShop();
    console.log(cart);
    return (
        <div>
            {
                cart && cart.map((c) =>
                    <div key={c.id}>
                        {c.title}{c.quantity}
                    </div>


                )
            }
            <button onClick={() => dispatch({
                type: "CHANGE_CART_QTY",
                payload: 
            })}>+</button>
            <button onClick={() => dispatch()}>-</button>
        </div>
    )
}
