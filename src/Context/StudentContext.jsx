import React, { createContext } from 'react'
export const ContextStudent = createContext()

const obje = {
       arrayOne: [2, 3, 4],
       arrayTwo: ["Ahmed", "Mohamed", "Ali"]
}

export default function StudentContext({ childrn }) {
       return (
              <ContextStudent.Provider value="Ahmed">
                     {childrn}
              </ContextStudent.Provider>
       )
}
