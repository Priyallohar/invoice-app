"use client"
import CreateInvoice from "@/components/CreateInvoice";
import EmptyInvoicePage from "@/components/EmptyInvoicePage";
import EnteringInvoice from "@/components/EnteringInvoice";
import InvoiceFilter from "@/components/InvoiceFilter";
import InvoiceList from "@/app/invoiceList/page";
import Sidebar from "@/components/Sidebar";





export default function Home() {
  return (
      <main className="relative w-full bg-lightBackground">
        <InvoiceList/>
      </main>
  );
}
