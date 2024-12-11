import Form from '@/app/dashboard/users/edit-form';
import Breadcrumbs from '@/app/dashboard/menu/breadcrums';
import { fetchUsersById } from '@/app/lib/data';



  interface PageProps{
    params:Promise<{id :string}>;
  }
  
  export default async function Page({ params }: PageProps) {
    const {id} = await params;
    // Fetch the menu data using the provided id
    const users = await fetchUsersById(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'User', href: '/dashboard/users' },
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
