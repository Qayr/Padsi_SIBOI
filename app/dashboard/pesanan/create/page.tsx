import Form from "../create-form";
import Breadcrumbs from "../breadcrumbs";
import { customer } from "@/app/lib/placeholder-data";

export default async function Page() {
  return (
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
      <Form  />

    </main>
  );
}
