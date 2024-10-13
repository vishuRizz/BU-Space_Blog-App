import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavbarMain from "./NavbarMain";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const navigate = useNavigate()
  const headingRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse", 
        },
        opacity: 0,
        y: -100, 
        duration: 1.5, 
        ease: "power4.out",
      });

      gsap.from(textRef1.current, {
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse", 
        },
        opacity: 0,
        y: -50, 
        duration: 1.5, 
        ease: "power4.out", 
        delay: 0.3,
      });

      gsap.from(textRef2.current, {
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top center", 
          toggleActions: "play none none reverse", 
        },
        opacity: 0,
        y: -50, 
        duration: 1.5,
        ease: "power4.out", 
        delay: 0.6, 
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={aboutSectionRef}
        className="relative h-screen bg-center bg-cover"
        style={{
            backgroundImage: `url("https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=800")`
        }}
      >
        

        <div className="relative z-30 flex flex-col items-center justify-center h-full px-6 bg-black bg-opacity-40">
          <h1 ref={headingRef} className="mb-8 text-5xl font-light text-white font-poppins">
            ANONYMOUS BU Blogging Platform
          </h1>
          <p ref={textRef1} className="max-w-2xl mb-6 text-xl text-center text-slate-200 font-roboto">
            At BU SPACE, we believe in the power of free speech and the right to express oneself
            anonymously. Our platform allows you to share your thoughts, stories, and ideas without
            fear of judgment. Join us in creating a safe space for open dialogue and creativity.
          </p>
          <p ref={textRef2} className="max-w-2xl mb-6 text-xl text-center text-slate-200 font-roboto">
            Whether you want to blog about personal experiences, current events, Clubs, fights or creative writing,
            our platform is here to support you. Let's bring your voice to the world, anonymously and freely!
          </p>
          <div className="p-2 rounded-lg border-slate-400">
          <button  onClick={()=>{
            navigate("/blogs")
          }}
              className="px-6 py-3 font-light text-black bg-white rounded-md font-poppins hover:bg-gray-200 md:hidden"  // Hide on md and larger
            >
              Check all Blogs
            </button>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default About;
