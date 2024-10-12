
import SigninMain from '../../components/SigninMain'
import SignupRight from '../../components/AuthContent'
import Navbar from '../../components/Navbar'

function Signin() {
  return (
<>
<Navbar/>
  <div className="flex h-screen">
    <div className="w-1/2 max-md:hidden">
      <SignupRight />
    </div>
    <div className="w-2/3 max-md:w-full">
      <SigninMain />
    </div>
  </div>
</>

  )
}

export default Signin
