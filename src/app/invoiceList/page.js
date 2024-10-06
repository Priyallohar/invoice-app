
'use client';

import React, { useEffect, useCallback } from "react";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import InvoiceFilter from "../../components/InvoiceFilter";
import { useState } from "react";
import CreateInvoice from "../../components/CreateInvoice";

const InvoiceList = () => {
  const [newInvoice, setNewInvoice] = useState(false);
  const handleNewInvoice =()=> {setNewInvoice(true)}
  const closeNewInvoice=()=>{setNewInvoice(false)}

  const invoices = useSelector((state) => state.invoices.invoices);
  const router = useRouter();

  const handleInvoiceClick = useCallback((id) => {
    router.push(`/invoices/${id}`);
  }, [router]);

  useEffect(() => {
    invoices.forEach((invoice) => {
      console.log(invoice);
      console.log(
        invoice.id,
        invoice.createdAt,
        invoice.paymentDue,
        invoice.description,
        invoice.paymentTerms,
        invoice.clientName,
        invoice.clientEmail,
        invoice.status,
        invoice.senderAddress,
        invoice.clientAddress,
        invoice.items,
        invoice.total
      );
    });
  }, [invoices]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center overflow-scroll">
      <Sidebar />
      <CreateInvoice newInvoice={newInvoice} closeNewInvoice={closeNewInvoice} />
      <div className="mt-14 flex flex-col gap-5">
        <InvoiceFilter handleNewInvoice={handleNewInvoice}/>
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white pl-8 pr-6 py-3 flex justify-between rounded-[8px] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)] cursor-pointer"
            onClick={() => handleInvoiceClick(invoice.id)}
          >
            <div className="flex items-center">
              <span className="mr-20 text-sm font-bold">
                <span className="text-mediumGray">#</span>
                {invoice.id}
              </span>
              <span className="mr-28 text-[13px] text-coolGray font-medium">
                Due {formatDate(invoice.paymentDue)}
              </span>
              <span className="text-[13px] text-mediumGray font-medium">
                {invoice.clientName}
              </span>
            </div>
            <div className="flex items-center">
              <span className="ml-14 text-sm font-bold">
                £ {invoice.total}
              </span>
              <span
                className={`ml-5 mr-5 text-sm font-bold 
                  ${invoice.status === "paid" 
                    ? "bg-green-100/40 text-green-400" 
                    : invoice.status === "pending"
                    ? "bg-orange-100/40 text-orange-400"
                    : "bg-gray-100/40 text-gray-600"
                  } 
                  w-28 h-12 rounded-[8px] flex items-center justify-center gap-2`}
              >
                <div
                  className={`h-2 w-2 rounded-full
                    ${invoice.status === "paid"
                      ? "bg-green-400"
                      : invoice.status === "pending"
                      ? "bg-orange-400"
                      : "bg-gray-600"
                    }`}
                ></div>
                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
              </span>
              <span>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1l4 4-4 4"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;