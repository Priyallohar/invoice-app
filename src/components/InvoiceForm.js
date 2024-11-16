// InvoiceForm.js
import React from 'react';

const InvoiceForm = ({
  formData,
  rows,
  onInputChange,
  onItemsChange,
  onSubmit,
  isEditOpen,
  closeEdit,
  closeNewInvoice
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-12">
        <h4 className="text-primaryPurple font-bold text-base mb-6">
          Bill From
        </h4>

        {/* Sender Address Section */}
        <div>
          <div className="flex flex-col mb-6 w-full">
            <label
              className="mb-2 font-medium text-sm text-coolGray"
              htmlFor="street-address"
            >
              Street Address
            </label>
            <input
              className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
              id="street-address"
              name="street"
              type="text"
              value={formData.senderAddress.street}
              required
              onChange={(e) => onInputChange(e, "senderAddress")}
            />
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                id="city"
                name="city"
                type="text"
                value={formData.senderAddress.city}
                onChange={(e) => onInputChange(e, "senderAddress")}
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="post-code"
              >
                Post Code
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                id="post-code"
                name="postCode"
                type="text"
                value={formData.senderAddress.postCode}
                onChange={(e) => onInputChange(e, "senderAddress")}
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                id="country"
                name="country"
                type="text"
                value={formData.senderAddress.country}
                onChange={(e) => onInputChange(e, "senderAddress")}
                required
              />
            </div>
          </div>
        </div>

        {/* Bill To Section */}
        <div className="mt-12">
          <h4 className="text-primaryPurple font-bold text-base mb-6">
            Bill To
          </h4>

          <div className="flex flex-col mb-6">
            <label
              className="mb-2 font-medium text-sm text-coolGray"
              htmlFor="client-name"
            >
              Client's Name
            </label>
            <input
              className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
              id="client-name"
              name="clientName"
              type="text"
              value={formData.clientName}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="flex flex-col mb-6">
            <label
              className="mb-2 font-medium text-sm text-coolGray"
              htmlFor="client-email"
            >
              Client's Email
            </label>
            <input
              className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
              id="client-email"
              name="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="flex flex-col mb-6">
            <label
              className="mb-2 font-medium text-sm text-coolGray"
              htmlFor="client-street"
            >
              Street Address
            </label>
            <input
              className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
              id="client-street"
              name="street"
              type="text"
              value={formData.clientAddress.street}
              onChange={(e) => onInputChange(e, "clientAddress")}
              required
            />
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="client-city"
              >
                City
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
                id="client-city"
                name="city"
                type="text"
                value={formData.clientAddress.city}
                onChange={(e) => onInputChange(e, "clientAddress")}
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="client-postcode"
              >
                Post Code
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
                id="client-postcode"
                name="postCode"
                type="text"
                value={formData.clientAddress.postCode}
                onChange={(e) => onInputChange(e, "clientAddress")}
                required
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
                className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
                id="client-country"
                name="country"
                type="text"
                value={formData.clientAddress.country}
                onChange={(e) => onInputChange(e, "clientAddress")}
                required
              />
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="mt-12">
          <div className="flex gap-4 mb-6">
            <div className="flex flex-col flex-1">
              <label
                className="mb-2 font-medium text-sm text-coolGray"
                htmlFor="invoice-date"
              >
                Invoice Date
              </label>
              <input
                className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
                id="invoice-date"
                name="createdAt"
                type="date"
                value={formData.createdAt ? formData.createdAt.split('T')[0] : ''}
                onChange={onInputChange}
                required
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
                className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
                id="payment-terms"
                name="paymentTerms"
                type="text"
                value={formData.paymentTerms}
                onChange={onInputChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label
              className="mb-2 font-medium text-sm text-coolGray"
              htmlFor="project-description"
            >
              Project Description
            </label>
            <input
              className="border rounded-[4px] font-bold text-base h-10 pl-5 focus:outline-none focus:border-primaryPurple"
              id="project-description"
              name="description"
              type="text"
              value={formData.description}
              onChange={onInputChange}
              required
            />
          </div>
        </div>

        {/* Item List */}
        <div className="mt-12">
          <h4 className="text-lg font-bold mb-4">Item List</h4>
          <table className="w-full mb-4">
            <thead>
              <tr className="text-left grid grid-cols-9 gap-4 mb-4">
                <th className="col-span-3 text-sm font-medium text-coolGray">Item Name</th>
                <th className="col-span-1 text-sm font-medium text-coolGray">Qty.</th>
                <th className="col-span-2 text-sm font-medium text-coolGray">Price</th>
                <th className="col-span-2 text-sm font-medium text-coolGray">Total</th>
                <th className="col-span-1"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="grid grid-cols-9 gap-4 mb-3">
                  <td className="col-span-3">
                    <input
                      className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                      type="text"
                      value={row.name}
                      onChange={(e) => onItemsChange.update(row.id, "name", e.target.value)}
                      required
                    />
                  </td>
                  <td className="col-span-1">
                    <input
                      className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                      type="number"
                      value={row.quantity}
                      onChange={(e) => onItemsChange.update(row.id, "quantity", e.target.value)}
                      required
                    />
                  </td>
                  <td className="col-span-2">
                    <input
                      className="border rounded-[4px] font-bold text-base h-10 w-full pl-5 focus:outline-none focus:border-primaryPurple"
                      type="number"
                      value={row.price}
                      onChange={(e) => onItemsChange.update(row.id, "price", e.target.value)}
                      required
                    />
                  </td>
                  <td className="col-span-2 flex items-center">
                    {row.total || '0.00'}
                  </td>
                  <td className="col-span-1">
                    <button
                      type="button"
                      onClick={() => onItemsChange.delete(row.id)}
                      className="text-coolGray hover:text-red"
                    >
                      <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                          fill="currentColor"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            type="button"
            onClick={onItemsChange.add}
            className="w-full h-12 bg-gray-100 rounded-full text-coolGray font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7E88C3"
                fillRule="nonzero"
              />
            </svg>
            Add New Item
          </button>
        </div>

        {/* Form Actions */}
        <div className="mt-12">
          {isEditOpen ? (
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={closeEdit}
                className="px-6 py-4 rounded-full bg-gray-100 text-coolGray font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-4 rounded-full bg-primaryPurple text-white font-bold text-sm hover:bg-primaryPurple/90 transition-colors"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="flex justify-between">
              <button
                type="button"
                onClick={closeNewInvoice}
                className="px-6 py-4 rounded-full bg-gray-100 text-coolGray font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Discard
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={(e) => onSubmit(e, 'save_draft')}
                  className="px-6 py-4 rounded-full bg-gray-800 text-white font-bold text-sm hover:bg-gray-900 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  onClick={(e) => onSubmit(e, 'save_send')}
                  className="px-6 py-4 rounded-full bg-primaryPurple text-white font-bold text-sm hover:bg-primaryPurple/90 transition-colors"
                >
                  Save & Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;