import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteCustomer } from '@/app/lib/actions';

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customer/create"
      className="flex h-10 items-center rounded-lg bg-gray-50 px-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Customer</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customer/${id}/edit`}
      className="rounded-md border bg-yellow-400 p-2 hover:bg-yellow-600"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);
  return (
    <form action={deleteCustomerWithId}>
      <button className="rounded-md border bg-red-600 p-2 hover:bg-red-700">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
