import Navbar from "./component/Navbar";

export default function Upload() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ml-2 pt-10 pl-10 ">
        <h3 className="text-2xl font-bold">Upload Documents</h3>
      </div>

      <div className="h-full flex flex-col items-center  mt-0">
        <h3 className="font-bold text-3xl text-center p-8 pb-5">Upload</h3>
        <label
          htmlFor="dropzone-file"
          className=" bg-tabel flex flex-col items-center justify-center w-96 p-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 bg-navbar hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>

        <div className="pt-2 ">
          <div className="mx-10 flex border appearance-none peer w-96 rounded-lg ">
            <input
              type="text"
              name="file_name"
              id="file_name"
              className="block rounded-lg w-full py-2.5 px-2 w-full text-sm bg-transparent  appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Input File Name"
              required
            />
            <label
              htmlFor="file_name"
              className="peer-focus:font-medium absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Input File Name
            </label>
          </div>
        </div>

        <div className="mx-10 pt-5 w-96">
          <button
            type="submit"
            className="w-full flex justify-center p-2 bg-navbar rounded-lg text-xl font-semibold hover:bg-abu"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
