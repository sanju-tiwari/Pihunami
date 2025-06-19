import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import luffyvideo from "../../src/assets/about/luffyvideo.mp4";
import {  toast } from 'react-toastify';

function Login() {
   const [isLogin, setIsLogin] = useState(true);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const videoRef = useRef(null);

   const getUsers = () => {
      const users = localStorage.getItem("users");
      return users ? JSON.parse(users) : [];
   };

   const saveUsers = (users) => {
      localStorage.setItem("users", JSON.stringify(users));
   };

   const handleAuth = () => {
      if (!username || !password) {
         toast.error("Please enter a username and password!");
         return;
      }

      let users = getUsers();
      console.log("Users from localStorage:", users); 

      if (isLogin) {
         console.log("Attempting login with:", username, password);
         const user = users.find((u) => u.username === username);
         if (!user) {
            toast.error("User not found! Please register.");
            return;
         }
         if (user.password !== password) {
            toast.error("Incorrect password!");
            return;
         }

         localStorage.setItem("isAuthenticated", "true");
         localStorage.setItem("loggedInUser", username);
         toast("Login successful!");
         console.log(username);
         window.location.href = "/home";
      } else {
         if (users.some((u) => u.username === username)) {
            toast.error("Username already taken!");
            return;
         }

         users.push({ username, password });
         saveUsers(users);
         toast.success("Registration successful! Please log in.");
         setIsLogin(true);
         setUsername("");
         setPassword("");
      }
   };

   const handlesubmit = (e) => {
      e.preventDefault();
      handleAuth();
   };

   useEffect(() => {
      if (videoRef.current) {
         videoRef.current.volume = 0.2;
      }
   }, []);

   return (
      <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center">
         <div className="absolute top-0 left-0 w-full h-full">
            <h1 className="text-[2rem] dr-sugiyama-regular z-99 text-white p-2 absolute">Pihunami🤍</h1>
            <video ref={videoRef} autoPlay loop muted={false} src={luffyvideo} className="h-full w-full object-cover opacity-50" />
         </div>
         <form onSubmit={handlesubmit} className="text-white z-[99] p-4">
            <div className="flex flex-col items-center p-6 border rounded-lg w-80 shadow-lg">
               <h2 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
               <input
                  autoComplete="off"
                  className="border p-2 rounded mb-2 w-full"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
               <input
                  autoComplete="off"
                  className="border p-2 rounded mb-2 w-full"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button type="submit" className={`p-2 rounded w-full ${isLogin ? "bg-green-500" : "bg-blue-500"} text-white`}>
                  {isLogin ? "Login" : "Register"}
               </button>
               <p className="mt-2 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <span
                     className="text-blue-600 cursor-pointer"
                     onClick={() => {
                        setIsLogin(!isLogin);
                        setUsername("");
                        setPassword("");
                     }}
                  >
                     {isLogin ? "Register here" : "Login here"}
                  </span>
               </p>
            </div>
         </form>
      </div>
   );
}

export default Login;
