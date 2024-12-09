// 'use client';

// import { TransaksiForm } from '@/app/lib/definitions';
// import Link from 'next/link';
// import Button from '@/app/assets/button';
// import { updateTransaksi } from '@/app/lib/actions';
// import {
//   UserCircleIcon,
// //   InboxArrowDownIcon,
// } from '@heroicons/react/24/outline';

// export default function Form({ transaksi }: { transaksi: TransaksiForm }) {
//   const updateTransaksiWithId = updateTransaksi.bind(null, transaksi.id_transaksi);
//   return (
//     <form action={updateTransaksiWithId}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//       <div className="mb-4">
//           <label htmlFor="name" className="mb-2 block text-sm font-medium">
//             ID TRANSAKSI
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="id_transaksi"
//                 name="id_transaksi"
//                 type="text"
//                 placeholder="Fill name"
//                 defaultValue={transaksi.id_transaksi}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
//             </div>
//           </div>
//         </div>
//         {/* Customer Name */}
//         <div className="mb-4">
//           <label htmlFor="name" className="mb-2 block text-sm font-medium">
//             Nomor Customer
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="nocustomer"
//                 name="nocustomer"
//                 type="text"
//                 placeholder="Fill name"
//                 defaultValue={transaksi.nocustomer}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="mb-2 block text-sm font-medium">
//             ID User
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="id_user"
//                 name="id_user"
//                 type="text"
//                 placeholder="Fill Users ID"
//                 defaultValue={transaksi.id_user}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="phonenumber"
//             className="mb-2 block text-sm font-medium"
//           >
//             Tanggal Transaksi
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="tanggal_transaksi"
//                 name="tanggal_transaksi"
//                 type="date"
//                 // step="0.01"
//                 defaultValue={transaksi.tanggal_transaksi}
//                 placeholder="Fill Phone Number"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="total_harga"
//             className="mb-2 block text-sm font-medium"
//           >
//             Total Harga
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="total_harga"
//                 name="total_harga"
//                 type="number"
//                 step="0.01"
//                 defaultValue={transaksi.total_harga}
//                 placeholder="Fill Total Harg  a"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="phonenumber"
//             className="mb-2 block text-sm font-medium"
//           >
//             Status Transaksi
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//             <select
//             id="status_transaksi"
//             name="status_transaksi"
//             value={transaksi.status_transaksi}
              
            
//             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//           >
//             <option value="pending">Pending</option>
//             <option value="completed">Completed</option>
//             <option value="cancelled">Cancelled</option>
//           </select>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="metode_pembayaran" className="mb-2 block text-sm font-medium">
//             Payment Method
//           </label>
//           <select
//             id="metode_pembayaran"
//             name="metode_pembayaran"
//             value={transaksi.metode_pembayaran}
           
//             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//           >
//           <option value="pending">Cash</option>
//             <option value="completed">Qris</option>
//             <option value="cancelled">E-Wallet</option>
//             </select>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="keterangan"
//             className="mb-2 block text-sm font-medium"
//           >
//             Keterangan
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="keterangan"
//                 name="keterangan"
//                 type="text"
//                 // step="0.01"
//                 defaultValue={transaksi.keterangan}
//                 placeholder="Fill Keterangan"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* <div className="mb-4">
//           <label
//             htmlFor="platenumber"
//             className="mb-2 block text-sm font-medium"
//           >
//             Plate Number
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="platenumber"
//                 name="platenumber"
//                 type="text"
//                 placeholder="Fill Plate Number"
//                 defaultValue={customers.platenumber}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//             </div>
//           </div>
//         </div> */}

//         {/* <div className="mb-4">
//           <label htmlFor="image" className="mb-2 block text-sm font-medium">
//             Edit Image
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="image"
//                 name="image"
//                 type="file"
//                 step="0.01"
//                 placeholder="Upload Image"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div> */}
//       </div>
//       <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/transaksi"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Cancel
//         </Link>

//        <button className='items-center rounded-xl bg-yellow-400 hover:bg-yellow-600'
//        type='submit'>
//         Edit Customer

