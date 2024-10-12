import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const AuthChecker=()=>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/signin")
    } else{
      navigate("/new-blog")
    }
    

  }

  return (
    <nav className="flex items-center justify-between w-full h-16 p-6 text-black bg-opacity-0 border-b ">
      
    <a href="/" className="text-3xl font-montserrat">BU SPACE</a>
    <div className="max-lg:hidden">
    <ul className="flex items-center space-x-8 text-lg font-extralight">
      <li className="cursor-pointer hover:text-gray-300">PRODUCTS</li>
      <li onClick={()=>{
        navigate("/blogs")
      }} className="cursor-pointer hover:text-gray-300">BLOGS</li>
      <li onClick={()=>{
        navigate("/profile/2")
      }}
      className="cursor-pointer hover:text-gray-300">PROFILE</li>
      <li onClick={()=>{
        navigate("/signin")
      }} className="cursor-pointer hover:text-gray-300">LOG IN</li>
    </ul>
    </div>
    <div>
      <button onClick={()=>{
       AuthChecker()
      }} className="px-4 py-2 text-black bg-gray-100 rounded-md font-poppins hover:bg-gray-200">
        WRITE A BLOG
      </button>
    </div>
  </nav>
  )
}

export default Navbar


