import Form from '../create-form';
import Breadcrumbs from '../breadcrums';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Menu', href: '/dashboard/menu' },
          {
            label: 'Create Menu',
            href: '/dashboard/menu/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
