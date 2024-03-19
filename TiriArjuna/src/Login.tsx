// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
      <div className="bg-ungu w-full h-screen flex items-center justify-center">
        <form className=" bg-putih w-[500px] h-3/4 rounded-3xl">
      <div className="flex-col mb-5 group pb-4">
        <h3 className="font-bold text-3xl text-center p-8">Login</h3>
        <h2 className="px-10 text-xl">Username</h2>
        <div className="mx-10 flex flex-row  border-0 border-b-2 border-abu appearance-none peer">
          <img src="/assets/person.svg" className="pl-3 w-8"></img>
          <div className="w-full flex justify-center px-4">
          <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0  border-g appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type your username" required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
        </div>
    </div>
      <div className="flex-col mb-5 group pb-6">
          <h2 className="px-10 text-xl">Password</h2>
          <div className="mx-10 flex flex-row  border-0 border-b-2 border-abu appearance-none peer">
          <img src="/assets/lock.svg" className="pl-3 w-8"></img>
          <div className="w-full flex justify-center px-4">
          <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-abu appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type your password " required />
          <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          </div>
      </div>
      <div className="mx-10 py-5">
      <button type="submit" className="w-full flex justify-center p-3 bg-ungu rounded-full text-xl font-semibold hover:bg-abu">
        Login
      </button>
      </div>


        </form>
      </div>
  );
}

export default App;
