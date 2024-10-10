import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { UseBlogId } from "../../hooks"
import SingleBlog from "../../components/SingleBlog"
import Loader from "../../components/miniComponents/Loader"


function Blog() {
  const id = useParams()
  const {loading, blog} = UseBlogId({
    id: Number(id)
  })

  if(loading){
    return (
      <div className="flex items-center justify-center w-full h-screen">
         <Loader/>
      </div>
    )
  }
  return (
    <div>
      <Navbar/>
      <SingleBlog  title= {blog.title }
    content= {blog.content}
    authorName= {blog.auther.name}
    publishedDate=  {"10/10/2024"}/>
    </div>
  )
}

export default Blog
