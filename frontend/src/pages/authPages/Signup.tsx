
import SignupMain from '../../components/SignupMain'
import AuthContent from '../../components/AuthContent'
import Navbar from '../../components/Navbar'

function Signup() {
 
  return (
   
    <>
    <Navbar/>
    <div className="flex h-screen">
      <div className="w-1/2 max-md:hidden">
        <AuthContent />
      </div>
      <div className="w-2/3 max-md:w-full">
        <SignupMain />
      </div>
    </div>
  </>
 
  )
}

export default Signup
