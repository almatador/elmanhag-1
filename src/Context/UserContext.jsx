import React, { createContext } from 'react';

export const ContextUser = createContext();

export default function UserContext({ children }) {
    return (
        <ContextUser.Provider value="Ahmed">
            {children}
        </ContextUser.Provider>
    );
}
