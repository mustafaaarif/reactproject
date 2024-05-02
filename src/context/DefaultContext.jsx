import React from 'react'

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export default function DefaultProvider({ children }) {

  // const [num, setNumber] = React.useState(0)
  // const [user, setUser] = React.useState('state')

  const value = {}

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}