import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { UseBlogId } from "../../hooks"
import SingleBlog from "../../components/SingleBlog"
import LoaderTwo from "../../components/miniComponents/LoaderTwo"

function Blog() {
  const { id } = useParams<{ id: string }>();
  const {loading, blog} = UseBlogId({
    id: Number(id)
  })
  if(loading){
    return (
      <div className="flex items-center justify-center w-full h-screen">
         <LoaderTwo/>
      </div>
    )
  }
  if(!blog){
    return(
      <div>
        The Blog with this Blog id does not exist anymore
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
