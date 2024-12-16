import Image from "next/image";

export default function Home(){
  return(
    <div className="bg-gray-200 h-screen flex justify-center items-center ">
      <div className="text-3xl w-1/2  px-5 -mt-52">
        <Image src={"/pictures/logo.svg"} width={500} height={400}alt = "logo"/>
        <p className="ml-12 -mt-6 ">Facebook helps you connect and share with the people in your life</p>
      </div>

      <div className="bg-white flex flex-col rounded-xl p-7 -mt-44 items-center">
        <input className=" p-2 m-2 border border-1 border-gray-400  rounded-md w-80" type="text" placeholder="Email address or phone number"/>
        <input className="m-2 p-2 border border-1 border-gray-400  rounded-md w-80" type="password" placeholder="password"/>
        <button className="bg-blue-600 w-80  text-white rounded hover:bg-blue-700 focus:outline rounded-1 p-2 m-2 
        ">Log in</button>
        <div className="p-2 m-2 text-blue-600 text-center mx-10 text-sm hover:underline">Forgotten password?</div>
        <span className="my-2"><hr/></span>
        <button className=" bg-green-500 hover:bg-green-600  rounded rounded-1 p-2 m-2 text-sm text-white font-bold w-fit text-center mx-auto">Create new account</button>
        <span className="absolute text-lg text-black -bottom-12  ">Create a Page for a celebrity, brand or business.</span>
      </div>
    






 






    </div>
  )
}
   