//        </button>

//         {/* <Button
//           className="items-center bg-yellow-400 hover:bg-yellow-600"
//           type="submit"
//         >
//           Edit Customer
//         </Button> */}
//       </div>
//     </form>
//   );
// }


'use client';

import { useState } from 'react';
import { TransaksiForm } from '@/app/lib/definitions';
import Link from 'next/link';
import Button from '@/app/assets/button';
import { updateTransaksi } from '@/app/lib/actions';
import { MenuField } from '@/app/lib/definitions';

export default function Form({ transaksi, menu }: { transaksi: TransaksiForm; menu : MenuField[] }) {
  const [formData, setFormData] = useState(transaksi);

  const updateTransaksiWithId = updateTransaksi.bind(null, transaksi.id_transaksi);

  // Handle changes for Payment Method
  const handleMetodePembayaranChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      metode_pembayaran: event.target.value, // Update the payment method
    });
  };

  const [menuItems, setMenuItems] = useState<{ menuId: string; quantity: number }[]>([]);

  
  
  // Handle changes for Transaction Status
  const handleStatusTransaksiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      status_transaksi: event.target.value, // Update the transaction status
    });
  };
  
const cleanValue = formData.total_harga.replace(/[^0-9.-]+/g, ''); // Hanya menyisakan angka, titik, dan tanda minus


console.log('Total Harga (Original):', formData.total_harga);
console.log('Total Harga (Parsed):', parseFloat(formData.total_harga));
console.log('Is Valid:', formData.total_harga && !isNaN(parseFloat(formData.total_harga)));


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert formData to FormData
    const formDataInstance = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataInstance.append(key, value as string); // Append each form value
    }

    updateTransaksiWithId(formDataInstance); // Pass the FormData object
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
           <div className="mb-4">
              <label htmlFor="id_transaksi" className="mb-2 block text-sm font-medium">
                ID TRANSAKSI
              </label>
              <p 
                id="id_transaksi" 
                className="text-3xl pl-5 text-black font-semibold"
              >
                {formData.id_transaksi || 'Data not available'}
              </p>
            </div>


        {/* Nomor Customer */}
        

        {/* ID User */}
        

        {/* Tanggal Transaksi */}

        
   
      {/* MENU */}


  

     

     




        {/* Total Harga */}
        <div className="mb-4">
  <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
    Total Harga
  </label>
  <p 
    id="total_harga" 
    className="block w-full py-2 pl-5 text-black text-sm font-bold"
  >
    {formData.total_harga 
      ? parseFloat(formData.total_harga.replace(/[^0-9,-]+/g, '').replace(',', '.')).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
      : 'Total harga tidak tersedia'}
  </p>
</div>




        <div className="mb-4">
          <label htmlFor="status_transaksi" className="mb-2 block text-sm font-medium">
            Status Transaksi
          </label>
          <select
            id="status_transaksi"
            name="status_transaksi"
            value={formData.status_transaksi}
            onChange={handleStatusTransaksiChange} // Handle status change
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Metode Pembayaran */}
        <div className="mb-4">
          <label htmlFor="metode_pembayaran" className="mb-2 block text-sm font-medium">
            Payment Method
          </label>
          <p className="block w-full py-2 pl-5 text-black text-sm font-bold">
            {formData.metode_pembayaran.charAt(0).toUpperCase() + formData.metode_pembayaran.slice(1)} {/* Capitalize first letter */}
          </p>
        </div>


        {/* Keterangan */}
        <div className="mb-4">
          <label htmlFor="keterangan" className="mb-2 block text-sm font-medium">
            Keterangan
          </label>
          <p className="block w-full py-2 pl-5 text-black text-sm font-bold">
            {formData.keterangan}
          </p>
        </div>


        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/transaksi"
            className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>

          <button className="items-center px-4 rounded-xl bg-yellow-400 hover:bg-yellow-600" type="submit">
            Edit Transaksi
          </button>
        </div>
      </div>
    </form>
  );
}

