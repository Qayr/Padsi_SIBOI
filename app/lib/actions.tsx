'use server';

import { string, z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { SignupFormSchema, FormState } from '@/app/lib/definitions'
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';
import { AuthError } from 'next-auth';
import { createPool } from '@vercel/postgres';
import { normalize } from 'path';
import { stat } from 'fs';
import { getCustomerNameById } from './data';
import { DeleteTransaksi } from '../dashboard/transaksi/buttons';




const FormSchema = z.object({
  id: z.string(),
  id_customer: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  nama: z.string({
    invalid_type_error: 'Please select a Users.',
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
  nocustomer: z.string(),
  namacustomer: z.string(),
  alamatcustomer: z.string(),//ini diperhatikan bg
  nomortelepon: z.string(),
  
  
});

type MenuItem = {
  menuId: string;  // Or number, depending on your data type
  quantity: number;
};


const FormSchema3 = z.object({
  
  username: z.string(),
  Username:z.string(),
  password: z.string(),
  nama: z.string(),
  alamat: z.string(),
  email: z.string(),
  nomortelepon: z.string(),
  
});

const FormSchema4 = z.object({
  no_menu: z.string(),
  nama_menu: z.string(),
  harga_menu: z.string(),
  
});

const MenuItemSchema = z.object({
  menuId: z.string(),  // menuId should be a string
  quantity: z.number().min(1),  // quantity should be a positive number
});

const FormSchema5 = z.object({
  // id_transaksi: z.string(),
  idtransaksi: z.string(),
  nocustomer: z.string(),
  poin: z.string(),
  id_user:z.string(),
  tanggal_transaksi: z.string(),
  tanggaltransaksi: z.string(),
  total_harga: z.string(),
  status_transaksi: z.string(),
  metode_pembayaran: z.string(),
  keterangan: z.string(),
  use_points: z.string(),

})

const FormSchema8 = z.object({
  // id_transaksi: z.string(),
  idtransaksi: z.string(),
 
  
  
  
  
  status_transaksi: z.string(),
 
  // menuId: z.string(),
  // quantity: z.number(),
  // menuItems: z.array(MenuItemSchema),
  // poindipakai: z.string(),

})

const FormSchema7 = z.object({
  // id_transaksi: z.string(),
  idtransaksi: z.string(),
  nocustomer: z.string(),
  poin: z.string(),
  id_user:z.string(),
  tanggal_transaksi: z.string(),
  tanggaltransaksi: z.string(),
  total_harga: z.string(),
  status_transaksi: z.string(),
  metode_pembayaran: z.string(),
  keterangan: z.string(),
  
  


})

const FormSchema6 = z.object({
  // id_transaksi: z.string(),
 

})

export type State5 = {
  errors?:{
    id_transaksi?:[];
    nocustomer?:[];
    id_user?:[];
    tanggal_transaksi?:[];
    
    total_harga?:[];
    status_transaksi?:[];
    metode_pembayaran?:[];
    keterangan?:[];
  }
  massage?:string | null;
}

export type State = {
  errors?: {
    nocustomer?: string[];
    namacustomer?: string[];
    alamatcustomer?: string[];
    nomortelepon?: string[];
  };
  message?: string | null;
};

export type State2 = {
  errors?: {
    no_menu?: string[];
    nama_menu?: string[];
    harga_menu?: string[];
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
    nocustomer?:string[];
  };
  message?: string | null;
};

export type State4 = {
  errors?: {
    username?: string[];
    password?: string[];
    nama?: string[];
    alamat?: string[];
    email?: string[];
    nomortelepon?: string[];
  };
  message?: string | null;
};

const CreateService = FormSchema.omit({ id: true, date: true });
const UpdateService = FormSchema.omit({ id: true, date: true });

const CreateCustomer = FormSchema2.omit({ nocustomer: true });
const UpdateCustomer = FormSchema2.omit({ nocustomer: true });

const CreateTransaksi = FormSchema5.omit({idtransaksi:true, tanggaltransaksi: true});
const UpdateTransaksi = FormSchema8.omit({idtransaksi:true});


const DtTransaksi = FormSchema7.omit({idtransaksi:true, tanggaltransaksi: true});

const CreateUsers = FormSchema3.omit({ Username: true });
const UpdateUsers = FormSchema3.omit({ Username: true });

const CreateMenu = FormSchema4.omit({ no_menu: true });
const UpdateMenu = FormSchema4.omit({ no_menu: true });

// export async function createCustomer(formData: FormData) {
//   const img = formData.get('image');
//   console.log(img);

//   let fileName = '';
//   if (img instanceof File) {
//     fileName = '/customer/' + img.name;
//     console.log(fileName);
//   }

//   const { nocustomer, namacustomer, alamatcustomer, poin, nomortelepon } = CreateCustomer.parse({
//     nocustomer: formData.get('nocustomer'),
//     namacustomer: formData.get('namacustomer'),
//     alamatcustomer: formData.get('alamatcustomer'),
//     poin: formData.get('poin'),
//     nomortelepon: formData.get('nomortelepon'),
//   });

//   await sql`
//     INSERT INTO customers (nocustomer, namacustomer, alamatcustomer, poin, nomortelepon)
//     VALUES (${nocustomer}, ${namacustomer}, ${alamatcustomer}, ${poin}, ${nomortelepon})
//   `;

//   revalidatePath('/dashboard/customers');
//   redirect('/dashboard/customers');
//   // Test it out:
//   //console.log(rawFormData);
// }

// Modify createCustomer to take only FormData as an argument

export async function createCustomer(formData: FormData) {
  const { namacustomer,alamatcustomer, nomortelepon } = CreateCustomer.parse({
    namacustomer: formData.get('namacustomer'),
    alamatcustomer: formData.get('alamatcustomer'),
    nomortelepon: formData.get('nomortelepon'),
  });

  if ( !namacustomer || !alamatcustomer || !nomortelepon) {
    throw new Error("Semua field harus diisi.");
  }

  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: 'Missing Fields. Failed to Create Customer.',
  //   };
  // }
  // const { namacustomer,alamatcustomer, nomortelepon } = validatedFields.data;
//benda diatas tak perlu
  // try {
    await sql`
      INSERT INTO customer (namacustomer, alamatcustomer, nomortelepon)
      VALUES (${namacustomer}, ${alamatcustomer}, ${nomortelepon})
    `;
  // } catch (error) {
  //   return {
  //     message: 'Database Error: Failed to Create Montir.',
  //   };
  // }
  revalidatePath('/dashboard/customer');
  redirect('/dashboard/customer');
}


export async function updateCustomer(
  nocustomer: string,
  formData: FormData,
) {
  const { namacustomer,alamatcustomer, nomortelepon } = UpdateCustomer.parse({
    namacustomer: formData.get('namacustomer'),
    alamatcustomer: formData.get('alamatcustomer'),
    nomortelepon: formData.get('nomortelepon'),
    
  });

  if ( !namacustomer || !alamatcustomer || !nomortelepon) {
    throw new Error("Semua field harus diisi.");
  }

  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: 'Missing Fields. Failed to Update Customer.',
  //   };
  // }
  // const { namacustomer,alamatcustomer, nomortelepon } = validatedFields.data;

  // try {
    await sql`
        UPDATE customer
        SET namacustomer = ${namacustomer}, alamatcustomer = ${alamatcustomer}, nomortelepon = ${nomortelepon}
        WHERE nocustomer = ${nocustomer}
      `;
  // } catch (error) {
  //   return { message: 'Database Error: Failed to Update Montir.' };
  // }

  revalidatePath('/dashboard/customer');
  redirect('/dashboard/customer');
}

export async function deleteCustomer(nocustomer: string) {
  await sql`DELETE FROM customer WHERE nocustomer = ${nocustomer}`;
  revalidatePath('/dashboard/customer');
}

// END CUSTOMER //

export async function createUsers(formData: FormData) {
  const{ username, password, nama, alamat, email, nomortelepon } = CreateUsers.parse({
    username: formData.get('username'),
    password: formData.get('password'),
    nama: formData.get('nama'),
    alamat: formData.get('alamat'),
    email: formData.get('email'),
    nomortelepon: formData.get('nomortelepon'), 
  });

  if (!username || !password || !nama || !alamat || !email || !nomortelepon) {
    throw new Error("Semua field harus diisi.");
  }
  
    await sql`
      INSERT INTO users (username, password, nama, alamat, email, nomortelepon)
      VALUES ( ${username}, ${password}, ${nama}, ${alamat}, ${email}, ${nomortelepon})
    `;
 

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}


export async function updateUsers(
  username: string,
  formData: FormData,
) {
  const {  password,nama, alamat, email, nomortelepon  } = UpdateUsers.parse({
   
    username: formData.get('username'),
    password: formData.get('password'),
    nama: formData.get('nama'),
    alamat: formData.get('alamat'),
    email: formData.get('email'),
    nomortelepon: formData.get('nomortelepon'),
  });
  
    

  // Validasi: cek jika ada field yang kosong
  if (!username || !password || !nama || !alamat || !email || !nomortelepon) {
    throw new Error("Semua field harus diisi.");
  }
  
    await sql`
        UPDATE users
        SET  username = ${username}, password = ${password}, nama = ${nama}, alamat = ${alamat} , email = ${email}, nomortelepon = ${nomortelepon}
        WHERE username = ${username}
      `;
  

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}

export async function deleteUsers(username: string) {
  await sql`DELETE FROM users WHERE username = ${username}`;
  revalidatePath('/dashboard/users');
}

// END USER //

export async function createMenu( formData: FormData) {
  const {  nama_menu, harga_menu } = CreateMenu.parse({
    
    nama_menu: formData.get('nama_menu'),
    harga_menu: formData.get('harga_menu'),
   
  });

  if ( !nama_menu || !harga_menu ) {
    throw new Error("Semua field harus diisi.");
  }

 
    await sql`
      INSERT INTO menu (nama_menu, harga_menu)
      VALUES (${nama_menu}, ${harga_menu})
    `;
  

  revalidatePath('/dashboard/menu');
  redirect('/dashboard/menu');
}

export async function updateMenu(
  no_menu: string,
  formData: FormData,
) {
  const {nama_menu, harga_menu} = UpdateMenu.parse({
    
    nama_menu: formData.get('nama_menu'),
    harga_menu: formData.get('harga_menu'),
  });

  if ( !nama_menu || !harga_menu ) {
    throw new Error("Semua field harus diisi.");
  }

 
    await sql`
        UPDATE menu
        SET nama_menu = ${nama_menu}, harga_menu = ${harga_menu}
        WHERE no_menu = ${no_menu}
      `;
  

  revalidatePath('/dashboard/menu');
  redirect('/dashboard/menu');
}

export async function deleteMenu(no_menu: string) {
  await sql`DELETE FROM menu WHERE no_menu = ${no_menu}`;
  revalidatePath('/dashboard/menu');
}

// END STOK //



// END SERVICE //

// export async function getCustomerNameById(nocustomer: string) {
//   const pool = createPool({
//     connectionString: process.env.POSTGRES_URL,
//   });

//   let client;
//   try {
//     client = await pool.connect();

//     // Query to fetch customer name by nocustomer (customer ID)
//     const result = await client.query(
//       'SELECT namacustomer FROM customer WHERE nocustomer = $1',
//       [nocustomer]
//     );

//     if (result.rows.length === 0) {
//       throw new Error('Customer not found');
//     }

//     return result.rows[0].namacustomer; // return customer name
//   } catch (error) {
//     console.error('Error fetching customer name:', error);
//     throw error;
//   } finally {
//     if (client) {
//       client.release();
//     }
//     pool.end();
//   }
// }






// export async function createTransaksi(formData: FormData) {
  
  
//   const {
//     nocustomer,
//     id_user,
//     tanggal_transaksi,
//     total_harga,
//     status_transaksi,
//     metode_pembayaran,
//     keterangan,
//     poin,
   
//   } = CreateTransaksi.parse({
//     nocustomer: formData.get('nocustomer'),
//     id_user: formData.get('id_user'),
//     tanggal_transaksi: formData.get('tanggal_transaksi'),
//     total_harga: formData.get('total_harga'),
//     status_transaksi: formData.get('status_transaksi'),
//     metode_pembayaran: formData.get('metode_pembayaran'),
//     keterangan: formData.get('keterangan'),
    

   
//   });

  



 
//    await sql`
//     INSERT INTO transaksi (nocustomer, id_user, total_harga, status_transaksi, metode_pembayaran, keterangan, tanggal_transaksi, poindipakai)  
//     VALUES (${nocustomer}, ${id_user}, ${total_harga}, ${status_transaksi}, ${metode_pembayaran}, ${keterangan}, ${tanggal_transaksi}, ${poin})
//     RETURNING id_transaksi
//   `;


  
   

  
//   await sql`
//     UPDATE customer
//     SET poin = 0  
//     WHERE nocustomer = ${nocustomer}
//   `;

  
//   revalidatePath('/dashboard/transaksi');
//   redirect('/dashboard/transaksi');
// } 


export async function createTransaksi(formData: FormData) {
  console.log('createTransaksi function called');  // Log awal untuk memastikan fungsi dipanggil

  const { 
    nocustomer, 
    id_user, 
    tanggal_transaksi, 
    total_harga, 
    status_transaksi, 
    metode_pembayaran, 
    keterangan,
    poin = '0',  // Ambil poin dari form data, nilai default '0'
    use_points = 'false', // Pastikan untuk mengambil nilai checkbox
  } = CreateTransaksi.parse({
    nocustomer: formData.get('nocustomer'),
    id_user: formData.get('id_user'),
    tanggal_transaksi: formData.get('tanggal_transaksi'),
    total_harga: formData.get('total_harga'),
    status_transaksi: formData.get('status_transaksi'),
    metode_pembayaran: formData.get('metode_pembayaran'),
    keterangan: formData.get('keterangan'),
    poin: formData.get('poin'),  // Ambil poin yang dikirimkan
    use_points: formData.get('use_points') || 'false', // Jika tidak ada nilai, gunakan 'false' sebagai default
  });

  // Pastikan konversi nilai use_points menjadi boolean
  const isUsePoints = use_points === 'true' || use_points === 'false';

  console.log('use_points:', use_points);  // Log nilai use_points

  await sql`
    INSERT INTO transaksi (nocustomer, id_user, total_harga, status_transaksi, metode_pembayaran, keterangan, tanggal_transaksi , poindipakai)  
    VALUES (${nocustomer}, ${id_user}, ${total_harga}, ${status_transaksi}, ${metode_pembayaran}, ${keterangan}, ${tanggal_transaksi}, ${poin})
  `;
  
  if (isUsePoints) {
    console.log("Poin digunakan");
    await sql`
      UPDATE customer
      SET poin = poin + ${poin}  
      WHERE nocustomer = ${nocustomer}
    `;
  } else {
    console.log("Poin tidak digunakan");
    await sql`
      UPDATE customer
      SET poin = 0
      WHERE nocustomer = ${nocustomer}
    `;
  }
  revalidatePath('/dashboard/transaksi');
  redirect('/dashboard/transaksi');
}




  
     // Get the generated transaction ID

    // Insert menu items into the transaksi_menu table
    // for (let item of menu_items) {
    //   const { menuId, quantity } = item; // Assuming menu_items is an array of objects with menuId and quantity

    //   await client.query(
    //     `
    //     INSERT INTO transaksi_menu (transaction_id, menu_id, quantity)
    //     VALUES ($1, $2, $3)
    //     `,
    //     [transactionId, menuId, quantity]
    //   );
    // }

    // Commit the transaction
  






export async function updateTransaksi(id_transaksi: string, formData: FormData) {
  // Validasi dan parsing data dari FormData menggunakan Zod
  const {
    
    status_transaksi,
    
   
  } = UpdateTransaksi.parse({
    
    // tanggal_transaksi: formData.get('tanggal_transaksi'),
    
   status_transaksi:formData.get('status_transaksi'),
    
  });

  // Eksekusi query SQL untuk update data
  await sql`
    UPDATE transaksi
    SET 
       
      status_transaksi = ${status_transaksi} 
      
    WHERE id_transaksi = ${id_transaksi}
  `;

  // Revalidate path untuk memperbarui data di halaman dashboard
  revalidatePath('/dashboard/transaksi');

  // Redirect kembali ke halaman transaksi
  redirect('/dashboard/transaksi');
}

// export async function dtTransaksi(id_transaksi: string, formData: FormData) {
//   // Validasi dan parsing data dari FormData menggunakan Zod
//   const {
//     nocustomer,
//     id_user,
//     tanggal_transaksi,
//     total_harga,
//     status_transaksi,
//     metode_pembayaran,
//     keterangan,
//   } = DtTransaksi.parse({
//     nocustomer: formData.get('nocustomer'),
//     id_user: formData.get('id_user'),
//     tanggal_transaksi: formData.get('tanggal_transaksi'),
//     total_harga: formData.get('total_harga'),
//     status_transaksi: formData.get('status_transaksi'),
//     metode_pembayaran: formData.get('metode_pembayaran'),
//     keterangan: formData.get('keterangan'),
//   });

//   // Eksekusi query SQL untuk update data
//   await sql`
//     UPDATE transaksi
//     SET 
//       nocustomer = ${nocustomer}, 
//       id_user = ${id_user}, 
//       tanggal_transaksi = ${tanggal_transaksi}, 
//       total_harga = ${total_harga}, 
//       status_transaksi = ${status_transaksi}, 
//       metode_pembayaran = ${metode_pembayaran}, 
//       keterangan = ${keterangan}
//     WHERE id_transaksi = ${id_transaksi}
//   `;

//   // Revalidate path untuk memperbarui data di halaman dashboard
//   revalidatePath('/dashboard/transaksi');

//   // Redirect kembali ke halaman transaksi
//   redirect('/dashboard/transaksi');
// }


export async function deleteTransaksi(id: string) {
  await sql`DELETE FROM transaksi WHERE id_transaksi = ${id}`;
  revalidatePath('/dashboard/transaksi');
}

// LOGIN //

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credential.';
//         default:
//           return 'Username or Password Wrong!.';
//       }
//     }
//     throw error;
//   }
// }

