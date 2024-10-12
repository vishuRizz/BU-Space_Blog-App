import { useNavigate } from "react-router-dom"

function NavbarMain() {
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
    <>
       <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 text-white bg-opacity-0">
       <a href="/" className="text-3xl font-montserrat">BU SPACE</a>
       <div className="max-lg:hidden">
          <ul className="flex items-center space-x-8 text-lg font-extralight">
            <li className="cursor-pointer hover:text-gray-300">TEMPLATES</li>
            <li onClick={()=>{
        navigate("/blogs")
      }} className="cursor-pointer hover:text-gray-300">BLOGS</li>
            <li onClick={()=>{
        navigate("/profile/2")
      }} className="cursor-pointer hover:text-gray-300">PROFILE</li>
            <li onClick={()=>{
        navigate("/signin")
      }} className="cursor-pointer hover:text-gray-300">LOG IN</li>
          </ul>
          </div>
          <div>
            <button onClick={()=>{
              AuthChecker()
            }} className="px-4 py-2 text-black bg-white rounded-md font-poppins hover:bg-gray-200">
              WRITE A BLOG
            </button>
          </div>
        </nav>
    </>
  )
}

export default NavbarMain
