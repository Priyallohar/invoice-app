"use client";

import React, { useState } from "react";

const InvoiceFilter = ({  selectedFilters, onFilterChange,handleNewInvoice }) => {
  const handleFilterToggle = (filterName) => {
    // Toggle the specific filter and notify the parent component of the change
    const updatedFilters = {
      ...selectedFilters,
      [filterName]: !selectedFilters[filterName],
    };
    onFilterChange(updatedFilters);
  };
 
  const [isOpen, setIsOpen] = useState(false);



  // Open dropdown on hover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Close dropdown when leaving both button and dropdown area
  const handleMouseLeave = () => {
    setIsOpen(false);
  };



  return (
    <div>
      <header className="flex flex-row justify-between">
        <div>
          <h1 className="font-bold text-4xl">Invoices</h1>
          <p className="text-sm text-coolGray tracking-wide mt-2">
            There are total invoices
          </p>
        </div>

        <div className="flex flex-row gap-7 items-center">
          {/* Dropdown button and menu */}
          <div className="relative">
            {/* Filter button */}
            <div
              className="cursor-pointer flex items-center gap-3 font-semibold"
              onMouseEnter={handleMouseEnter} // Open dropdown on hover
            >
              <span>Filter By Status</span>
              <span>
                <svg
                  width="11"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1l4.228 4.228L9.456 1"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="absolute bg-white px-4 py-4 mt-4 -ml-6 w-44 shadow-sm rounded-[8px]"
                onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over the dropdown
                onMouseLeave={handleMouseLeave} // Close dropdown when leaving the dropdown area
              >
                <ul className="flex flex-col gap-3 ml-4">
                  <li>
                    <input
                      type="checkbox"
                      id="draft"
                      name="draft"
                      onClick={() => handleFilterToggle('draft')}
                      className={selectedFilters.draft ? 'active-filter' : ''}
              

                    />
                    <label className="font-semibold ml-3" htmlFor="draft">
                      Draft
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="pending"
                      name="pending"
                      onClick={() => handleFilterToggle('pending')}
                      className={selectedFilters.pending ? 'active-filter' : ''}
                      
        
                    />
                    <label className="font-semibold ml-3" htmlFor="pending">
                      Pending
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="paid"
                      name="paid"
                      onClick={() => handleFilterToggle('paid')}
                      className={selectedFilters.paid ? 'active-filter' : ''}

                    />
                    <label className="font-semibold ml-3" htmlFor="paid">
                      Paid
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* New invoice button */}
          <button
            className="bg-primaryPurple px-2 py-1 flex items-center justify-center rounded-full h-10"
            onClick={() => {
              handleNewInvoice();
            }} // Display selected filters on click
          >
            <div className="p-2 rounded-full bg-white">
              <svg
                width="11"
                height="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                  fill="#7C5DFA"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <span className="m-2 text-white text-[13px] tracking-wide font-semibold">
              New Invoices
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default InvoiceFilter;
