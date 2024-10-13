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
      
    <a href="/home" className="text-3xl font-montserrat">BU SPACE</a>
    <div className="max-lg:hidden">
    <ul className="flex items-center space-x-8 text-lg font-extralight">
      <li className="cursor-pointer hover:text-gray-300">PRODUCTS</li>
      <li onClick={()=>{
        navigate("/blogs")
      }} className="cursor-pointer hover:text-gray-300">BLOGS</li>
      <li onClick={()=>{
        navigate("/profile")
      }}
      className="cursor-pointer hover:text-gray-300">PROFILE</li>
      <li onClick={()=>{
        navigate("/signin")
      }} className="cursor-pointer hover:text-gray-300">LOG IN</li>
    </ul>
    </div>
    <div className="flex">
      <button onClick={()=>{
       AuthChecker()
      }} className="px-4 py-2 mr-2 text-black bg-gray-100 rounded-md font-poppins hover:bg-gray-200">
        WRITE A BLOG
      </button>
      <div className="cursor-pointer "
       onClick={()=>{
        navigate("/profile")
      }}>
      <AvatarComp  name="Profile"/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

function AvatarComp({name}:{name: string}){
  return (
   <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full hover:bg-gray-300">
   <span className="font-medium text-gray-600 dark:text-gray-300">
       {name[0]}
   </span>
</div>
  )
}
