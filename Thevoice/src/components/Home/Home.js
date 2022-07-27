import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from "../Login/Modal"
function Home() {
    const [show,setShow]=useState(false)
  return (
   
    <div className="text-center">
         
      <h1 className="font-bold tracking-widest text-transparent text-8xl bg-clip-text bg-gradient-to-tr from-blue-400 to-pink-300 mt-[250px]">
        The Voice
      </h1>
      <div>
      {show && <Modal show={setShow}/>}
        <div className="inline">
          <button onClick={()=>{setShow(true)}} className="text-xl font-bold w-[130px] mt-[100px] border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
             Candidate
          </button>
          
        </div>
        <div className="inline">
          <button className="text-xl font-bold w-[130px] mt-[100px] border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
           <Link to="mentor"> Mentor</Link>
          </button>
        </div>
        <div className="inline">
          <button className="text-xl font-bold w-[130px] mt-[100px] border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
           <Link to="admin"> Admin</Link>
          </button>
        </div>
        
      </div>
      
    </div>
  );
}
export default Home;
