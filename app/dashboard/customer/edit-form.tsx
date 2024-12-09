'use client';

import { CustomerForm } from '@/app/lib/definitions';
import Link from 'next/link';
import Button from '@/app/assets/button';
import { updateCustomer } from '@/app/lib/actions';
import {
  UserCircleIcon,
//   InboxArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function Form({ customers }: { customers: CustomerForm }) {
  const updateCustomerWithId = updateCustomer.bind(null, customers.nocustomer);
  return (
    <form action={updateCustomerWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="namacustomer"
                name="namacustomer"
                type="text"
                placeholder="Fill name"
                defaultValue={customers.namacustomer}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Alamat
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="alamatcustomer"
                name="alamatcustomer"
                type="text"
                placeholder="Fill Alamat"
                defaultValue={customers.alamatcustomer}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phonenumber"
            className="mb-2 block text-sm font-medium"
          >
            Nomor Telepon
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nomortelepon"
                name="nomortelepon"
                type="number"
                step="0.01"
                defaultValue={customers.nomortelepon}
                placeholder="Fill Phone Number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="platenumber"
            className="mb-2 block text-sm font-medium"
          >
            Plate Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="platenumber"
                name="platenumber"
                type="text"
                placeholder="Fill Plate Number"
                defaultValue={customers.platenumber}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div> */}

        {/* <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Edit Image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="image"
                type="file"
                step="0.01"
                placeholder="Upload Image"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customer"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>

       <button className='items-center rounded-xl bg-yellow-400 hover:bg-yellow-600'
       type='submit'>
        Edit Customer

       </button>

        {/* <Button
          className="items-center bg-yellow-400 hover:bg-yellow-600"
          type="submit"
        >
          Edit Customer
        </Button> */}
      </div>
    </form>
  );
}
