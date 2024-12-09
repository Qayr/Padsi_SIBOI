// import React from 'react';
// import { Suspense } from 'react';
// import CardWrapper from '@/app/ui/dashboard/cards';
// import { poppins } from '@/app/assets/fonts';
// import { Metadata } from 'next';
// import { Footer } from '../page/footer';
// // import LatestMontir from './montir/latest-montir';
// // import LatestService from './service/lastest-service';
// // import LatestCustomers from './customers/latest-customers';
// // import LatestStock from './stock/latest-stock';
// // import {
// //   LatestMontirSkeleton,
// //   CardsSkeleton,
// //   LatestCustomersSkeleton,
// //   LatestStockSkeleton,
// //   LatestServiceSkeleton,
// // } from '@/app/dashboard/skeletons';

// export const metadata: Metadata = {
//   title: 'Dashboard',
// };

// export default function Page() {
//   return (
//     <main>
//       <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {/* <Suspense fallback={<CardsSkeleton />}>
//           <CardWrapper />
//         </Suspense> */}
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         {/* <LatestCustomers /> */}
//         {/* <Suspense fallback={<LatestCustomersSkeleton />}>
//           <LatestCustomers />
//         </Suspense>
//         <Suspense fallback={<LatestMontirSkeleton />}>
//           <LatestMontir />
//         </Suspense>
//         <Suspense fallback={<LatestStockSkeleton />}>
//           <LatestStock />
//         </Suspense>
//         <Suspense fallback={<LatestServiceSkeleton />}>
//           <LatestService />
//         </Suspense> */}
//         <footer/>
//       </div>
//     </main>
//   );
// }


import { Images } from '../page/image';
import { View } from '../page/view';
import { Footer } from '../page/footer';

export default function Page() {
  return (
    <>
      <View />
      <Images />
      <Footer />
    </>
  );
}