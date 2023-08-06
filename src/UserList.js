import apiClient from "./axiosclient";
import { useEffect, useState } from "react";

export default function UserList(){
    const [userlist, setuserlist] = useState([]);

    useEffect(()=> {
        apiClient.get("/users")
        .then((res) => setuserlist(res.data))
        .catch((error) => console.log(error));
    }, [])

    return <>
    <h1>{userlist.map(user => <p key={user.id} className="username">{user.username}</p>)}</h1>
    
    </>


}