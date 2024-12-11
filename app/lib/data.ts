import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';
// import { formatCurrency } from './utils';
import {
  // CustomerField,
  CustomersTable,
  CustomerField,
  CustomerForm,
  LatestCustomersRaw,
  // CustomersTableType,
  // InvoiceForm,
  // InvoicesTable,
  // LatestInvoiceRaw,
  User,
  
  Customer,
  Service,
  menu,
  MenuField,
  MenuTable,
  ServiceTable,
  ServiceForm,
  ServiceField,
  LatestServiceRaw,
 
  MenuForm,
  TransaksiField,
  TransaksiTable,
  TransaksiForm,
  UsersForm,
  LatestTransaksiRaw,
  DtTransaksiField,
  UsersField,
  UsersTable,
  LatestUsersRaw,
  // Revenue,
} from './definitions';
import { createPool } from '@vercel/postgres';
const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});
const ITEMS_PER_PAGE = 6;
const MAX_RETRIES = 3;
const RETRY_DELAY = 30000;   

export async function getUsers(username: string) {
  unstable_noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 30000));
    const users = await sql`SELECT * FROM users WHERE username=${username}`;
    return users.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchCardData() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const usersCountPromise = sql`SELECT COUNT(*) FROM users`;
    const sukucadangCountPromise = sql`SELECT COUNT(*) FROM sukucadang`;
    const serviceCountPromise = sql`SELECT COUNT(*) FROM service`;

    const data = await Promise.all([
      customerCountPromise,
      usersCountPromise,
      sukucadangCountPromise,
      serviceCountPromise,
    ]);

    const numberOfCustomers = Number(data[0].rows[0].count ?? '0');
    const numberOfUsers = Number(data[1].rows[0].count ?? '0');
    const numberOfStok = Number(data[2].rows[0].count ?? '0');
    const numberOfService = Number(data[3].rows[0].count ?? '0');

    return {
      numberOfCustomers,
      numberOfUsers,
      numberOfStok,
      numberOfService,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

// Customers //

export async function getCustomerNameById(nocustomer: string) {
  const client = await pool.connect();

  try {
    // Query untuk mengambil nama customer berdasarkan nocustomer
    const result = await client.query(
      'SELECT namacustomer FROM customer WHERE nocustomer = $1',
      [nocustomer]
    );

    if (result.rows.length === 0) {
      throw new Error('Customer not found');
    }

    return result.rows[0].namacustomer;
  } catch (error) {
    console.error('Error fetching customer name:', error);
    throw error;
  } finally {
    client.release();
  }
}

export async function fetchCustomers() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<CustomerField>`
      SELECT
        nocustomer,
        namacustomer,
        poin
      FROM customer
      ORDER BY namacustomer ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const customers = await sql<CustomersTable>`
		SELECT *
		FROM customer
		WHERE
		  customer.namacustomer ILIKE ${`%${query}%`} OR
      customer.alamatcustomer::text ILIKE ${`%${query}%`} OR
      customer.poin::text ILIKE ${`%${query}%`} OR
      customer.nomortelepon::text ILIKE ${`%${query}%`}
		GROUP BY customer.nocustomer, customer.namacustomer, customer.alamatcustomer, customer.poin, customer.nomortelepon
		ORDER BY customer.namacustomer ASC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return customers.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchCustomersPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const count = await sql `SELECT COUNT(*)
    FROM customer
    WHERE
      customer.namacustomer ILIKE ${`%${query}%`} OR
      customer.alamatcustomer::text ILIKE ${`%${query}%`} OR
      customer.poin::text ILIKE ${`%${query}%`} OR
      customer.nomortelepon ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

export async function fetchCustomerById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<CustomerForm>`
      SELECT
        customer.nocustomer,
        customer.namacustomer,
        customer.alamatcustomer,
        customer.poin,
        customer.nomortelepon
        
      FROM customer
      WHERE customer.nocustomer = ${id};
    `;

    const customers = data.rows.map((customer) => ({
      ...customer,
    }));

    return customers[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer.');
  }
}

export async function fetchLatestCustomers() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestCustomersRaw>`
        SELECT customers.name, customers.phonenumber, customers.platenumber, customers.image_url
        FROM customers
        ORDER BY customers.name DESC
        LIMIT 5`;

      const latestCustomers = data.rows.map((customers) => ({
        ...customers,
      }));
      return latestCustomers;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest customers.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}

// USERS //

export async function fetchUsers() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<UsersField>`
      SELECT
        username,
        password,
        nama,
        alamat,
        nomortelepon,
        id
      FROM users
      ORDER BY nama ASC
    `;

    const users = data.rows;
    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all Users.');
  }
}

export async function fetchFilteredUsers(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const users = await sql<UsersTable>`
		SELECT *
		FROM users
		WHERE
		  users.username ILIKE ${`%${query}%`} OR
      users.password::text ILIKE ${`%${query}%`} OR
      users.nama::text ILIKE ${`%${query}%`} OR
      users.alamat::text ILIKE ${`%${query}%`} OR
      users.email::text ILIKE ${`%${query}%`} OR
      users.id::text ILIKE ${`%${query}%`} OR
      users.nomortelepon ILIKE ${`%${query}%`}
		GROUP BY users.username, users.password, users.nama, users.alamat, users.email, users.nomortelepon, users.id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return users.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch users table.');
  }
}

