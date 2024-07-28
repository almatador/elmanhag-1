import React, { createContext } from 'react';

export const ContextStudent = createContext();

export default function StudentContext({ children }) {
    return (
        <ContextStudent.Provider value="Ahmed">
            {children}
        </ContextStudent.Provider>
    );
}
