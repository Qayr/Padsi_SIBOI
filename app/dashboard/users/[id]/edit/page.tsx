import Form from '@/app/dashboard/users/edit-form';
import Breadcrumbs from '@/app/dashboard/menu/breadcrums';
import { fetchUsersById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [users] = await Promise.all([fetchUsersById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Stok', href: '/dashboard/users' },
          {
            label: 'Edit Users',
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form users={users} />
    </main>
  );
}