export async function fetchUsersPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const count = await sql `SELECT COUNT(*)
    FROM users
    WHERE
    users.username ILIKE ${`%${query}%`} OR
    users.password::text ILIKE ${`%${query}%`} OR
    users.nama::text ILIKE ${`%${query}%`} OR
    users.alamat::text ILIKE ${`%${query}%`} OR
    users.email::text ILIKE ${`%${query}%`} OR
    users.nomortelepon ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of Users.');
  }
}

export async function fetchUsersById(username: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<UsersForm>`
      SELECT
        users.username,
        users.password,
        users.nama,
        users.alamat,
        users.email,
        users.nomortelepon
      FROM users
      WHERE users.username = ${username};
    `;

    const users = data.rows.map((users) => ({
      ...users,
    }));

    return users[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function fetchLatestUsers() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestUsersRaw>`
        SELECT users.username, users.password, users.nama, users.alamat, users.email, users.nomortelepon
        FROM users
        ORDER BY users.nama DESC
        LIMIT 5`;

      const latestUsers = data.rows.map((users) => ({
        ...users,
      }));
      return latestUsers;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest User.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}

// Stock //

export async function fetchMenu() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<MenuField>`
      SELECT *
      FROM menu
      ORDER BY nama_menu ASC
    `;

    const menu = data.rows;
    return menu;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all Stok.');
  }
}

export async function fetchFilteredMenu(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const menu = await sql<MenuTable>`
		SELECT *
		FROM menu
		WHERE
		  
      menu.nama_menu ::text ILIKE ${`%${query}%`} OR
      menu.harga_menu ::text ILIKE ${`%${query}%`} 
		GROUP BY menu.no_menu,menu.nama_menu, menu.harga_menu
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return menu.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch menu table.');
  }
}

export async function fetchMenuPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const count = await sql 
    `SELECT COUNT(*)
    FROM menu
    WHERE
      
      menu.nama_menu::text ILIKE ${`%${query}%`} OR
      menu.harga_menu::text ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of stok.');
  }
}

export async function fetchMenuById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<MenuForm>`
      SELECT
        menu.no_menu,
        menu.nama_menu,
        menu.harga_menu
       
      FROM menu
      WHERE menu.no_menu = ${id};
    `;

    const menu = data.rows.map((menu) => ({
      ...menu,
    }));

    return menu[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Stok.');
  }
}



 

// Service //

export async function fetchTransaksi() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<TransaksiField>`
      SELECT *
      FROM transaksi
    `;

    const transaksi = data.rows;
    return transaksi;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all transaksi.');
  }
}

export async function fetchDtTransaksiById(id:string) {
  try{

  const result = await sql <TransaksiField>`
  SELECT
    tm.id_transaksi,
    tm.no_menu AS id_menu,
    m.nama_menu,
    m.harga_menu,
    tm.quantity,
    (m.harga_menu * tm.quantity) AS total_harga
FROM
    transaksi_menu tm
JOIN
    menu m ON tm.no_menu = m.no_menu
WHERE
    tm.id_transaksi = ${id};
;
`;

// Return hasil query
return result;
} catch (error) {
console.error('Error fetching dt_transaksi by id:', error);
throw new Error('Error fetching data');
}
}

export async function fetchFilteredDtTransaksi(id_transaksi: string) {
  try {
    const dtTransaksi = await sql`
      SELECT
        dt.id_detail_transaksi,
        dt.id_transaksi,
        dt.no_menu,
        dt.quantity,
        c.namacustomer,
        u.username
      FROM
        dt_transaksi dt
      JOIN
        transaksi t ON dt.id_transaksi = t.id_transaksi
      JOIN
        customer c ON t.nocustomer = c.nocustomer
      JOIN
        users u ON t.id_user = u.id
      WHERE
        dt.id_transaksi = ${id_transaksi}
    `;

    return dtTransaksi.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch dtTransaksi data.");
  }
}

export async function fetchFilteredTransaksi(query: string, currentPage: number) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const transaksi = await sql<TransaksiTable>`
		SELECT

      transaksi.id_transaksi,
      transaksi.nocustomer,
      transaksi.tanggal_transaksi,
      transaksi.total_harga,
      transaksi.status_transaksi,
      transaksi.metode_pembayaran,
      transaksi.keterangan,
      transaksi.id_user,
      transaksi.poindipakai,
      transaksi.newpoin,
      users.username,
      customer.namacustomer,
      customer.poin
      

		FROM transaksi
    JOIN customer ON transaksi.nocustomer = customer.nocustomer
    JOIN users ON transaksi.id_user = users.id
		WHERE
      customer.namacustomer::text ILIKE ${`%${query}%`} OR
      users.username ILIKE ${`%${query}%`} OR
      transaksi.total_harga::text ILIKE ${`%${query}%`} OR
      transaksi.status_transaksi::text ILIKE ${`%${query}%`} OR
      transaksi.keterangan::text ILIKE ${`%${query}%`} OR
      transaksi.metode_pembayaran ILIKE ${`%${query}%`} OR
      transaksi.poindipakai::text ILIKE ${`%${query}%`} OR
      transaksi.newpoin::text ILIKE ${`%${query}%`} OR
      transaksi.tanggal_transaksi::text ILIKE ${`%${query}%`}
		ORDER BY transaksi.id_transaksi DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return transaksi.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch transaksi table.');
  }
}

export async function fetchTransaksiPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const count = await sql `SELECT COUNT(*)
    FROM transaksi
    WHERE
      transaksi.tanggal_transaksi::text ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pages.');
  }
}

export async function fetchTransaksiById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<TransaksiForm>`
    SELECT 
    transaksi.id_transaksi, 
    transaksi.nocustomer, 
    transaksi.tanggal_transaksi, 
    transaksi.total_harga, 
    transaksi.status_transaksi,
    transaksi.metode_pembayaran,
    transaksi.keterangan, 
    transaksi.id_user, 
    transaksi.poindipakai
  FROM transaksi
  WHERE transaksi.id_transaksi = ${id};
  
    `;

    const transaksi = data.rows.map((transaksi) => ({
      ...transaksi,
    }));

    return transaksi[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Transaksi.');
  }
}

export async function fetchTransaksiMenuItems(id: string) {
  try {
    // Query to fetch menu items associated with the transaksi id
    const data = await sql`
      SELECT 
        tm.no_menu, 
        m.nama_menu, 
        tm.quantity
      FROM transaksi_menu tm
      JOIN menu m ON tm.no_menu = m.no_menu
      WHERE tm.id_transaksi = ${id};
    `;

    // Mapping the results to ensure correct structure (if necessary)
    const menuItems = data.rows.map((item) => ({
      no_menu: item.no_menu,
      nama_menu: item.nama_menu,
      quantity: item.quantity,
    }));

    return menuItems; // Return the list of menu items
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw new Error('Error fetching menu items'); // Throw an error if something goes wrong
  }
}


export async function fetchLatestTransaksi() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestTransaksiRaw>`
        SELECT 
        transaksi.total_harga, 
        transaksi.metodepembayaran, 
        transaksi.keterangan,
        customer.namacustomer
        FROM transaksi
        JOIN customer ON transaksi.nocustomer = customer.nocustomer
        ORDER BY transaksi.tanggal_transaksi DESC
        LIMIT 5`;

      const latesttransaksi = data.rows.map((transaksi) => ({
        ...transaksi
      }));
      return latesttransaksi;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest transaksi.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}