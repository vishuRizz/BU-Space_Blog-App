import { useNavigate } from "react-router-dom"

function Profile() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex text-2xl font-light">
      coming soon <br />
      </div>
      <button 
      className="p-2 bg-gray-300 border"
      onClick={()=>{
        localStorage.removeItem("token")
        navigate("/signin")
      }}>
        logout
      </button>
  
    </div>
  )
}

export default Profile
