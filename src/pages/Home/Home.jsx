import { useEffect } from "react";
import { io } from "socket.io-client";

const Home = () => {
  // useEffect(()=>{

  // })
  const socket = io("http://localhost:5000",{
    withCredentials:true
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    const form = e.target;
    const message = form.message.value;
    // console.log(message);
    if (message) {
      console.log("hello");
      socket.emit();
    }
  };

  return (
    <div className="w-full m-auto bg-red-200">
      <h3>this is home</h3>

      <div className=" max-w-7xl pt-7 mx-auto bg-green-600">
        <form className="w-full mx-auto text-center " onSubmit={handlesubmit}>
          <input name="message" type="text" />
          <button className="py-2 px-3 rounded-sm bg-red-600 " type="submit">

            Sent
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
