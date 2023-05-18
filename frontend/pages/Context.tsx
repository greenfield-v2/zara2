
import React, { createContext, useState, Dispatch ,SetStateAction} from 'react';

export type User ={
    id:string
    token:string
  }

export interface userContextInterface {
    currentUser: User 
    setCurrentUser: Dispatch<SetStateAction<User>>
  }
export const Context=createContext<userContextInterface>({} as userContextInterface)
type UserProvideProps={
    children:React.ReactNode
}
export default function ContextProvider ({children}:UserProvideProps) {
    const [currentUser,setCurrentUser]=useState<User>({
      id:'',
      token:''
    })
  return (
    <Context.Provider value={{currentUser,setCurrentUser}}>
      {children}
    </Context.Provider>
  );
};