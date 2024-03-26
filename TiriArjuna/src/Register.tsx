export default function Register(){
    return (
        <div className="bg-[url('/assets/bagron.svg')] w-full h-screen flex items-center justify-center">
            <form className=" bg-form w-[500px] h-[650px] rounded-3xl">
                <div className="flex-col mb-5 group">
                    <h3 className="font-bold text-3xl text-center p-8 text-putih">Sign Up</h3>
                </div>
                <div className = "px-8 pb-6">
                    <label for="user_name" class="text-putih block mb-2 text-lg font-bold text-gray-900 dark:text-white">Create Username</label>
                    <input type="text" id="user_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Username*" required />
                </div>

                <div className = "px-8 pb-6">
                    <label htmlfor="floating_password" class="text-putih block mb-2 text-lg font-bold text-gray-900 dark:text-white">Create a Password</label>
                    <input type="password" name="floating_password" id="floating_password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min 8 Characters* " required />
                </div>

                <div className = "px-8 pb-6">
                    <label htmlfor="floating_password" class="text-putih block mb-2 text-lg font-bold text-gray-900 dark:text-white">Confirm Password</label>
                    <input type="password" name="floating_password" id="floating_password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Your Password Again* " required />
                </div>

                <div className = "px-8 pb-6">
                    <label htmlfor="floating_email" class="text-putih block mb-2 text-lg font-bold text-gray-900 dark:text-white">Input Email Address</label>
                    <input type="text" name="floating_email" id="floating_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Your Email* " required />
                </div>

                <div className="mx-10 py-8 justify-center">
                    <a href="">
                        <button type="submit" className="w-full flex justify-center p-3 bg-ungu rounded-full text-xl font-semibold hover:bg-abu">
                            SIGN UP
                        </button>
                    </a>
                </div>


            </form>
        </div>
);
}