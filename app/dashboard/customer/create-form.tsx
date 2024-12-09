// import Link from 'next/link';
// import {
//   UserCircleIcon,
//   InboxArrowDownIcon,
//   PhoneIcon,
//   ClipboardDocumentIcon,
// } from '@heroicons/react/24/outline';
// import { CustomerForm } from '@/app/lib/definitions';
// // import { useFormState } from 'react-dom';
// import { Button } from '@/app/ui/button';
// // import { CustomerField } from '@/app/lib/definitions';
// import { createCustomer } from '@/app/lib/actions';

// export default function Form() {
//   return (
//     <form action={createCustomer}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//         {/* Customer Name */}
//         <div className="mb-4">
//           <label htmlFor="name" className="mb-2 block text-sm font-medium">
//             Name
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="namacustomer"
//                 name="namacustomer"
//                 type="text"
//                 placeholder="Fill name"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="alamat" className="mb-2 block text-sm font-medium">
//             Alamat
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="alamatcustomer"
//                 name="alamatcustomer"
//                 type="text"
//                 placeholder="Fill Alamat"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="phonenumber"
//             className="mb-2 block text-sm font-medium"
//           >
//             Nomor Telepon
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="nomortelepon"
//                 name="nomortelepon"
//                 type="number"
//                 step="0.01"
//                 placeholder="Fill Phone Number"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div> */}

        
//       </div>
//       <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/customer"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Cancel
//         </Link>

//         <Button
//           className="items-center bg-blue-400 hover:bg-blue-600"
//           type="submit"
//         >
//           Create Customer
//         </Button>
//       </div>
//     </form>
//   );
// }


'use client'; // Add this at the top of your component file
import Link from 'next/link';
import { CustomerForm } from '@/app/lib/definitions';
import { useState } from 'react';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions'; // Ensure your import path is correct

export default function Form() {
  // const [error, setError] = useState('');

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target as HTMLFormElement); // Collect FormData manually

  //   const response = await createCustomer(formData); // Pass formData to your createCustomer function

  //   if (response?.errors) {
  //     setError(response.message || 'An error occurred.');
  //   } else {
  //     // Handle successful submission, e.g. redirect to another page
  //     window.location.href = '/dashboard/customer'; // Example of a redirect after success
  //   }
  // };

  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="namacustomer" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="namacustomer"
              name="namacustomer"
              type="text"
              placeholder="Fill name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="alamatcustomer" className="mb-2 block text-sm font-medium">
            Alamat
          </label>
          <input
            id="alamatcustomer"
            name="alamatcustomer"
            type="text"
            placeholder="Fill Alamat"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nomortelepon" className="mb-2 block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="nomortelepon"
            name="nomortelepon"
            type="text"
            placeholder="Fill Phone Number"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">

      <Link
          href="/dashboard/customer"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>

        <Button
          className="items-center bg-blue-400 hover:bg-blue-600"
          type="submit"
        >
          Create Customer
        </Button>
      </div>

      {/* {Error && <div className="text-red-500">{EventError}</div>} Show error message */}
    </form>
  );
}
  