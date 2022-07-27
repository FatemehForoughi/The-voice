import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ show }) => {
  const navigation = useNavigate();
  // const [name, setName] = useState("Ali");
  // const onchange = (e) => setName(e.target.value);
  const onClick = () => navigation("candidate",{state:{
    candidate:"Ali"
  }});

  return (
    <form>
      <div className="fixed inset-0 bg-zinc-700 opacity-75"></div>
      <div className="fixed  inset-0 flex justify-center items-center ">
        <div className="relative  bg-white	opacity-1 w-2/12 rounded-lg ">
          <div className="w-5 m-2	">
            <button
              onClick={() => {
                show(false);
              }}
            >
              X
            </button>
          </div>
          <div class="mb-2">
            <label
              className="block  mt-[10px] text-gray-700  text-sm font-bold mb-2"
              for="username"
            >
              username
            </label>
            <input
             
              className="shadow  appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="mb-6">
            <button 
            onClick={onClick}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
