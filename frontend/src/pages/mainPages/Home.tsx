import { useNavigate } from "react-router-dom";
import blogImg from "../../assets/blog.png";
import NavbarMain from "../../components/NavbarMain";

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="relative h-screen bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?cs=srgb&dl=pexels-pixabay-314726.jpg&fm=jpg')",
        }}
      >
       <NavbarMain/>

        <div className="flex items-center justify-between h-full px-6 bg-black bg-opacity-30">
          <div className="w-2/3 max-w-lg text-white">
            <h1 className="mb-4 text-5xl font-bold font-poppins">Create a Blog</h1>
            <p className="mb-6 text-lg font-roboto">
              Share your story with the world. Create a beautiful, personalized blog that fits your brand.
            </p>
            <button onClick={()=>{
              navigate("/signup")
            }} className="px-6 py-3 font-semibold text-black bg-white rounded-md font-poppins hover:bg-gray-200">
              GET STARTED
            </button>
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
  );
}

export default Home;
