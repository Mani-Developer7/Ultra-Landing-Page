
const Navbar = () => {
  return (
  
       <nav className="flex justify-between items-center px-10 py-6 fixed bg-[#0b1120] w-full z-1">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="ultra" className="h-10"/>
          <h1 className="text-3xl ">ULTRA</h1>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-indigo-400">Home</a>
          <a href="#" className="hover:text-indigo-400">Services</a>
          <a href="#" className="hover:text-indigo-400">Products</a>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md">
            SIGN UP
          </button>
        </div>
      </nav>
  
  )
}

export default Navbar
