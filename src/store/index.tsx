import React from 'react';

import AuthProvider from './providers/AuthProvider';

// import CatsProvider from './providers/CatsProvider';
// import CartProvider from './providers/CartProvider';

const Store = ({ children }) => {

    return (
        <AuthProvider>
            {/* <CatsProvider>
                <CartProvider> */}
                    {children}
                {/* </CartProvider>
            </CatsProvider> */}
        </AuthProvider>
    );
}

export default Store;