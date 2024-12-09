import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { poppins } from '@/app/assets/fonts';
import { fetchLatestCustomers } from '@/app/lib/data';
export default async function LatestCustomers() {
  const latestCustomers = await fetchLatestCustomers();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
        Latest Customers
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-yellow-700 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestCustomers.map((customers, i) => {
            return (
              <div
                key={customers.nocustomer}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {customers.namacustomer}
                </p>
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {customers.alamatcustomer}
                </p>
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {customers.poin}
                </p>
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {customers.nomortelepon}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-neutral-50" />
          <h3 className="ml-2 text-sm text-white ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
