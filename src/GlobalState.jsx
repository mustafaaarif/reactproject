import React from 'react'

export const Context = React.createContext();

export default function GlobalState({ children }) {

  // const [num, setNumber] = React.useState(0)
  // const [user, setUser] = React.useState('state')

  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}