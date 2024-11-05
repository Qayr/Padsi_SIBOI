'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { createPool } from '@vercel/postgres';

const FormSchema = z.object({
  id: z.string(),
  id_customer: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  id_montir: z.string({
    invalid_type_error: 'Please select a montir.',
  }),
  id_sukucadang: z.string({
    invalid_type_error: 'Please select a suku cadang.',
  }),
  sukucadang_price: z.string(),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  cost_service: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  total: z.coerce.number(),
  payment: z.string(),
  date: z.string(),
});

const FormSchema2 = z.object({
  id: z.string(),
  name: z.string(),
  phonenumber: z.string(),
  platenumber: z.string(),
  image_url: z.string(),
});

const FormSchema3 = z.object({
  id: z.string(),
  nama_montir: z.string(),
  nomor_telepon: z.string(),
  keahlian: z.string(),
});

const FormSchema4 = z.object({
  id: z.string(),
  sukucadang_name: z.string(),
  sukucadang_price: z.string(),
  stok: z.string(),
  merk: z.string(),
});

export type State = {
  errors?: {
    nama_montir?: string[];
    nomor_telepon?: string[];
    keahlian?: string[];
  };
  message?: string | null;
};

export type State2 = {
  errors?: {
    sukucadang_name?: string[];
    sukucadang_price?: string[];
    stok?: string[];
    merk?: string[];
  };
  message?: string | null;
};

export type State3 = {
  errors?: {
    id_customer?: string[];
    id_montir?: string[];
    id_sukucadang?: string[];
    sukucadang_price?: string[];
    amount?: string[];
    cost_service?: string[];
    total?: string[];
    payment?: string[];
  };
  message?: string | null;
};

const CreateService = FormSchema.omit({ id: true, date: true });
const UpdateService = FormSchema.omit({ id: true, date: true });

const CreateCustomer = FormSchema2.omit({ id: true });
const UpdateCustomer = FormSchema2.omit({ id: true });

const CreateMontir = FormSchema3.omit({ id: true });
const UpdateMontir = FormSchema3.omit({ id: true });

const CreateStock = FormSchema4.omit({ id: true });
const UpdateStock = FormSchema4.omit({ id: true });

export async function createCustomer(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/customers/' + img.name;
    console.log(fileName);
  }

  const { name, phonenumber, platenumber, image_url } = CreateCustomer.parse({
    name: formData.get('name'),
    phonenumber: formData.get('phonenumber'),
    platenumber: formData.get('platenumber'),
    image_url: fileName,
  });

  await sql`
    INSERT INTO customers (name, phonenumber, platenumber, image_url)
    VALUES (${name}, ${phonenumber}, ${platenumber}, ${image_url})
  `;

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
  // Test it out:
  //console.log(rawFormData);
}

export async function updateCustomer(id: string, formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/customers/' + img.name;
    console.log(fileName);
  }

  const { name, phonenumber, platenumber, image_url } = UpdateCustomer.parse({
    name: formData.get('name'),
    phonenumber: formData.get('phonenumber'),
    platenumber: formData.get('platenumber'),
    image_url: fileName,
  });

  await sql`
    UPDATE customers
    SET name = ${name}, phonenumber = ${phonenumber}, platenumber = ${platenumber}, image_url = ${image_url}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

export async function deleteCustomer(id: string) {
  await sql`DELETE FROM customers WHERE id = ${id}`;
  revalidatePath('/dashboard/customers');
}

// END CUSTOMER //

export async function createMontir(prevState: State, formData: FormData) {
  const validatedFields = CreateMontir.safeParse({
    nama_montir: formData.get('nama_montir'),
    nomor_telepon: formData.get('nomor_telepon'),
    keahlian: formData.get('keahlian'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Montir.',
    };
  }
  const { nama_montir, nomor_telepon, keahlian } = validatedFields.data;

  try {
    await sql`
      INSERT INTO montir (nama_montir, nomor_telepon, keahlian)
      VALUES (${nama_montir}, ${nomor_telepon}, ${keahlian})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Montir.',
    };
  }

  revalidatePath('/dashboard/montir');
  redirect('/dashboard/montir');
}

export async function updateMontir(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateMontir.safeParse({
    nama_montir: formData.get('nama_montir'),
    nomor_telepon: formData.get('nomor_telepon'),
    keahlian: formData.get('keahlian'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Montir.',
    };
  }
  const { nama_montir, nomor_telepon, keahlian } = validatedFields.data;

  try {
    await sql`
        UPDATE montir
        SET nama_montir = ${nama_montir}, nomor_telepon = ${nomor_telepon}, keahlian = ${keahlian}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Montir.' };
  }

  revalidatePath('/dashboard/montir');
  redirect('/dashboard/montir');
}

export async function deleteMontir(id: string) {
  await sql`DELETE FROM montir WHERE id = ${id}`;
  revalidatePath('/dashboard/montir');
}

// END MONTIR //

export async function createStock(prevState: State2, formData: FormData) {
  const validatedFields = CreateStock.safeParse({
    sukucadang_name: formData.get('sukucadang_name'),
    sukucadang_price: formData.get('sukucadang_price'),
    stok: formData.get('stok'),
    merk: formData.get('merk'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Stok.',
    };
  }
  const { sukucadang_name, sukucadang_price, stok, merk } =
    validatedFields.data;

  try {
    await sql`
      INSERT INTO sukucadang (sukucadang_name, sukucadang_price, stok, merk)
      VALUES (${sukucadang_name}, ${sukucadang_price}, ${stok}, ${merk})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Stok.',
    };
  }

  revalidatePath('/dashboard/stock');
  redirect('/dashboard/stock');
}

