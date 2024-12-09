import Form from '../../edit-form';
import Breadcrumbs from '../../breadcrumbs';
import { fetchCustomerById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [customers] = await Promise.all([fetchCustomerById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customer' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customer/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
