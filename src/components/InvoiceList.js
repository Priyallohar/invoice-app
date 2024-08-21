"use Client"

const InvoiceList = () => {
  return (
    <div className="w-full h-full mt-16 flex flex-col gap-5">
      {/* paid */}
        <div className="bg-white pl-8 pr-6 py-3 flex justify-between rounded-[8px] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex items-center">
                <span className="mr-20 text-base font-bold"><span className="text-mediumGray">#</span>RT3080</span>
                <span className="mr-28  text-sm text-coolGray font-medium">Due  19 Aug 2021</span>
                <span className=" text-sm text-mediumGray font-medium ">Jensen Huang</span>
            </div>
            <div className="flex items-center">
                <span className="mr-14 text-base font-bold">£ 1,800.90</span>
                <span className="mr-5 text-base font-bold bg-green-100/40 w-28 h-12 rounded-[8px] flex items-center justify-center gap-2 text-green-400"> <div className="h-2 w-2 bg-green-400  rounded-full"></div>Paid</span>
                <span ><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></span>
            </div>
        </div>
        {/* pending */}
        <div className="bg-white pl-8 pr-6 py-3 flex justify-between rounded-[8px] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex items-center">
                <span className="mr-20 text-base font-bold"><span className="text-mediumGray">#</span>RT3080</span>
                <span className="mr-28  text-sm text-coolGray font-medium">Due  19 Aug 2021</span>
                <span className=" text-sm text-mediumGray font-medium ">Jensen Huang</span>
            </div>
            <div className="flex items-center">
                <span className="mr-14 text-base font-bold">£ 1,800.90</span>
                <span className="mr-5 text-base font-bold bg-orange-100/40  w-28 h-12 rounded-[8px] flex items-center  justify-center gap-2 text-orange-400 "> <div className="h-2 w-2 bg-orange-400 rounded-full"></div>Pending</span>
                <span ><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></span>
            </div>
        </div>

        {/* draft */}
        <div className="bg-white pl-8 pr-6 py-3 flex justify-between rounded-[8px] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex items-center">
                <span className="mr-20 text-base font-bold"><span className="text-mediumGray">#</span>RT3080</span>
                <span className="mr-28  text-sm text-coolGray font-medium">Due  19 Aug 2021</span>
                <span className=" text-sm text-mediumGray font-medium ">Jensen Huang</span>
            </div>
            <div className="flex items-center">
                <span className="mr-14 text-base font-bold">£ 1,800.90</span>
                <span className="mr-5 text-base font-bold bg-gray-100/40  w-28 h-12 rounded-[8px] flex items-center justify-center gap-2 text-gray-600"> <div className="h-2 w-2 bg-gray-600 rounded-full"></div>Draft</span>
                <span ><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></span>
            </div>
        </div>
    </div>
  )
}

export default InvoiceList