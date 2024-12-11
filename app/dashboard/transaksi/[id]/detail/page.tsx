import Form from '../../detail-form';
import Breadcrumbs from '../../breadcrumbs';
import { fetchTransaksiById,fetchCustomers, fetchMenu,fetchUsers, fetchDtTransaksiById } from '@/app/lib/data';

  interface PageProps{
    params: Promise<{id :string}>;
  }


export default async function Page({ params }: PageProps ) {
  const {id} = await params;
  const customer = await fetchCustomers();
  const menu = await fetchMenu();
  const users = await fetchUsers();
  const [transaksi] = await Promise.all([fetchTransaksiById(id)]);
  
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
