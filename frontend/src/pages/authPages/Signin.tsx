import React from 'react'
import SigninMain from '../../components/SigninMain'
import SignupRight from '../../components/AuthContent'

function Signin() {
  return (
<>
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
