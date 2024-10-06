"use client"
import { useParams } from 'next/navigation';
import ViewInvoice from '@/components/ViewInvoice';


const InvoicePage = () => {
  const { id } = useParams(); 
  return (
    <div>
      <ViewInvoice invoiceId={id} />
    </div>
  );
};

export default InvoicePage;