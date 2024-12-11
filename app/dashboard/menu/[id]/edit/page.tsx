import Form from '@/app/dashboard/menu/edit-form';
import Breadcrumbs from '../../breadcrums';
import { fetchMenuById } from '@/app/lib/data';

interface PageProps{
  params:Promise<{id :string}>;
}

export default async function Page({ params }: PageProps) {
  const {id} = await params;
  // Fetch the menu data using the provided id
  const menu = await fetchMenuById(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Stok', href: '/dashboard/Menu' },  // Adjust to the correct path
          {
            label: 'Edit Menu',
            href: `/dashboard/Menu/${id}/edit`,  // This URL will point to the current edit page
            active: true,  // Marks this breadcrumb as the current page
          },
        ]}
      />
      {/* Pass the fetched menu data to the Form component */}
      <Form menu={menu} />
    </main>
  );
}
