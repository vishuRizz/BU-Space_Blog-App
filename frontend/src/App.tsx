import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/authPages/Signup";
import Signin from "./pages/authPages/Signin";
import Blog from "./pages/mainPages/Blog";
import Blogs from "./pages/mainPages/Blogs";
function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/blogs" element={<Blogs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
