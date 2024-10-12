function BlogRight() {
  return (
    <div className="p-6 space-y-8 bg-white rounded-lg shadow-lg">
      {/* About the Author */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">About the Author</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          I explore Technology, political issues, culture, and society through my blogs. Stay connected on social media for the latest updates.
        </p>
      </div>

{/*  
      <div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Recent Posts</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="transition cursor-pointer hover:text-blue-500">
            <span className="text-base font-medium">The Rise of Climate Activism</span>
          </li>
          <li className="transition cursor-pointer hover:text-blue-500">
            <span className="text-base font-medium">Why Healthcare Needs Reform</span>
          </li>
          <li className="transition cursor-pointer hover:text-blue-500">
            <span className="text-base font-medium">Mental Health in the Digital Age</span>
          </li>
        </ul>
      </div> */}

      <div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Categories</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="transition cursor-pointer hover:text-blue-500">
            <span className="text-base font-medium">Politics</span>
          </li>
          <li className="transition cursor-pointer hover:text-blue-500">
            <span className="text-base font-medium">Health</span>
          </li>
          <li className="transition cursor-pointer hover:text-blue-500">
            <span className="text-base font-medium">Technology</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm font-medium transition bg-gray-200 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            #Politics
          </span>
          <span className="px-3 py-1 text-sm font-medium transition bg-gray-200 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            #Health
          </span>
          <span className="px-3 py-1 text-sm font-medium transition bg-gray-200 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            #Culture
          </span>
        </div>
      </div>

      {/* Follow Me */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Follow Me</h3>
        <div className="flex space-x-4 text-gray-500">
          {/* Instagram */}
          <a href="https://www.instagram.com/vishuiuiuiuiu/" className="transition hover:text-blue-600">
            <i className="text-lg fab fa-instagram"></i>
            <span className="ml-2 text-base font-medium">Instagram</span>
          </a>
          {/* You can add other social media icons here */}
        </div>
      </div>
    </div>
  );
}

export default BlogRight;
