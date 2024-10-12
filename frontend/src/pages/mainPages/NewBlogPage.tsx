import { useState } from "react";
import NavbarMain from "../../components/NavbarMain";
import bg from "../../assets/bg.jpg";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

function BlogSubmission() {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog/add-blog`, 
      { 
        title, 
        content 
      }, 
      {
        headers: {
          Authorization: `${token}`
        }
      });
      alert("blog added")
      navigate(`/blogs`)
    } catch (error) {
      console.log("Error during post request", error);
      alert("Error, please try again baby");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <NavbarMain />
      <div
        className="absolute inset-0 z-0 bg-center bg-cover opacity-90"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-3xl p-8 bg-white rounded-lg shadow-md bg-opacity-30 backdrop-blur-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800 font-poppins">
          Create a New Blog
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-700 font-montserrat">
              Blog Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your blog title"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-700 font-montserrat">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-48 px-4 py-2 text-gray-900 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your blog content here..."
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-montserrat"
            >
              Submit Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSubmission;
