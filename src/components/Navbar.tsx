import { Link, useLocation, useNavigate } from "react-router-dom"
import { navLinks } from "../models/navLinks"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { IconButton } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode


const Navbar = () => {


const location=useLocation()

  const links:navLinks[]=[
    {
      name:"Home",
      path:"/"
    },
    {
      name:"Blogs",
      path:"/blogs"
    },
    {
      name:"Add Blog",
      path:"/add"
    },
  ]


  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  }

  const { toggleTheme, mode } = themeContext;

  const handleToggleTheme = () => {
    toggleTheme();
  };


  return (
    <div>
      

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
 
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

  <IconButton onClick={toggleTheme} color="inherit">
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>  
  <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     
    {
      links.map((url,index)=>{
        return(
          <li key={index}>
            <Link to={url.path} className={`block ${location.pathname ==  url.path? "text-blue-500 font-semibold":"text-gray-500"} py-2 px-3  `}>{url.name}</Link>
          </li>
        )
      })
    }
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar