import { fetchFilteredMenu } from '@/app/lib/data';
import { DeleteMenu, UpdateMenu } from '@/app/dashboard/menu/button';
// import { menu } from '@/app/lib/placeholder-data';

export default async function MenuTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const menu = await fetchFilteredMenu(query, currentPage);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {menu?.map((menu) => (
                  <div
                    key={menu.no_menu}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex flex-col">
                        <p className="text-xs">no_menu</p>
                        <p className="font-medium">{menu.no_menu}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Nama Menu</p>
                        <p className="font-medium">{menu.nama_menu}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Nama</p>
                        <p className="font-medium">{menu.harga_menu}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                      No_Menu
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                      Nama Menu
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Harga Menu
                    </th>
                    
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {menu.map((menu, index) => (
                    <tr key={menu.no_menu} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        {menu.nama_menu}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {menu.harga_menu}
                      </td>
                      
                      
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdateMenu id={menu.no_menu} />
                          <DeleteMenu id={menu.no_menu} />
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
