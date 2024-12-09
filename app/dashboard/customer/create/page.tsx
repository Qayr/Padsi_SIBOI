import Form from '../create-form';
import Breadcrumbs from '../breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customer' },
          {
            label: 'Create Customer',
            href: '/dashboard/customer/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
