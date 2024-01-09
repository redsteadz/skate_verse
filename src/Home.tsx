import { useState } from "react";
import bg1 from './assets/lucas-kohoko-dNvY4ufMAwI-unsplash.jpg'
import bg2 from './assets/tom-morbey-QJz32ZuCArg-unsplash.jpg'
import bg3 from './assets/adrien-vajas-6rPugl6sVmY-unsplash.jpg'

import Navbar from "@/components/custom/NavBar";
import ProductStack from "@/components/custom/ProductCardStack";
import skateboard from "@/assets/invised/Screenshot 2023-10-31 191326.png";
import background from "@/assets/homePage.jpg";
import { Button } from "@/components/ui/button";


// In the world of skateboarding, the only limits are the ones you set for yourself. Break free and ride beyond.
function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center m-0">
          <div className=" 
          grid grid-cols-5 grid-rows-5 gap-0
            max-w-5xl min-w-[100vw] min-h-[50vh]
            ">
            <div className="col-span-3 row-span-3 bg-blue-200 min-h-72 
              bg-[url('./assets/tom-morbey-QJz32ZuCArg-unsplash.jpg')] bg-center bg-cover
              flex justify-center items-center text-center
              ">
              <h2 className="text-5xl text-black drop-shadow-2xl font-bold">
"Explore a vibrant selection of high-quality skateboards,"
              </h2>
            </div>
            <div className="col-span-2 row-span-5 bg-red-200 min-h-16 
              bg-[url('./assets/daniel-lincoln-Sj87XsPs4b4-unsplash.jpg')] bg-bottom bg-cover 
              flex justify-center items-center text-center 
              hidden sm:flex
              "> 

              <h2 className="text-5xl text-white drop-shadow-2xl font-bold">
"unleash your creativity with customizable designs,"
              </h2>

            </div>
            <div className="col-span-3 row-span-5 bg-green-200 min-h-16 
            bg-[url('./assets/adrien-vajas-6rPugl6sVmY-unsplash.jpg')] bg-[center] bg-cover 
              flex justify-center items-center text-center 
              ">

              <h2 className="text-5xl text-white drop-shadow-2xl font-bold">
"discover top-notch accessories for the ultimate ride,"
              </h2>
            </div>
          </div>
        </div>
        <div className="
          bg-red-200 bg-[url('./assets/scott-osborne-HGRYluhy4Y8-unsplash.jpg')] bg-cover bg-center
          min-h-[43vh] 
          flex flex-col justify-center items-center
          text-5xl font-bold text-black
          ">
          <h1>
"and enjoy expert advice from our passionate skateboard enthusiasts."
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
