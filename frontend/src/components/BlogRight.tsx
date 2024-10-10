
function BlogRight() {
  return (
    <div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">About the Author</h3>
        <p className="mt-2 text-sm text-gray-600">
          Vishu is a writer who explores political issues, culture, and society through his blogs. 
          Follow him on social media to stay updated on his latest work.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Posts</h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-600">
          <li className="transition hover:text-blue-600">The Rise of Climate Activism</li>
          <li className="transition hover:text-blue-600">Why Healthcare Needs Reform</li>
          <li className="transition hover:text-blue-600">Mental Health in the Digital Age</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-600">
          <li className="transition hover:text-blue-600">Politics</li>
          <li className="transition hover:text-blue-600">Health</li>
          <li className="transition hover:text-blue-600">Technology</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Popular Tags</h3>
        <div className="mt-2 space-x-2">
          <span className="px-3 py-1 text-sm transition bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white">#Politics</span>
          <span className="px-3 py-1 text-sm transition bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white">#Health</span>
          <span className="px-3 py-1 text-sm transition bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white">#Culture</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">Follow Me</h3>
        <div className="flex mt-3 space-x-3">
          <a href="#" className="text-gray-500 transition hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 transition hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 transition hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogRight