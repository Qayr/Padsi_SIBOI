import Image from 'next/image';

import { fetchFilteredCustomers } from '@/app/lib/data';
import { DeleteCustomer, UpdateCustomer } from './buttons';

export default async function CustomersTable({
    query,
    CurrentPage,
  }: {
    query: string;
    CurrentPage: number;
  }) {
    const customers = await fetchFilteredCustomers (query, CurrentPage);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.nocustomer}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-2">
                            
                            <p>{customer.namacustomer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex flex-col">
                        <p className="text-xs">Phone Number</p>
                        <p className="font-medium">{customer.nomortelepon}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">POIN</p>
                        <p className="font-medium">{customer.poin}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Alamat</p>
                        <p className="font-medium">{customer.alamatcustomer}</p>
                      </div>
                      {/* <div className="flex flex-col">
                        <p className="text-xs">ID Customer</p>
                        <p className="font-medium">{customer.nocustomer}</p>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
              {/* <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lgmd text-left text-sm font-normal">
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

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer, index) => (
                    <tr key={customer.id} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.phonenumber}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.platenumber}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdateCustomer id={customer.id} />
                          <DeleteCustomer id={customer.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
              <table className="min-w-full text-gray-900 md:table">
                <thead className="rounded-lgmd text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                      No
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Alamat
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      POIN
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nomor Telepon
                    </th>
                    {/* <th scope="col" className="px-3 py-5 font-medium">
                      ID Customer
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer, index) => (
                    <tr key={customer.nocustomer} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        <div className="flex items-center gap-3">
                          
                          <p>{customer.namacustomer}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.alamatcustomer}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.poin}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.nomortelepon}
                      </td>
                      {/* <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.nocustomer}
                      </td> */}
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdateCustomer id={customer.nocustomer} />
                          <DeleteCustomer id={customer.nocustomer} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
