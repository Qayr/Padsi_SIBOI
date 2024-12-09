import Form from '../../detail-form';
import Breadcrumbs from '../../breadcrumbs';
import { fetchTransaksiById,fetchCustomers, fetchMenu,fetchUsers, fetchDtTransaksiById } from '@/app/lib/data';
import { DtTransaksi } from '../../buttons';
import { users } from '@/app/lib/placeholder-data';



export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomers();
  const menu = await fetchMenu();
  const users = await fetchUsers();
  const [transaksi] = await Promise.all([fetchTransaksiById(id)]);
  const [dtTransaksi] = await Promise.all ([fetchDtTransaksiById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transaksi', href: '/dashboard/transaksi' },
          {
            label: 'Detail Transaksi',
            href: `/dashboard/transaksi/${id}/detail`,
            active: true,
          },
        ]}
      />
      <Form transaksi={transaksi} menu={menu} users={users} customer={customer}  />
    </main>
  );
}
