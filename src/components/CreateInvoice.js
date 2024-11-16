// CreateInvoice.js
"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInvoice, updateInvoice } from "./store/Datamanagment";
import InvoiceForm from "./InvoiceForm";
import { useRouter } from "next/navigation";

const CreateInvoice = ({
  isEditOpen,
  closeEdit,
  newInvoice,
  closeNewInvoice,
  currentInvoice,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Initial state for items/rows
  const [rows, setRows] = useState([
    { id: 1, name: "", quantity: "", price: "", total: "" },
  ]);

  // Initial state for form data
  const [formData, setFormData] = useState({
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: "",
        price: "",
        total: "",
      },
    ],
    total: "",
  });

  const isOpen = isEditOpen || newInvoice;

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  // Initialize form with current invoice data when editing
  useEffect(() => {
    if (isEditOpen && currentInvoice) {
      setFormData({
        ...currentInvoice,
        createdAt: formatDate(currentInvoice.createdAt),
        paymentDue: formatDate(currentInvoice.paymentDue),
        senderAddress: { ...currentInvoice.senderAddress },
        clientAddress: { ...currentInvoice.clientAddress },
      });

      // Format items into rows
      const formattedRows = currentInvoice.items.map((item, index) => ({
        id: index + 1,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total:
          parseFloat(item.total) ||
          parseFloat(item.price) * parseFloat(item.quantity),
      }));
      setRows(formattedRows);
    }
  }, [isEditOpen, currentInvoice]);

  // Generate new ID for new invoices
  const generateId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters =
      letters[Math.floor(Math.random() * 26)] +
      letters[Math.floor(Math.random() * 26)];
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `${randomLetters}${randomNumber}`;
  };

  // Set new ID for new invoices
  useEffect(() => {
    if (newInvoice && !formData.id) {
      const newId = generateId();
      setFormData((prevState) => ({ ...prevState, id: newId }));
    }
  }, [newInvoice,formData.id]);

  // Reset form when closing
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        id: "",
        createdAt: "",
        paymentDue: "",
        description: "",
        paymentTerms: "",
        clientName: "",
        clientEmail: "",
        status: "",
        senderAddress: { street: "", city: "", postCode: "", country: "" },
        clientAddress: { street: "", city: "", postCode: "", country: "" },
        items: [{ name: "", quantity: "", price: "", total: "" }],
        total: "",
      });
      setRows([{ id: 1, name: "", quantity: "", price: "", total: "" }]);
    }
  }, [isOpen]);

  // Handle input changes for form fields
  const handleInputChange = (e, section = null) => {
    const { name, value } = e.target;
    if (section) {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [name]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle item-related changes
  const handleItemsChange = {
    add: (e) => {
      e.preventDefault();
      const newRow = {
        id: rows.length + 1,
        name: "",
        quantity: "",
        price: "",
        total: 0,
      };
      setRows([...rows, newRow]);
    },

    update: (id, field, value) => {
      const updatedRows = rows.map((row) => {
        if (row.id === id) {
          const updatedRow = { ...row, [field]: value };

          if (field === "price" || field === "quantity") {
            const quantity =
              parseFloat(field === "quantity" ? value : row.quantity) || 0;
            const price =
              parseFloat(field === "price" ? value : row.price) || 0;

            if (quantity < 0 || price < 0) {
              alert("Values cannot be negative!");
              return row;
            }

            updatedRow.total = quantity * price;
          }
          return updatedRow;
        }
        return row;
      });
      setRows(updatedRows);
    },

    delete: (id) => {
      if (rows.length > 1) {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
      } else {
        alert("At least one item is required.");
      }
    },
  };

  // Determine status based on payment due date and current status
  const determineStatus = (dueDate, currentStatus) => {
    const today = new Date();
    const paymentDue = new Date(dueDate);
    if (currentStatus === "paid") {
      return "paid";
    } else if (paymentDue < today) {
      return "overdue";
    } else {
      return "pending";
    }
  };

  // Handle form submission
  const handleSubmit = (e, action) => {
    e.preventDefault();

    const total = rows.reduce(
      (acc, row) => acc + parseFloat(row.total || 0),
      0
    );

    let status;
    switch (action) {
      case "save_draft":
        status = "draft";
        break;
      case "save_send":
        status = determineStatus(formData.paymentDue, formData.status);
        break;
      default:
        status = formData.status || "pending";
    }

    const invoiceData = {
      ...formData,
      items: rows.map((row) => ({
        name: row.name,
        quantity: row.quantity,
        price: row.price,
        total: row.total.toString(),
      })),
      total: total.toFixed(2),
      status: status,
    };

    if (isEditOpen) {
      dispatch(updateInvoice(invoiceData));
      closeEdit();
      router.push("/invoiceList");
    } else {
      dispatch(addInvoice(invoiceData));
      closeNewInvoice();
      router.push("/invoiceList");
    }
  };
  return (
    isOpen && (
      <div className="fixed flex flex-col w-full h-[100vh] bg-black/50 z-50">
        <aside className="fixed flex flex-col w-[40%] h-[100vh] bg-white rounded-tr-[25px] rounded-br-[25px]">
          <div className="ml-[80px] w-[85%] px-11 py-16 overflow-y-auto">
            <header className="font-bold text-2xl tracking-tight mb-11">
              {isEditOpen ? `Edit #${currentInvoice?.id}` : "New Invoice"}
            </header>
            <InvoiceForm
              formData={formData}
              rows={rows}
              onInputChange={handleInputChange}
              onItemsChange={handleItemsChange}
              onSubmit={handleSubmit}
              isEditOpen={isEditOpen}
              closeEdit={closeEdit}
              closeNewInvoice={closeNewInvoice}
            />
          </div>
        </aside>
      </div>
    )
  );
};

export default CreateInvoice;
