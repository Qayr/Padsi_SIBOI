'use Client'
import Form from '../create-form';
import { CustomerField } from '@/app/lib/definitions';
import { fetchCustomers, fetchMenu, fetchUsers } from '@/app/lib/data';
import Breadcrumbs from '../breadcrumbs';

export default async function Page() {
  const customer = await fetchCustomers();
  const menu = await fetchMenu();
  const users = await fetchUsers();
  

  return(
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transaksi', href: '/dashboard/transaksi' },
          {
            label: 'Create Transaksi',
            href: '/dashboard/transaksi/create',
            active: true,
          },
        ]}
      />
      <Form customer={customer} menu={menu} users={users}/>
    </main>
  
    );

}

