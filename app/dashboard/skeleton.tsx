// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function LatestCustomersSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <CustomersSkeleton />
          <CustomersSkeleton />
          <CustomersSkeleton />
          <CustomersSkeleton />
          <CustomersSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomersSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}
// CUSTOMERS //

export function LatestMontirSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <MontirSkeleton />
          <MontirSkeleton />
          <MontirSkeleton />
          <MontirSkeleton />
          <MontirSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MontirSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}
// MONTIR //

export function LatestStockSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <StockSkeleton />
          <StockSkeleton />
          <StockSkeleton />
          <StockSkeleton />
          <StockSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StockSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}
// STOCK //

export function LatestServiceSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}
// SERVICE //

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function ReservationSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LatestReservationsSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <ReservationSkeleton />
          <ReservationSkeleton />
          <ReservationSkeleton />
          <ReservationSkeleton />
          <ReservationSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export function TableRowSkeleton() {
//   return (
//     <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
//       {/* Customer Name and Image */}
//       <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
//         <div className="flex items-center gap-3">
//           <div className="h-8 w-8 rounded-full bg-gray-100"></div>
//           <div className="h-6 w-24 rounded bg-gray-100"></div>
//         </div>
//       </td>
//       {/* Email */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-32 rounded bg-gray-100"></div>
//       </td>
//       {/* Amount */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Date */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Status */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Actions */}
//       <td className="whitespace-nowrap py-3 pl-6 pr-3">
//         <div className="flex justify-end gap-3">
//           <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
//           <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
//         </div>
//       </td>
//     </tr>
//   );
// }

export function TableRowSkeleton() {
  return (
    <tr>
      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-6 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function TableRowSkeleton2() {
  return (
    <tr>
      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-4 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm sm:pl-6">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function TableRowSkeleton3() {
  return (
    <tr className="animate-pulse">
      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-6 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
        <div className="h-4 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
        <div className="h-4 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded bg-gray-100"></div>
          <div className="h-8 w-8 rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

// export function CustomersTableSkeleton() {
//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             <CustomersMobileSkeleton />
//             <CustomersMobileSkeleton />
//             <CustomersMobileSkeleton />
//             <CustomersMobileSkeleton />
//             <CustomersMobileSkeleton />
//             <CustomersMobileSkeleton />
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   No
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
//                   Name
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Phone Number
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Plate Number
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Actions
//                 </th>
//                 <th
//                   scope="col"
//                   className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
//                 >
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

export function CustomersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  No
                </th>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Plate Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function CustomersMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

// CUSTOMER //

export function UsersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  username
                </th>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  password
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Alamat
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function MenuTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nomor Menu
                </th>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  Nama Menu
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Harga Menu
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function MontirMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
// MONTIR //

export function StockTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full rounded-md text-gray-900 md:table">
            <thead className="rounded-md text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  No
                </th>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  Suku Cadang
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stok
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Merk
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white text-gray-900">
              <TableRowSkeleton2 />
              <TableRowSkeleton2 />
              <TableRowSkeleton2 />
              <TableRowSkeleton2 />
              <TableRowSkeleton2 />
              <TableRowSkeleton2 />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function StockMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
// STOCK //

export function TransaksiTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  No
                </th>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  Plate Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nama Montir
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Suku Cadang Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost Service
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Payment
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton3 />
              <TableRowSkeleton3 />
              <TableRowSkeleton3 />
              <TableRowSkeleton3 />
              <TableRowSkeleton3 />
              <TableRowSkeleton3 />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ServiceMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <div className="peer block h-[38px] w-[1820px] rounded-xl  bg-gray-100 py-[9px] pl-10  outline-2"></div>
    </div>
  );
}

export function PageCustomersSkeleton() {
  return (
    <>
      <div className="h-[30px] w-[135px] rounded-lg bg-gray-200 "></div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchSkeleton />
      </div>
    </>
  );
}

export function PageStockSkeleton() {
  return (
    <>
      <div className="h-[35px] w-[145px] rounded-lg bg-gray-200 "></div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchSkeleton />
      </div>
    </>
  );
}

export function PageMontirSkeleton() {
  return (
    <>
      <div className="h-[30px] w-[80px] rounded-lg bg-gray-200 "></div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchSkeleton />
      </div>
    </>
  );
}

export function PageServiceSkeleton() {
  return (
    <>
      <div className="h-[30px] w-[90px] rounded-lg bg-gray-200 "></div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchSkeleton />
      </div>
    </>
  );
}
