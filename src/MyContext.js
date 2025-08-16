import { createContext, useState } from 'react'

export const MyContext = createContext()

export const MyProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <MyContext.Provider value={{ activeMenu, setActiveMenu}}>
      {children}
    </MyContext.Provider>
  )
}
