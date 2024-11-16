"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import ConfirmationModal from "@/components/ConfirmationModal";
import { useState } from "react";
import CreateInvoice from "@/components/CreateInvoice";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { markPaid,deleteInvoice } from "./store/Datamanagment";
import { useRouter } from "next/navigation";
import EmptyInvoicePage from "./EmptyInvoicePage";

const ViewInvoice = ({invoiceId}) => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);
  const clickedInvoice = invoices.find((inv) => inv.id === `${invoiceId}`);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const openEditSidebar = () => setIsEditOpen(true);
  const closeEditSidebar = () => {
    console.log("i am clicked");
    console.log(clickedInvoice)
    setIsEditOpen(false);
  };

  const handlMarkasPaid =()=>{
    dispatch(markPaid(invoiceId));
    router.push(`/invoiceList`);
  }

  const handleGoBack = () =>{
    router.push(`/invoiceList`);
  }

  const deleteHandler=()=>{
    dispatch(deleteInvoice(invoiceId));
    router.push(`/invoiceList`);
  }

  if (!clickedInvoice) {
    return <div>Invoice not found.</div>; 
  }

  console.log("ViewInvoice rendered. ID:", invoiceId);
  console.log("Clicked Invoice:", clickedInvoice);

  const formateDate = (dateformate) => {
    const date = new Date(dateformate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

 
  return (
    <div className="w-full bg-lightBackground">
      <ConfirmationModal isOpen={isOpen} onClose={closeModal} onDelete ={deleteHandler} />
      <Sidebar />
      <CreateInvoice 
        isEditOpen={isEditOpen} 
        closeEdit={closeEditSidebar} 
        newInvoice={false}
        currentInvoice={clickedInvoice}  
      />
      {invoices.length < 1? (<EmptyInvoicePage/>) :(   <div className="w-full h-[100vh] flex flex-col items-center overflow-scroll">
        <div className="w-8/12 my-auto">
          <div className="w-full flex flex-col">
            <span className="flex items-center gap-3" onClick={handleGoBack}>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.342.886L2.114 5.114l4.228 4.228"
                  stroke="#9277FF"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
              <span className="text-sm font-bold">Go back</span>
            </span>

            <div className="bg-white px-5 py-3 mt-10 flex justify-between rounded-[8px] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
              <div className="flex items-center">
                <span className="mr-9 text-[13px] font-normal text-coolGray">
                  Status
                </span>
                <span className={`mr-5 text-[13px] font-bold   ${clickedInvoice.status === "paid" 
                    ? "bg-green-100/40 text-green-400" 
                    : clickedInvoice.status === "pending"
                    ? "bg-orange-100/40 text-orange-400"
                    : "bg-gray-100/40 text-gray-600"
                  }  w-24 h-12 rounded-[8px] flex items-center justify-center gap-2`}>
                  <div className={`h-2 w-2 ${clickedInvoice.status === "paid"
                      ? "bg-green-400"
                      : clickedInvoice.status === "pending"
                      ? "bg-orange-400"
                      : "bg-gray-600"
                    } rounded-full`}></div>
                  {clickedInvoice.status}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  className="text-[13px] font-bold bg-blue-50/50 px-5 text-coolGray h-10 rounded-full"
                  onClick={openEditSidebar}
                >
                  Edit
                </button>
                <button
                  className="text-[13px] font-bold bg-red px-5 text-white h-10 rounded-full"
                  onClick={openModal}
                >
                  Delete
                </button>
                <button className="text-[13px] bg-primaryPurple px-5 text-white font-bold h-10 rounded-full" onClick={handlMarkasPaid}>
                  Mark as Paid
                </button>
              </div>
            </div>

            <div className="w-full h-full bg-white mt-7 p-5 flex flex-col gap-7 rounded-[8px]">
              <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold">
                    <span className="text-mediumGray">#</span>{clickedInvoice.id}
                  </span>
                  <span className="text-[13px] font-normal text-coolGray">
                  {clickedInvoice.description}
                  </span>
                </div>

                <address className="text-[13px] font-normal text-coolGray">
                {clickedInvoice.senderAddress.street}
                  <br />
                  {clickedInvoice.senderAddress.city}
                  <br />
                  {clickedInvoice.senderAddress.postCode}
                  <br />
                  {clickedInvoice.senderAddress.country}
                </address>
              </div>

              <div className="flex gap-36">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-5">
                    <span className="text-[13px] font-normal text-coolGray">
                      Invoice Date
                    </span>
                    <span className="text-sm font-bold">
                      {formateDate(clickedInvoice.createdAt)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <span className="text-[13px] font-normal text-coolGray">
                      Payment Due
                    </span>
                    <span className="text-sm font-bold">
                      {formateDate(clickedInvoice.paymentDue)}
                    </span>

                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-normal text-coolGray">
                    Bill To
                  </span>
                  <span className="text-sm font-bold">
                    {clickedInvoice.clientName}
                  </span>
                  <div className="text-[13px] font-normal text-coolGray">
                  {clickedInvoice.clientAddress.street}
                  <br />
                  {clickedInvoice.clientAddress.city}
                  <br />
                  {clickedInvoice.clientAddress.postCode}
                  <br />
                  {clickedInvoice.clientAddress.country}
                  </div>

                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[13px] font-normal text-coolGray">
                    Sent to
                  </span>
                  <span className="text-sm font-bold">
                    {clickedInvoice.clientEmail}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50/50 w-full rounded-[8px] overflow-hidden">
                <div className="px-6 py-6">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left grid grid-cols-9 gap-4 mb-5">
                        <th className="col-span-4 text-[13px] font-medium text-coolGray">
                          Item Name
                        </th>
                        <th className="col-span-2 text-[13px] font-medium text-coolGray">
                          Qty.
                        </th>
                        <th className="col-span-2 text-[13px] font-medium text-coolGray">
                          Price
                        </th>
                        <th className="col-span-1 text-[13px] font-medium text-coolGray">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col gap-2">
                      {clickedInvoice.items.map((item) => (
                        <tr key={item.id} className="grid grid-cols-9 gap-4">
                          <td className="col-span-4 text-sm">{item.name}</td>
                          <td className="col-span-2 text-sm">{item.quantity}</td>
                          <td className="col-span-2 text-sm">{item.price}</td>
                          <td className="col-span-1 text-sm">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-full h-16 bg-foreground flex justify-between items-center px-6">
                  <span className="text-white">Amount Due</span>
                  <span className="text-white mr-12">
                    ${clickedInvoice.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}

   
    </div>
  );
};

export default ViewInvoice;
