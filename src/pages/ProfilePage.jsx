import { useParams } from "react-router-dom"
import { users } from "../assets/users";

export default function ProfilePage(){
    const {id} = useParams()
    console.log(id);
    
    const userData = users.find(user => user.id == id)
    console.log(userData);

   
    
    return(
        <main>
            <h1>Profile Page</h1>
            <h2>{userData.name} | {userData.website}</h2>
        </main>
    )
}