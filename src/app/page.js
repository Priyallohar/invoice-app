
import CreateInvoice from "@/components/CreateInvoice";
import Delete from "@/components/Delete";
import Hero from "@/components/Hero";
import { Invoice } from "@/components/Invoice";
import InvoiceList from "@/components/InvoiceList";
import ViewInvoice from "@/components/ViewInvoice";


export default function Home() {
  return (
    <main className="w-full bg-lightBackground flex flex-row gap-4">
    <div className="w-20">
      <Hero />
    </div>
    <div className="w-full bg-lightBackground  ">
    <ViewInvoice/>
    </div>
   <Delete/>

  </main>
  );
}
