import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../styles/users.module.css'

const Users:React.FC=()=>{
    const [users,setUsers]=useState<any>([])
    const [count ,setCount]=useState<number>(0)
    interface Customers{
        id:number,
        username:string,
        email:string,
        isAdmin:number
    }
    console.log(users)
    const getAllUsers=async()=>{
        const res=await axios.get<Customers[]>(`http://${process.env.HOST}:${process.env.PORT}/users`)
        setUsers(res.data)
    }

    const removeCart=async(id:number)=>{
        await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/userCart/${id}`)
    }
    const removeUser=async(id:number)=>{
        removeCart(id)
        await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/users/remove/${id}`)
        setCount(count+1)
    }
    useEffect(()=>{
        getAllUsers()
    },[count])
    return (<div className={styles.admin}>
        {users.map((user,i)=>{
            return (<div>
                {user.isAdmin===0 && <div key={i} className={styles.infouser}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="profile" className={styles.img}/>
                        <div className={styles.rs}>
                            <div className={styles.info}>
                                <h4>{user.username}</h4>
                                <p>{user.email}</p>
                            </div>
                            <button className={styles.btn} onClick={()=>removeUser(user.id)}>remove</button>   
                        </div>
                        <hr />
                    </div>}
            </div>       
            )})
    }
    </div> )
            
            
}
export default Users;