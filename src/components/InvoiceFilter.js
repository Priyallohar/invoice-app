"use client"

import React from 'react'

const InvoiceFilter = ({handleNewInvoice}) => {
  return (
    <div>
        <header className="flex flex-row justify-between">
      <div>
        <h1 className="font-bold text-4xl">Invoices</h1>
        <p className="text-sm text-coolGray tracking-wide mt-2">There are  total invoices</p>
      </div>

      <div className="flex flex-row gap-7">
        <div>
           <div>
            
           </div>
          <button className="bg-primaryPurple px-2 py-1 flex items-center justify-center rounded-full" onClick={handleNewInvoice}>
             <div className="p-2 rounded-full bg-white">
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg> </div>
             <span className="m-2 text-white  text-[13px] tracking-wide  font-semibold" >New invoices</span>
             </button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default InvoiceFilter