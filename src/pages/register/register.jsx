import { useState } from "react";
import "./register.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, password, address, phone });
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
            email : email,
            firstName : firstName,
            lastName : lastName,
            password : password,
            address : address,
            phone : phone

        }).then((res)=>{
            toast.success("Registration successful");
            navigate("/login")
        }).catch((err)=>{
            toast.error(err?.response?.data?.error || "an error occured")
        })
    };

    return (
        <div className="bg-picture h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div className="w-[400px] h-[650px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
                    <img src="/audiologo.png" alt="logo" className="w-[150px] h-[150px] absolute top-[-30px] object-cover" />

                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none mt-28"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none mt-4"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none mt-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none mt-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none mt-4"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none mt-4"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <button className="w-[300px] h-[45px] bg-white text-black text-xl mt-6 rounded-2xl ">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
