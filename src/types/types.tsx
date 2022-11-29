import { ReactNode } from "react";

export type ContextChild = {
    children: ReactNode
}
export type StateType = {
    id: number;
    todo: string;
}
export type Action =
    { type: "ADD_TODO", todo: string } |
    { type: "REMOVE_TODO", id: number };

export type MainState = {
    state: StateType[];
    dispatch: React.Dispatch<Action>
}