import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import blogImg from "../../assets/blog.png";
import NavbarMain from "../../components/NavbarMain";
import back from "../../assets/back.jpg";
import About from "../../components/AboutPage"; 
import MakerPage from "../../components/MakerPage";

function HomeMainPage() {
  const navigate = useNavigate();
//   useEffect(()=>{
//     const token = localStorage.getItem("token")
//     if (token){
//       navigate("/blogs")
//     }
//   }, [])
 
 
  const AuthNavigation = () =>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/signup")
    } else{
       navigate("/blogs")
    }
  }
 

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -50,
        duration: 2,
        ease: "power2.out",
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.7,
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <>
      <div
        className="relative h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="relative z-40">
          <NavbarMain />
        </div>

        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-2/3 h-full bg-black text-white transform -translate-x-full z-40 md:hidden`}  
          style={{ transform: 'translateX(-100%)' }}
        >
          <div className="flex justify-between p-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-start p-6">
            <li className="py-4">
              <button
                onClick={() => navigate("/signup")}
                className="text-lg font-semibold"
              >
                Sign Up / Signin
              </button>
            </li>
            <li className="py-4">
              <button
                onClick={AuthNavigation}
                className="text-lg font-semibold"
              >
               All Blogs
              </button>
            </li>
            <li className="py-4">
              <button
                onClick={() => navigate("/profile")}
                className="text-lg font-semibold"
              >
               Your Profile
              </button>
            </li>
            <li className="py-4">
              <button
                onClick={() => {
                  localStorage.removeItem("token")
                  alert("you have been logged out of bu-space")
                  navigate("/singin")
                }
                }
                
                className="text-lg font-semibold"
              >
               Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="relative z-30 flex items-center justify-between h-full px-6 bg-black bg-opacity-10">
          <div className="w-2/3 max-w-lg text-white">
            <h1 ref={headingRef} className="mb-4 text-5xl font-bold font-poppins">
              Create a Blog
            </h1>
            <p ref={textRef} className="mb-6 text-lg font-roboto">
            Anonymously Share your Gossips with the world. Create a beautiful, annoying or even rebellious blog that comes to your mind.
            </p>
            <button
              ref={buttonRef}
              onClick={toggleMenu}  
              className="px-6 py-3 font-semibold text-black bg-white rounded-md font-poppins hover:bg-gray-200 md:hidden" 
            >
              Features
            </button>
            <button
              ref={buttonRef}
              onClick={AuthNavigation}  
              className="px-6 py-3 font-semibold text-black bg-white rounded-md font-poppins hover:bg-gray-200 max-md:hidden" 
            >
              Check our Blogs
            </button>
          </div>
          <div className="w-[50%] h-[60%] pt-20 max-lg:hidden">
            <img
              ref={imageRef}
              src={blogImg}
              alt="Blog Section Preview"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <About /> 
      <MakerPage/>
    </>
  );
}

export default HomeMainPage;
