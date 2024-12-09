'use client'; // Add this at the top of your component file
import { useState } from 'react';
import { Button } from '@/app/ui/button';
import { createTransaksi } from '@/app/lib/actions'; // Ensure your import path is correct

export default function PesananForm() {
  const [formData, setFormData] = useState({
    nocustomer: '',
    id_user:'',
    tanggal_transaksi: '',
    total_harga: '',
    status_transaksi: 'pending', // Default status
    metode_pembayaran: '',
    keterangan: ''
  });

  // Handle form change for both inputs and selects
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
 

  return (
    <form action={createTransaksi}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer ID */}
        <div className="mb-4">
          <label htmlFor="id_customer" className="mb-2 block text-sm font-medium">
            Customer ID
          </label>
          <input
            id="nocustomer"
            name="nocustomer"
            type="text"
            placeholder="Fill Customer ID"
            value={formData.nocustomer}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id_customer" className="mb-2 block text-sm font-medium">
            Username
          </label>
          <input
            id="id_user"
            name="id_user"
            type="text"
            placeholder="Fill Username"
            value={formData.id_user}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Transaction Date */}
        <div className="mb-4">
          <label htmlFor="tanggal_transaksi" className="mb-2 block text-sm font-medium">
            Transaction Date
          </label>
          <input
            id="tanggal_transaksi"
            name="tanggal_transaksi"
            type="datetime-local"
            value={formData.tanggal_transaksi}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Total Price */}
        <div className="mb-4">
          <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
            Total Price
          </label>
          <input
            id="total_harga"
            name="total_harga"
            type="number"
            placeholder="Fill Total Price"
            value={formData.total_harga}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Status Transaction */}
        <div className="mb-4">
          <label htmlFor="status_transaksi" className="mb-2 block text-sm font-medium">
            Status
          </label>
          <select
            id="status_transaksi"
            name="status_transaksi"
            value={formData.status_transaksi}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label htmlFor="metode_pembayaran" className="mb-2 block text-sm font-medium">
            Payment Method
          </label>
          <select
            id="metode_pembayaran"
            name="metode_pembayaran"
            value={formData.metode_pembayaran}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          >
          <option value="pending">Cash</option>
            <option value="completed">Qris</option>
            <option value="cancelled">E-Wallet</option>
            </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="keterangan" className="mb-2 block text-sm font-medium">
            Keterangan
          </label>
          <textarea
            id="keterangan"
            name="keterangan"
            placeholder="Fill Description"
            value={formData.keterangan}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Button
          className="items-center bg-blue-400 hover:bg-blue-600"
          type="submit"
        >
          Create Transaction
        </Button>
      </div>

      {/* {Error && <div className="text-red-500">{EventError}</div>} Show error message */}
    </form>
  );
}

// 'use client'; // Add this at the top of your component file
// import Link from 'next/link';
// import { TransaksiForm } from '@/app/lib/definitions';
// import { useState, useEffect } from 'react';
// import { Button } from '@/app/ui/button';
// import { useFormState } from 'react-dom';
// import { createTransaksi } from '@/app/lib/actions'; // Ensure your import path is correct
// import { CustomerField } from '@/app/lib/definitions';
// import { customer } from '@/app/lib/placeholder-data';
// import { fetchCustomerById } from '@/app/lib/data';

// export default function Form({
//   customer,
// }:{
//   customer: CustomerField[];
// }) {
//   // const initialState = { message: null, errors: {} };
//   // const [state, dispatch] = useState(createTransaksi, initialState);

  

//   // console.log("Customer data:", customer);
//   // console.log("Passing customer data to Form:", customer);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const formData = new FormData(event.target as HTMLFormElement); // Create FormData object
//     console.log("FormData:", formData);
    
//     await createTransaksi(formData); // Pass the FormData object directly
//   };
  
  
//   console.log("Customer data received in Form:", customer);

  
   
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//         {/* Customer Name */}
//         <div className="mb-4">
//           <label htmlFor="namacustomer" className="mb-2 block text-sm font-medium">
//             Nomor Customer
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <select
//               id="nocustomer"
//               name="nocustomer"
//               className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               defaultValue=""
//               aria-describedby="customer-error"
//             >
//               <option value="" disabled>
//                 Select a customer
//               </option>
//               {customer && customer.length > 0 ? (
//                 customer.map((cust) => (
//                   <option key={cust.nocustomer} value={cust.nocustomer}>
//                     {cust.namacustomer}
//                   </option>
//                 ))
//               ) : (
//                 <option>NO CUSTOMER AVAILABLE</option>
//               )}
//             </select>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="id_user" className="mb-2 block text-sm font-medium">
//             Id
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <input
//               id="id_user"
//               name="id_user"
//               type="text"
//               placeholder="Fill users id"
//               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//             />
//           </div>
//         </div>

//         {/* Additional Fields */}
//         <div className="mb-4">
//           <label htmlFor="tanggal_transaksi" className="mb-2 block text-sm font-medium">
//             Tanggal Transaksi
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <input
//               id="tanggal_transaksi"
//               name="tanggal_transaksi"
//               type="date"
//               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2"
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
//             Total Harga
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <input
//               id="total_harga"
//               name="total_harga"
//               type="number"
//               step="0.01"
//               placeholder="Fill total harga"
//               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6 flex justify-end gap-4">
//           <Button
//             className="items-center bg-blue-400 hover:bg-blue-600"
//             type="submit"
//           >
//             Create Customer
//           </Button>
//         </div>
//       </div>
//     </form>
//   );}

