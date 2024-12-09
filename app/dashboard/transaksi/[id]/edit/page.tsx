import Form from '../../edit_form';
import Breadcrumbs from '../../breadcrumbs';
import { fetchTransaksiById, fetchMenu } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const menu = await fetchMenu();
  const [transaksi] = await Promise.all([fetchTransaksiById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transaksi', href: '/dashboard/transaksi' },
          {
            label: 'Edit Transaksi',
            href: `/dashboard/transaksi/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form transaksi={transaksi} menu={menu} />
    </main>
  );
}
