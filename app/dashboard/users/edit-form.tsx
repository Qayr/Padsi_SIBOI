'use client';

import Link from 'next/link';
import { UsersForm } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateUsers } from '@/app/lib/actions';


export default function Form({ users }: { users: UsersForm }) {
  // const initialState = { message: null, errors: {} };
  const updateUsersWithId = updateUsers.bind(null, users.id_user);
  console.log('Form data submitted:', users);
  
  // const [state, dispatch] = useFormState(updateUsersWithId, initialState);
  return (
    <form action={updateUsersWithId }>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium"
          >
            Username
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              {/* <label>
              {users.username}
              </label> */}
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Fill username"
                defaultValue={users.username}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="text"
                placeholder="Fill Password"
                defaultValue={users.password}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Nama"
            className="mb-2 block text-sm font-medium"
          >
            Nama
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nama"
                name="nama"
                type="text"
                placeholder="Fill Nama"
                defaultValue={users.namauser}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="alamat"
            className="mb-2 block text-sm font-medium"
          >
            Alamat
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="alamat"
                name="alamat"
                type="text"
                placeholder="Fill Alamat"
                defaultValue={users.alamatuser}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            E-mail
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Fill email"
                defaultValue={users.email}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="sukucadang_name"
            className="mb-2 block text-sm font-medium"
          >
            Nomor Telepon
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nomortelepon"
                name="nomortelepon"
                type="text"
                placeholder="Fill Nomor Telepon"
                defaultValue={users.nomortelepon}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button
          className="items-center bg-yellow-400 hover:bg-yellow-600"
          type="submit"
        >
          Edit User
        </Button>
      </div>
    </form>
  );
}
