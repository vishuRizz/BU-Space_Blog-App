
function SignupRight() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-center bg-cover " 
     >
      <div className="relative max-w-lg p-10 mx-auto transition duration-500 transform bg-white shadow-lg bg-opacity-90 rounded-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl">
        
        <p className="font-serif text-4xl italic leading-relaxed text-center text-gray-800 animate-fadeIn">
          “The best way to predict the future is to invent it.”
        </p>
        
        <p className="mt-6 text-xl font-medium text-right text-gray-600">
          — Alan Kay
        </p>

        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-200 rounded-full opacity-30 blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-200 rounded-full opacity-30 blur-xl animate-float"></div>
      </div>
    </div>
  );
}

export default SignupRight;
