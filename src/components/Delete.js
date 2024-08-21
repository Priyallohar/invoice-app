"use client"

const Delete = () => {
    document.body.className(".")
  return (
    <div className="absolute w-full h-full bg-black/50  z-10 flex justify-center items-center">
        <div className="bg-white rounded-[8px] w-[560px] p-10 flex flex-col gap-8 ">
        <h1 className="text-2xl font-bold">Confirm Deletion</h1>
        <p className="text-sm">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
        <div className="w-full flex justify-end">
        <button className="mr-5 text-sm font-bold bg-blue-50/50 px-7 text-coolGray  h-12 rounded-full flex justify-center items-center">
             Cancel
            </button>
            <button className=" text-sm font-bold  bg-red px-7 text-white h-12 rounded-full flex justify-center items-center ">
              Delete
            </button>
        </div>
        </div>
        

    </div>
  )
}

export default Delete