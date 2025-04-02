import { useState } from "react";
import "./login.css"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password);

        axios.post("http://localhost:3000/api/users/login",
            {
                email: email,
                password: password
            }
        ).then((res)=>{
            toast.success("Login successful");

            const user = res.data.user;
             localStorage.setItem("token", res.data.token)
            if(user.role === "admin"){
                navigate("/admin");
            }else{
                navigate("/")
            }

        }).catch((err)=>{
            toast.error(err.response.data.error);
        }) 
        
    }

    
    return(
    
    <div className="bg-picture w-full h-screen flex justify-center items-center" >

<form onSubmit={handleSubmit}>
        <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">

            
            <img src="/audiologo.png" alt="logo" className="w-[200px] h-[200px] absolute top-[-20px] object-cover"/>

            <input type="Email" placeholder="Email" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
             onChange={
                (e)=>{
                    setEmail(e.target.value);

             }} 
            
            />

            <input type="password" placeholder="Password" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none mt-5"
            value={password}
            onChange={
                (e)=>{
                    setPassword(e.target.value);
                }
            }
            />

            <button className="w-[300px] h-[50px] bg-white text-black text-2xl mt-5 rounded-2xl">
                Login
            </button>

           
        </div>
        
        </form>
    </div>)
}