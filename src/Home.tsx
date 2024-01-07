import { useState } from "react";

import Navbar from "@/components/custom/NavBar";
import skateboard from "@/assets/invised/Screenshot 2023-10-31 191326.png";
import background from "@/assets/homePage.jpg";
import { Button } from "@/components/ui/button";

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-5 flex justify-center">
          <div className="bolder relative max-w-[100vw] flex justify-center">
            <div className="overflow-hidden h-64 w-full rounded-xl">
              <img src={background} alt="" className="object-cover sm:-translate-y-1/2 rounded-xl" />
            </div>
            <div className=" m-3 text-2xl absolute ">
              Starting a website is a challenging task. It can be a daunting
              task
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
