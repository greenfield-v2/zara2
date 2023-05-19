
import React, { createContext, useState, Dispatch ,SetStateAction} from 'react';

export type User ={
    id:number
    token:string
    isAdmin:number
  }

export interface userContextInterface {
    currentUser: User 
    setCurrentUser: Dispatch<SetStateAction<User>>
    logout: () => void;
  }
export const Context=createContext<userContextInterface>({} as userContextInterface)
type UserProvideProps={
    children:React.ReactNode
}
export default function ContextProvider ({children}:UserProvideProps) {
  const [currentUser,setCurrentUser]=useState<User>({
    id:0,
    token:'',
    isAdmin:0
  })
  const logout=()=>{
    setCurrentUser({
      id:0,
      token:'',
      isAdmin:0
    })
  }
  return (
    <Context.Provider value={{currentUser,setCurrentUser,logout}}>
      {children}
    </Context.Provider>
  );
};