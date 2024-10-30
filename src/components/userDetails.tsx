import { useEffect, useState } from "react"

type User = {
  id: number;
  name: string;
  email: string;
  address: string;
}

export function UserDetails({id}:{id: number}) {
  const [user,setUser] = useState<User>();

  const getUser = async() => {
    const response = await fetch("/"+id);
    const result = await response.json();
    setUser(result)
  }
  useEffect(()=>{
    getUser()
  },[])

  return (
    <div>
        <h1>{user?.name}</h1>
        <strong>{user?.email}</strong>
    </div>
  )
}
