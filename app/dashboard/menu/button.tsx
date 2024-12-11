'use client';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteMenu } from '@/app/lib/actions';
import { useState } from 'react';

export function CreateMenu() {
  return (
    <Link
      href="/dashboard/menu/create"
      className="flex h-10 items-center rounded-lg bg-gray-50 px-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Menu</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateMenu({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/menu/${id}/edit`}
      className="rounded-md border bg-yellow-400 p-2 hover:bg-yellow-600"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteMenu({ id }: { id: string }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteMenu(id); // delete user based on id
      setShowConfirmation(false); // close the confirmation dialog
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div>
      {/* Delete Button */}
      <button
        className="rounded-md border bg-red-600 p-2 hover:bg-red-700"
        onClick={() => setShowConfirmation(true)} // Show confirmation popup
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p>Are you sure you want to delete this menu?</p>
            <div className="mt-4 flex gap-4">
              <button
                className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700"
                onClick={handleDelete} // Proceed with delete action
              >
                Yes, delete
              </button>
              <button
                className="bg-gray-300 text-black rounded-md px-4 py-2 hover:bg-gray-400"
                onClick={() => setShowConfirmation(false)} // Cancel deletion
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}