import { fetchFilteredUsers } from '@/app/lib/data';
import { DeleteUsers, UpdateUsers } from '@/app/dashboard/users/button';
import { users } from '@/app/lib/placeholder-data';

export default async function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await fetchFilteredUsers(query, currentPage);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {users?.map((users) => (
                  <div
                    key={users.username}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex flex-col">
                        <p className="text-xs">Username</p>
                        <p className="font-medium">{users.username}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Password</p>
                        <p className="font-medium">{users.password}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Nama</p>
                        <p className="font-medium">{users.nama}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Alamat</p>
                        <p className="font-medium">{users.alamat}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Email</p>
                        <p className="font-medium">{users.email}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Nomor Telepon</p>
                        <p className="font-medium">{users.nomortelepon}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                      No
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                      Username
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nama
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Alamat
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nomor Telepon
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {users.map((users, index) => (
                    <tr key={users.username} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        {users.username}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {users.nama}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {users.alamat}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {users.nomortelepon}
                      </td>
                      
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdateUsers id={users.username} />
                          <DeleteUsers id={users.username} />
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
