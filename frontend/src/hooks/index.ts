import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const useBlog=()=>{
    interface Blog {
        id: number
        auther: { name: string };
        title: string;
        content: string;
      }
const [loading, setLoading] = useState(true)
const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        const fetchBlogs = async ()=>{
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers: {
                    Authorization: `${localStorage.getItem("token")}`
                }
            })
            setBlogs(response.data.reverse())
            setLoading(false)
        }
        fetchBlogs()
    }, [])

    return {loading, blogs}
}
export const UseBlogId=({id}:{id: number})=>{
    interface Blog {
        id: number
        auther: { name: string };
        title: string;
        content: string;
      }
const [loading, setLoading] = useState(true)
const [blog, setBlog] = useState<Blog>()

useEffect(()=>{
       const fetchBlogs = async ()=>{
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers: {
                    Authorization: `${localStorage.getItem("token")}`
                }
            })
            setBlog(response.data.blog)
        } catch (error) {
            console.error("Error fetching blog:", error);
        } finally{
            setLoading(false)
        }
    }
    fetchBlogs()
}, [id])

return {loading, blog}

}

