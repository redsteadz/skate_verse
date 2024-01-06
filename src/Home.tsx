import { useState } from "react";

import Navbar from "@/components/custom/NavBar";
import skateboard from "@/assets/invised/Screenshot 2023-10-31 191326.png"
import { Button } from "@/components/ui/button"

function Home() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Navbar />
      <div className="font-bold h-[40vh] flex items-center bg-black justify-center">
        <div>
          <img src={skateboard} alt="" className="h-[40vh] rotate-[315deg]" />
        </div>
        <div className="text-white bg-black p-6 w-72 text-xl italic mx-8 ">
          "Ride the Thrill, Master the Skill: Where Skateboards Find Their
          Soul."
          <div>
            <Button variant="outline" className="text-black mt-5" >Buy Now</Button>
            <Button variant="outline" className="text-black mt-5 ml-5" >Flash Deals</Button>
          </div>
        </div>
        <div>
          <img src={skateboard} alt="" className="h-[40vh] rotate-45" />
        </div>
      </div>

        <div>
          <div className="flex justify-evenly items-center">
            <div className="min-h-80 min-w-64 mt-8 bg-gray-200 rounded-lg relative group">
            <div className="absolute break-words overflow-hidden whitespace-pre-line w-62 m-5 opacity-0 group-hover:opacity-100 transition-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab assumenda iusto deleniti dolorem architecto eveniet, quos autem reiciendis sunt.
            </div>
            <div className="flex justify-center">
              <img src={skateboard} className="w-64 h-64 group-hover:opacity-0 transition-all" alt=""/>
            </div>
              <h2 className="text-xl font-bold text-center p-0">
              Product Name</h2>
              


              <h3 className="text-l italic text-center p-0">
              $100</h3>
            <div className="text-center flex justify-evenly mb-5 items-center">
            <Button variant="outline" className="text-black mx-2 text-lg" onClick={decrement} >-</Button>
              <h1 className="text-center">{count}</h1>
            <Button variant="outline" className="text-black mx-2 text-lg" onClick={increment}>+</Button>
            </div>
            <div className="text-center flex justify-evenly mb-5 items-center">
            <Button variant="outline" className="text-black mx-2" >Buy Now</Button>
            <Button variant="outline" className="text-black mx-2" >Add to Cart</Button>
            </div>
            </div>
            <div>
              This is a product
            </div>
            <div>
              This is a product
            </div>
            <div>
              This is a product
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
