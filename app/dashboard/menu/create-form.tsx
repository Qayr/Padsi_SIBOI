'use client';

import {
  UserCircleIcon,
  CurrencyDollarIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button';
import { createMenu } from '@/app/lib/actions';

export default function Form() {
  // const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createMenu, initialState);
  return (
    <form action={createMenu}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="nama_menu"
            className="mb-2 block text-sm font-medium"
          >
            Nama Menu
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nama_menu"
                name="nama_menu"
                type="text"
                placeholder="Fill Nama Menu"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="sukucadang_price"
            className="mb-2 block text-sm font-medium"
          >
            Harga Menu
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="harga_menu"
                name="harga_menu"
                type="number"
                step="0.01"
                placeholder="Fill Price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="stok" className="mb-2 block text-sm font-medium">
            Stok
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="stok"
                name="stok"
                type="text"
                placeholder="Fill Stok"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="merk" className="mb-2 block text-sm font-medium">
            Merek
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="merk"
                name="merk"
                type="text"
                placeholder="Fill Merek"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/menu"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button
          className="items-center bg-blue-400 hover:bg-blue-600"
          type="submit"
        >
          Create Stock
        </Button>
      </div>
    </form>
  );
}
