import React from "react";
import Navbar from "./component/Navbar";

export default function Settings() {
  return (
    <div className=" w-full h-full">
      <Navbar />
      <div className="flex flex-row justify-between p-16 ">
        <div className="flex items-center pl-20 w-[450px]">
          <div className="w-full border border-black rounded-xl h-[400px] justify-center">
            <div className="p-5">
              <h3 className="text-xl font-bold flex flex-col just items-center">
                Vincent Kopling
              </h3>
              <h4 className="flex p-1 flex-col items-center">@vkops</h4>
              <div className="flex flex-col items-center over p-6 space-y-10">
                <img
                  src="./assets/user.svg"
                  className="rounded-full w-44 object-cover object-top"
                ></img>
                <button
                  type="submit"
                  className="flex bg-heder p-2 rounded-xl font-semibold pt-2 w-48 justify-center"
                >
                  Upload New Photo{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[600px] w-[800px] pr-10 ">
          <div
            className="flex flex-col  
           border w-full border-black rounded-lg"
          >
            <div className="flex flex-col items-center w-full bg-heder justify-center font-semibold border-b-[1px] border-black rounded-t-lg h-32">
              <h1 className="text-3xl ">Edit Profile</h1>
            </div>
            <div className="flex flex-col p-8">
              <form>
                <div className="flex flex-row justify-center space-x-14">
                  <div className="border border-gray-400 w-80 h-14 rounded-lg">
                    <div className="pl-2">
                      <input
                        type="text"
                        placeholder="Fullname*"
                        className="w-60 h-12 pl-4 border-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="border border-gray-400 w-80 h-14 rounded-lg">
                    <div className="pl-2">
                      <input
                        type="text"
                        placeholder="Username*"
                        className="w-60 h-12 pl-4 border-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-8 space-y-8">
                  <div className="w-full rounded-lg h-14  border border-gray-400 ">
                    <div className="pl-5 ">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password*"
                        className="w-[99%] h-12 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full rounded-lg h-14  border border-gray-400 ">
                    <div className="pl-5 ">
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Confirm Password*"
                        className="w-[99%] h-12 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full rounded-lg h-14  border border-gray-400 text-0">
                    <div className="pl-5 ">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address*"
                        className="w-[99%] h-12 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                  <button type="submit" className="p-4 w-56 text-lg font-semibold rounded-lg bg-heder">UPDATE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
