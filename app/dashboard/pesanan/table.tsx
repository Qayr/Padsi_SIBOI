import { fetchFilteredTransaksi } from '@/app/lib/data';
import { DeletePesanan, UpdatePesanan } from './button';

export default async function TransaksiTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const transaksi = await fetchFilteredTransaksi(query, currentPage);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {transaksi?.map((transaksi) => (
                  <div
                    key={transaksi.id_transaksi}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex w-full items-center justify-between border-b py-5">
                      
                      <div className="flex flex-col">
                        <p className="text-xs">Nama Customer</p>
                        <p className="font-medium">{transaksi.namacustomer}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Username</p>
                        <p className="font-medium">{transaksi.username}</p>
                      </div>
                      {/* <div className="flex flex-col">
                        <p className="text-xs">ID User</p>
                        <p className="font-medium">{transaksi.username}</p>
                      </div> */}
                      <div className="flex flex-col">
                        <p className="text-xs">Tanggal Transaksi</p>
                        <p className="font-medium">
                          {new Date(transaksi.tanggal_transaksi).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <p className="text-xs">Total Harga</p>
                        <p className="font-medium">{transaksi.total_harga}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Status</p>
                        <p className="font-medium">{transaksi.status_transaksi}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Payment</p>
                        <p className="font-medium">{transaksi.metode_pembayaran}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Keterangan</p>
                        <p className="font-medium">{transaksi.keterangan}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                      ID 
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nama Customer
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Username
                    </th>
                    {/* <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                      ID User
                    </th> */}
                    <th scope="col" className="px-3 py-5 font-medium">
                      Tanggal Transaksi
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Harga
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Payment
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Keterangan
                    </th>
                   
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {transaksi.map((transaksi, index) => (
                    <tr key={transaksi.id_transaksi} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        {transaksi.namacustomer}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {transaksi.username}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {new Date(transaksi.tanggal_transaksi).toLocaleDateString()}
                      </td>

                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      Rp.{transaksi.total_harga}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {transaksi.status_transaksi}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {transaksi.metode_pembayaran}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {transaksi.keterangan}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdatePesanan id={transaksi.id_transaksi} />
                          <DeletePesanan id={transaksi.id_transaksi} />
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
