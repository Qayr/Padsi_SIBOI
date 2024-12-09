import Form from '@/app/dashboard/menu/edit-form';
import Breadcrumbs from '@/app/dashboard/menu/breadcrums';
import { fetchMenuById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [menu] = await Promise.all([fetchMenuById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Stok', href: '/dashboard/Menu' },
          {
            label: 'Edit Menu',
            href: `/dashboard/Menu/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form menu={menu} />
    </main>
  );
}
