"use client";

const ViewInvoice = () => {
  return (
    <div className="w-full px-36 py-8 bg-lightBackground ">
      <div className="flex flex-col">
        <span className=" flex items-center gap-3">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <span className="text-base font-bold">Go back</span>
        </span>

        <div className="bg-white px-9 py-6 mt-10 flex justify-between rounded-[8px] shadow-slate-200 shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex items-center ">
            <span className="mr-9 text-sm font-normal text-coolGray">
              Status
            </span>
            <span className="mr-5 text-sm font-bold bg-green-100/40 w-24 h-12 rounded-[8px] flex items-center justify-center gap-2 text-green-400">
              <div className="h-2 w-2 bg-green-400  rounded-full"></div>Paid
            </span>
          </div>
          <div className="flex items-center justify-center gap">
            <button className="mr-5 text-sm font-bold bg-blue-50/50 px-7 text-coolGray  h-12 rounded-full flex justify-center items-center">
              Edit
            </button >
            <button  className="mr-5 text-sm font-bold  bg-red px-7 text-white h-12 rounded-full flex justify-center items-center ">
              Delete
            </button >
            <button  className=" text-sm bg-primaryPurple px-7 text-white text-nowrap font-bold h-12 rounded-full flex justify-center items-center  ">
              Mark as Paid
            </button >
          </div>
        </div>

        <div className="w-full h-full bg-white mt-7 p-10 flex flex-col gap-7 rounded-[8px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <span className="mr-20 text-base font-bold">
                <span className="text-mediumGray">#</span>RT3080
              </span>
              <span className="mr-9 text-sm font-normal text-coolGray">
                Graphic Designer
              </span>
            </div>

            <div className="flex flex-col">
              <span className="mr-9 text-sm font-normal text-coolGray">
                19 Union Terrace
              </span>
              <span className="mr-9 text-sm font-normal text-coolGray">
                London
              </span>
              <span className="mr-9 text-sm font-normal text-coolGray">
                E1 3EZ
              </span>
              <span className="mr-9 text-sm font-normal text-coolGray">
                United Kingdom
              </span>
            </div>
          </div>

          <div className="flex gap-36">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <span className="mr-9 text-sm font-normal text-coolGray">
                  Invoice Date
                </span>
                <span className="mr-20 text-base font-bold">21 Aug 2021</span>
              </div>

              <div className="flex flex-col gap-5">
                <span className="mr-9 text-sm font-normal text-coolGray">
                  Payment Due
                </span>
                <span className="mr-20 text-base font-bold">21 Aug 2021</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <span className="mr-9 text-sm font-normal text-coolGray">
                  Bill To
                </span>
                <span className="mr-20 text-base font-bold">Alex Grim</span>
              </div>

              <div className="flex flex-col">
                <span className="mr-9 text-sm font-normal text-coolGray">
                  19 Union Terrace
                </span>
                <span className="mr-9 text-sm font-normal text-coolGray">
                  London
                </span>
                <span className="mr-9 text-sm font-normal text-coolGray">
                  E1 3EZ
                </span>
                <span className="mr-9 text-sm font-normal text-coolGray">
                  United Kingdom
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="mr-9 text-sm font-normal text-coolGray">
                Sent to
              </span>
              <span className="mr-20 text-base font-bold">
                alexgrim@mail.com
              </span>
            </div>
          </div>

          <div className="bg-blue-50/50 w-full rounded-[8px] overflow-hidden">
          <div className="px-6 py-6">
          <table className="mb-6 w-full">
              <thead>
                <tr className="text-left grid grid-cols-9 gap-4 mb-5 ">
                  <th className="col-span-4 text-sm font-medium text-coolGray ">
                    Item Name
                  </th>
                  <th className="col-span-2 text-sm font-medium text-coolGray flex h-full">
                    Qty.
                  </th>
                  <th className="col-span-2 text-sm font-medium text-coolGray flex h-full">
                    Price
                  </th>
                  <th className="col-span-1 text-sm font-medium text-coolGray flex h-full">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-2">
                <tr className="grid grid-cols-9 gap-4 ">
                  <td className="col-span-4 ">
                   Banner Design
                  </td>
                  <td className="col-span-2">
                   1
                  </td>
                  <td className="col-span-2">
                   1
                  </td>
                  <td className="col-span-1">
                  156.00
                  </td>
                </tr>


                <tr className="grid grid-cols-9 gap-4 mt-4">
                  <td className="col-span-4">
                  Email Design
                  </td>
                  <td className="col-span-2">
                  2
                  </td>
                  <td className="col-span-2 ">
                  2
                  </td>
                  <td className="col-span-1">
                  156.00
                  </td>
                 
                  
                </tr>
              </tbody>
            </table>
          </div>
         

            <div className="w-full h-16 bg-foreground flex justify-between items-center px-6  ">
            <span className="text-white">Amount Due</span>
            <span className="text-white mr-12 ">$ 566</span>
            </div>

         

          </div>


        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