export async function updateStock(
  id: string,
  prevState: State2,
  formData: FormData,
) {
  const validatedFields = UpdateStock.safeParse({
    sukucadang_name: formData.get('sukucadang_name'),
    sukucadang_price: formData.get('sukucadang_price'),
    stok: formData.get('stok'),
    merk: formData.get('merk'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Stok.',
    };
  }
  const { sukucadang_name, sukucadang_price, stok, merk } =
    validatedFields.data;

  try {
    await sql`
        UPDATE sukucadang
        SET sukucadang_name = ${sukucadang_name}, sukucadang_price = ${sukucadang_price}, stok = ${stok}, merk = ${merk}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Stok.' };
  }

  revalidatePath('/dashboard/stock');
  redirect('/dashboard/stock');
}

export async function deleteStock(id: string) {
  await sql`DELETE FROM sukucadang WHERE id = ${id}`;
  revalidatePath('/dashboard/stock');
}

// END STOK //

export async function createService(prevState: State3, formData: FormData) {
  //   const { customerId, amount, status } = CreateInvoice.parse({
  const validatedFields = CreateService.safeParse({
    id_customer: formData.get('id_customer'),
    id_montir: formData.get('id_montir'),
    id_sukucadang: formData.get('id_sukucadang'),
    sukucadang_price: formData.get('sukucadang_price'),
    amount: formData.get('amount'),
    cost_service: formData.get('cost_service'),
    total: formData.get('total'),
    payment: formData.get('payment'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Service.',
    };
  }
  const {
    id_customer,
    id_montir,
    id_sukucadang,
    sukucadang_price,
    amount,
    cost_service,
    total,
    payment,
  } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];
  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });

  let client;

  try {
    client = await pool.connect();

    // Check current stock level
    const result = await client.query(
      `
      SELECT stok
      FROM sukucadang
      WHERE id = $1
    `,
      [id_sukucadang],
    );

    const currentStock = result.rows[0]?.stok;

    if (!currentStock || currentStock < amount) {
      throw new Error('Insufficient stock.');
    }

    await client.query('BEGIN');

    await client.query(
      `
      INSERT INTO service (id_customer, id_montir, id_sukucadang, sukucadang_price, amount, cost_service, total, payment, date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
    `,
      [
        id_customer,
        id_montir,
        id_sukucadang,
        sukucadang_price,
        amount,
        cost_service,
        total,
        payment,
      ],
    );

    await client.query(
      `
      UPDATE sukucadang
      SET stok = stok - $1
      WHERE id = $2
    `,
      [amount, id_sukucadang],
    );

    await client.query('COMMIT');
  } catch (error) {
    if (client) {
      await client.query('ROLLBACK');
    }
    return {
      message: 'Database Error: Failed to Create Service.',
    };
  } finally {
    if (client) {
      client.release();
    }
    pool.end();
  }

  revalidatePath('/dashboard/service');
  redirect('/dashboard/service');
}

export async function updateService(
  id: string,
  prevState: State3,
  formData: FormData,
) {
  const validatedFields = UpdateService.safeParse({
    id_customer: formData.get('id_customer'),
    id_montir: formData.get('id_montir'),
    id_sukucadang: formData.get('id_sukucadang'),
    sukucadang_price: formData.get('sukucadang_price'),
    amount: formData.get('amount'),
    cost_service: formData.get('cost_service'),
    total: formData.get('total'),
    payment: formData.get('payment'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Service.',
    };
  }
  const {
    id_customer,
    id_montir,
    id_sukucadang,
    sukucadang_price,
    amount,
    cost_service,
    total,
    payment,
  } = validatedFields.data;

  try {
    await sql`
      UPDATE service 
      SET id_customer = ${id_customer}, id_montir = ${id_montir}, id_sukucadang = ${id_sukucadang}, sukucadang_price = ${sukucadang_price}, amount = ${amount}, cost_service = ${cost_service}, total = ${total}, payment = ${payment}
      WHERE id = ${id}
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Service.',
    };
  }

  revalidatePath('/dashboard/service');
  redirect('/dashboard/service');
}

export async function deleteService(id: string) {
  await sql`DELETE FROM service WHERE id = ${id}`;
  revalidatePath('/dashboard/service');
}

// END SERVICE //

// LOGIN //

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Username or Password Wrong!.';
      }
    }
    throw error;
  }
}
