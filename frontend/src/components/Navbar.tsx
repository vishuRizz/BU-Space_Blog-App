
function Navbar() {
  return (
    <main>
     <div className="flex justify-between w-full h-16 p-4 border-b">
      <div className="flex items-center text-xl font-light">BU SPACE</div>
      <div className="flex gap-x-3"> 
      <div className="flex items-center ">Write</div>
      <div className=""> <AvatarComp/> </div>
      </div>
     </div>
    </main>
  )
}

export default Navbar


function AvatarComp(){
  return (
   <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full w-9 h-9 dark:bg-gray-600">
   <span className="font-medium text-gray-600 dark:text-gray-300">
       VP
   </span>
</div>
  )
 
}