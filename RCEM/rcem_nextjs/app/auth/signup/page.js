import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 bg-white">
<<<<<<< HEAD

        <div className="w-1/2 p-8 border-r border-gray-300">

          <h1 className="text-3xl font-semibold mb-6 text-gray-700">Signup</h1>
          <p className="mb-4 text-gray-700">Create an Account</p>

          <form className="space-y-4">

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email/Username</label>
=======
        <div className="w-1/2 p-8 border-r border-gray-300">
          <h1 className="text-3xl font-semibold mb-6 text-gray-700">Login</h1>
          <p className="mb-4 text-gray-700">
            To log in, please enter your email address and password.
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email/Username
              </label>
>>>>>>> origin
              <input
                type="text"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Email/username"
              />
            </div>
            <div>
<<<<<<< HEAD
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
=======
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
>>>>>>> origin
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Full Name"
              />
            </div>

            <div>
<<<<<<< HEAD
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
=======
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
>>>>>>> origin
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Password"
              />
            </div>
            <div>
<<<<<<< HEAD
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="password"
=======
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
>>>>>>> origin
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md shadow-sm hover:bg-green-800"
              >
<<<<<<< HEAD
                Signup
              </button>


            </div>

            <div>
              <a href="login" className="text-sm text-blue-500 hover:underline">Already Have an Account? </a>
            </div>

=======
                Sign up
              </button>

           
            </div>

            <div>
              <Link
                href="login"
                className="text-sm text-blue-500 hover:underline"
              >
               Already have an Account?
              </Link>
            </div>
>>>>>>> origin
          </form>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400">Not sure</div>
          </div>
        </div>
<<<<<<< HEAD

=======
>>>>>>> origin
      </div>
    </div>
  );
}

export default page;
