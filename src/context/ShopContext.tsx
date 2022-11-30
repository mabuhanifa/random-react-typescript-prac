import { createContext, ReactNode, useContext, useReducer } from "react";

export type ProductType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity?: number;
}


export type ContextChild = {
    children: ReactNode
}
export type StateType = {
    product: ProductType[];
    cart: ProductType[];
}
export type Action =
    { type: "ADD_DATA", todo: string } |
    { type: "ADD_TO_CART", id: number } |
    { type: "REMOVE_FROM_CART", id: number };

export type MainState = {
    state: StateType[];
    dispatch: React.Dispatch<Action>
}


const initialState: StateType[] = [{
    product: [],
    cart: []
}]

const reducer = (state: StateType[], action: Action) => {
    // switch (action.type) {
    //     case "ADD_TODO":
    //         return [
    //             ...state,
    //             {
    //                 id: state.length + 1,
    //                 todo: action.todo
    //             },
    //         ];
    //     case "REMOVE_TODO":
    //         return state.filter(({ id }) => id !== action.id);
    //     default:
    //         throw new Error();
    // }
}
const ShopContext = createContext({} as MainState);
export default function Context({ children }: ContextChild) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const store = { state, dispatch }
    return (
        <ShopContext.Provider value={store}>{children}</ShopContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(ShopContext);
}