import bg from "../../assets/invised/Screenshot 2023-10-31 190419.png"

function Pcard(){
  return(
    <>
      <div className="w-44 bg-gradient-to-t from-black via-orange-500 to-orange-500 m-5 hover:to-black hover:via-black transition-all shrink-0 flex flex-col justify-center items-center">
        <div>
          <img src={bg} alt=""/>
        </div>
        <div className="text-white m-0 block w-full h-full">
          <h3>Mouse Corsair M65</h3>
          <h1 className="text-xl font-bold text-center">61.98</h1>
        </div>
      </div>
    </>
  )
}

export default Pcard;
