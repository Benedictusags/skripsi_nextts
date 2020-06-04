import { createContext } from 'react';

const initialAuthContext: {
    loggedIn: boolean;
    admin: boolean;
    userEmail: string;
    changeEmail: (newEmail: string)=>void;
    changeAuth: (newAuth: boolean)=>void;
    changeAdmin: (newAdmin: boolean)=>void;
} = {
    loggedIn: false,
    admin: false,
    userEmail: '',
    changeEmail: ()=>null,
    changeAuth: ()=>null,
    changeAdmin: ()=>null,
};

export const AuthContext = createContext(initialAuthContext);

// const initialCatsContext: {
//     cats: Array<any>;
//     getAllParents: () => Array<any>;
//     getCategoryName: (id: string) => string;
// } = {
//     cats: [],
//     getAllParents: () => [],
//     getCategoryName: () => '',
// };

// export const CatsContext = createContext(initialCatsContext);

// const initialCartContext: {
//     cart: Array<any>;
//     addToCart: (docId: string, code: string, qty: number, price: number, sale: number, imgUrl: string, tags: Array<any>) => void;
//     getCartTotalPrice: () => number;
//     deleteCartItem: (id: number) => void;
//     clearCart: () => void;
// } = {
//     cart: [],
//     addToCart: () => null,
//     getCartTotalPrice: () => 0,
//     deleteCartItem: () => null,
//     clearCart: () => null,
// };

// export const CartContext = createContext(initialCartContext);