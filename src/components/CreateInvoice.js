"use client";


const CreateInvoice = () => {
  return (
    <div className="fixed flex flex-col w-full h-[100vh] bg-black/50">
      <aside className="fixed flex flex-col w-[719px] h-[100vh] bg-white rounded-tr-[25px] rounded-br-[25px]">
        <div className="ml-[80px] w-[619px] px-11 py-16 overflow-y-auto">
          <header className="font-bold text-2xl tracking-tight mb-11">
            New Invoice
          </header>

          <div className="mb-12">
            <h4 className="text-primaryPurple font-bold text-base mb-6">
              Bill Form
            </h4>

            <div>
              <div className="flex flex-col mb-6 w-full">
                <label
                  className="mb-2 font-medium text-sm text-coolGray"
                  htmlFor="street-address"
                >
                  Street Address
                </label>
                <input
                  className="border rounded-[4px] font-bold text-base  h-12 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                  id="street-address"
                  name="street-address"
                  type="text"
                />
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                  <label
                    className="mb-2 font-medium text-sm  text-coolGray"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="border rounded-[4px] font-bold text-base h-12 w-full pl-5  focus:outline-none focus:border-primaryPurple"
                    id="city"
                    name="city"
                    type="text"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    className="mb-2 font-medium text-sm  text-coolGray"
                    htmlFor="post-card"
                  >
                    Post Card
                  </label>
                  <input
                    className="border rounded-[4px] font-bold text-base h-12 w-full pl-5  focus:outline-none focus:border-primaryPurple"
                    id="post-card"
                    name="post-card"
                    type="text"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    className="mb-2 font-medium text-sm  text-coolGray"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    className="border rounded-[4px]  font-bold text-baseh-12 h-12 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                    id="country"
                    name="country"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-primaryPurple font-bold text-base mb-6">
              Bill To
            </h4>

            <div>
              <div className="flex flex-col mb-7 flex-1">
                <label
                  className="mb-2 font-medium text-sm  text-coolGray"
                  htmlFor="client-name"
                >
                  Client's Name
                </label>
                <input
                  className="border rounded-[4px] font-bold text-base h-12 pl-5  focus:outline-none focus:border-primaryPurple"
                  id="client-name"
                  name="client-name"
                  type="text"
                />
              </div>

              <div className="flex flex-col mb-7 flex-1">
                <label
                  className="mb-2 font-medium text-sm  text-coolGray"
                  htmlFor="client-email"
                >
                  Client's Email
                </label>
                <input
                  className="border rounded-[4px] font-bold text-base h-12  pl-5  focus:outline-none focus:border-primaryPurple"
                  id="client-email"
                  name="client-email"
                  type="email"
                />
              </div>

              <div className="flex flex-col mb-7 flex-1">
                <label
                  className="mb-2  font-medium text-sm text-coolGray"
                  htmlFor="client-street-address"
                >
                  Street Address
                </label>
                <input
                  className="border rounded-[4px] font-bold text-base h-12 pl-5  focus:outline-none focus:border-primaryPurple"
                  id="client-street-address"
                  name="street-address"
                  type="text"
                />
              </div>

              <div className="flex gap-4 mb-7">
                <div className="flex flex-col flex-1">
                  <label
                    className="mb-2 font-medium text-sm  text-coolGray"
                    htmlFor="client-city"
                  >
                    City
                  </label>
                  <input
                    className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full focus:outline-none focus:border-primaryPurple"
                    id="client-city"
                    name="city"
                    type="text"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    className="mb-2 font-medium text-sm  text-coolGray"
                    htmlFor="client-post-card"
                  >
                    Post Card
                  </label>
                  <input
                    className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full focus:outline-none focus:border-primaryPurple"
                    id="client-post-card"
                    name="post-card"
                    type="text"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    className="mb-2 font-medium text-sm text-coolGray"
                    htmlFor="client-country"
                  >
                    Country
                  </label>
                  <input
                    className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full focus:outline-none focus:border-primaryPurple"
                    id="client-country"
                    name="country"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-12">
            <div className="flex flex-row gap-4 mb-7">
              <div className="flex flex-col flex-1">
                <label
                  className="mb-2 font-medium text-sm text-coolGray"
                  htmlFor="invoice-date"
                >
                  Invoice Date
                </label>
                <input
                  className="border rounded-[4px] font-bold text-base h-12 pl-5  pr-5 w-full focus:outline-none focus:border-primaryPurple"
                  id="invoice-date"
                  name="invoice-date"
                  type="date"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  className="mb-2 font-medium text-sm text-coolGray"
                  htmlFor="payment-terms"
                >
                  Payment Terms
                </label>
                <input
                  className="border rounded-[4px] font-bold text-base h-12 pl-5  pr-5 w-full focus:outline-none focus:border-primaryPurple"
                  id="payment-terms"
                  name="payment-terms"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="project-description"
              >
                Project Description
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full focus:outline-none focus:border-primaryPurple"
                id="project-description"
                name="project-description"
                type="text"
              />
            </div>
          </div>

          <div className=" flex flex-col mb-9">
            <h1 className="mb-6 font-semibold text-lg">Items List</h1>
            <table className="mb-6 w-full">
              <thead>
                <tr className="text-left grid grid-cols-9 gap-4 mb-5 ">
                  <th className="col-span-3 text-sm font-medium text-coolGray ">
                    Item Name
                  </th>
                  <th className="col-span-1 text-sm font-medium text-coolGray flex items-center h-full">
                    Qty.
                  </th>
                  <th className="col-span-2 text-sm font-medium text-coolGray flex items-center h-full">
                    Price
                  </th>
                  <th className="col-span-2 text-sm font-medium text-coolGray flex items-center h-full">
                    Total
                  </th>
                  <th className="w-[11%]"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-9 gap-4 ">
                  <td className="col-span-3">
                    <input
                      className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full flex items-center focus:outline-none focus:border-primaryPurple"
                      id="item-name"
                      name="item-name"
                      type="text"
                    />
                  </td>
                  <td className="col-span-1">
                    <input
                      className="border rounded-[4px] font-bold text-base h-12 pl-4  w-full flex items-center focus:outline-none focus:border-primaryPurple"
                      id="quantity"
                      name="quantity"
                      type="text"
                    />
                  </td>
                  <td className="col-span-2">
                    <input
                      className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full flex items-center focus:outline-none focus:border-primaryPurple"
                      id="price"
                      name="price"
                      type="text"
                    />
                  </td>
                  <td className="col-span-2  font-medium flex items-center h-12">
                    156.00
                  </td>
                  <td className="col-span-1 flex items-center h-12">
                    <svg
                      width="13"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                        fill="#888EB0"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="grid grid-cols-9 gap-4 mt-4">
                  <td className="col-span-3">
                    <input
                      className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full  flex items-center focus:outline-none focus:border-primaryPurple"
                      id="item-name"
                      name="item-name"
                      type="text"
                    />
                  </td>
                  <td className="col-span-1">
                    <input
                      className="border rounded-[4px] font-bold text-base h-12  pl-4 w-full  flex items-center focus:outline-none focus:border-primaryPurple"
                      id="quantity"
                      name="quantity"
                      type="text"
                    />
                  </td>
                  <td className="col-span-2">
                    <input
                      className="border rounded-[4px] font-bold text-base h-12 pl-5  w-full flex items-center focus:outline-none  focus:border-primaryPurple"
                      id="price"
                      name="price"
                      type="text"
                    />
                  </td>
                  <td className="col-span-2 font-medium flex items-center h-12">
                    156.00
                  </td>
                  <td className="col-span-1 flex items-center h-12 ">
                    <svg
                      width="13"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                        fill="#888EB0"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="text-center w-[100%] py-4 bg-gray-100 rounded-full flex justify-center items-center font-bold text-sm text-coolGray">
              <div className="mr-2 ">
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                    fill="#7E88C3"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              Add New Item
            </button>
          </div>

          <div className=" flex justify-between items-center">
            <button className="bg-gray-100 font-bold text-sm  text-coolGray py-3 px-5 rounded-full">
              Discard
            </button>
            <div className="flex gap-2">
              <button className="bg-gray-900 font-bold text-sm  text-lightBackground py-3 px-5 rounded-full">
                Save as Draft
              </button>
              <button className="bg-primaryPurple text-white font-bold text-sm  py-3 px-5 rounded-full">
                Save & send
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CreateInvoice