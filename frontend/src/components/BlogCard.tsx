import { Link } from "react-router-dom"

interface blogCardInterface{
    id: number
    autherName: string,
    title:  string,
    content: string
    publishedDate:  string,
}

function BlogCard({autherName, title, content, publishedDate, id}: blogCardInterface) {
    
  return (
    <div className="max-w-3xl p-6 transition-all duration-300 bg-white border-b rounded-lg hover:shadow-lg hover:bg-gray-50">
    <div className="flex items-center mb-4">
      <div className="flex flex-col justify-center mr-3 ">
        <AvatarComp name={autherName} />
      </div>
      <div className="font-semibold text-gray-700">
        <span className="text-lg capitalize">{autherName}</span>
        <span className="block text-sm text-gray-500">{publishedDate}</span>
      </div>
    </div>
  <Link to={`/blog/${id}`}>
    <div className="mb-3 cursor-pointer">
      <h2 className="text-2xl font-bold text-gray-800 transition-colors hover:text-blue-500">
        {title}
      </h2>
    </div>
    </Link>
    <div className="mb-4 text-gray-600">
      <p className="text-sm leading-relaxed">
        {content.slice(0, 130) + "..."}
      </p>
    </div>
  
    <div className="mb-4">
      <span className="text-sm font-medium text-gray-500">
        {Math.ceil(content.length / 100) + " minute read"}
      </span>
    </div>
  
   
    <div className="text-right">
      <button className="font-medium text-blue-500 transition-colors hover:text-blue-700">
        Read more
      </button>
    </div>
  </div>
  
  )
}

export default BlogCard

function AvatarComp({name}:{name: string}){
   return (
    <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full h-7 w-7 dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
    </span>
</div>
   )
  
}