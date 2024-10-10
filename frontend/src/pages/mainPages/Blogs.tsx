import BlogCard from "../../components/BlogCard"
import BlogRight from "../../components/BlogRight"
import Loader from "../../components/miniComponents/Loader";
import Navbar from "../../components/Navbar"
import { useBlog } from "../../hooks"

function Blogs() {
    const {loading, blogs} = useBlog();
    if(loading){
        return (
            <div className="flex items-center justify-center w-full h-screen">
               <Loader/>
            </div>
        )
    }
    
  return (
    <main className="">
    <Navbar />
    <div className="flex">
     
      <div className="w-full md:w-[65%] h-screen border-r overflow-y-auto flex justify-center items-start">
        <div className="w-full max-w-2xl p-4">
          {blogs.map(blog=>(
            <BlogCard 
            id={blog.id}
            autherName={blog.auther.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate="10/10/2024"
          />
          ))}
           </div>
      </div>
      <div className="hidden md:block md:w-[35%] h-screen p-6 bg-gray-50">
        <BlogRight />
      </div>
    </div>
  </main>
  

  )
}

export default Blogs
