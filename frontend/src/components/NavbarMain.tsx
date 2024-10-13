import { useNavigate } from "react-router-dom"

function NavbarMain() {
  const navigate = useNavigate()
  const AuthChecker=()=>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/signup")
    } else{
      navigate("/blogs")
    }
  }

  return (
    <>
       <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 text-white bg-opacity-0">
       <a href="/home" className="text-3xl font-montserrat">BU SPACE</a>
       <div className="max-lg:hidden">
          <ul className="flex items-center space-x-8 text-lg font-extralight">
            <li className="cursor-pointer hover:text-gray-300">TEMPLATES</li>
            <li onClick={()=>{
        navigate("/blogs")
      }} className="cursor-pointer hover:text-gray-300">BLOGS</li>
            <li onClick={()=>{
        navigate("/profile")
      }} className="cursor-pointer hover:text-gray-300">PROFILE</li>
            <li onClick={()=>{
        navigate("/signin")
      }} className="cursor-pointer hover:text-gray-300">LOG IN</li>
          </ul>
          </div>
          <div className="flex">
      <button onClick={()=>{
       AuthChecker()
      }} className="px-4 py-2 mr-2 text-black bg-gray-100 rounded-md font-poppins hover:bg-gray-200">
       Get Started
      </button>
      <div className="cursor-pointer "
       onClick={()=>{
        navigate("/profile")
      }}>
      <AvatarComp  name="Profile"/>
      </div>
    </div>
        </nav>
    </>
  )
}

function AvatarComp({name}:{name: string}){
  return (
   <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full hover:bg-gray-300">
   <span className="font-medium text-gray-600 dark:text-gray-300">
       {name[0]}
   </span>
</div>
  )
}


export default NavbarMain
