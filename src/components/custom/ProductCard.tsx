import bg from "../../assets/invised/Screenshot 2023-10-31 190419.png";
import { Button } from "../ui/button";
import "./pcard.css";

function Pcard() {
  return (
    <>
      <div className="w-44 m-5 relative transition-all shrink-0 flex flex-col justify-center items-center border-black border-2 overflow-hidden rounded-md
        before:bg-gray-500 before:w-full before:h-2/3 before:absolute before:bottom-[60%] before:z-0 before:skew-y-[345deg]
        before:hover:skew-y-[390deg] before:hove:bottom-[70%] before:transition-all
        group
        ">
        <div className="z-10">
          <img src={bg} alt="" />
        </div>
        <div className="text-gray-900 m-0 block w-fit h-fit">
          <h3>Mouse Corsair M65</h3>
          <h1 className="text-xl font-bold text-center">61.98</h1>
          <div className="flex justify-center items-center absolute 
            group-hover:top-1/2 group-hover:right-1/2 group-hover:translate-y-[50%] group-hover:translate-x-[50%] z-20 transition-all
            ">
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pcard;
