import Form from '../../edit_form';
import Breadcrumbs from '../../breadcrumbs';
import { fetchTransaksiById, fetchMenu } from '@/app/lib/data';
import { inter } from '@/app/assets/fonts';

interface PageProps{
  params: Promise<{id: string}>;
}

export default async function Page({ params }: PageProps) {
  const {id} = await params;
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
