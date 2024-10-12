import blogImg from "../../assets/blog.png"
function Home() {
  return (
    <>
       <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?cs=srgb&dl=pexels-pixabay-314726.jpg&fm=jpg')" }}>
       <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 text-white bg-opacity-0">
  <div className="text-2xl font-light">BU SPACE</div>
  <ul className="flex items-center space-x-8 text-lg font-thin">
    <li className="cursor-pointer hover:text-gray-300">PRODUCTS</li>
    <li className="cursor-pointer hover:text-gray-300">TEMPLATES</li>
    <li className="cursor-pointer hover:text-gray-300">RESOURCES</li>
    <li className="cursor-pointer hover:text-gray-300">LOG IN</li>
   
  </ul>
  <div>
  <button className="px-4 py-2 text-black bg-white rounded-md hover:bg-gray-200">GET STARTED</button>
  </div>
</nav>

      <div className="flex items-center justify-between h-full px-6 bg-black bg-opacity-40">

        <div className="w-2/3 max-w-lg text-white">
          <h1 className="mb-4 text-5xl font-bold">Create a Blog</h1>
          <p className="mb-6 text-lg">
            Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
          </p>
          <button className="px-6 py-3 font-semibold text-black bg-white rounded-md hover:bg-gray-200">GET STARTED</button>
        </div>
        <div className="w-[50%] h-[60%] pt-20 max-lg:hidden">
          <img
            src={blogImg}
            alt="Blog Section Preview"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
