import z from 'zod';

export type User = {
  id_user: string;
  username:string;
  password:string;
  namauser:string;
  alamatuser:string;
  email:string;
  nomortelepon:string;

};

export type SessionPayload = {
  username:string;
  role:string;
}
// END USERS //

export type Customer = {
  nocustomer:string;
  namacustomer:string;
  alamatcustomer:string;
  poin:string;
  nomortelepon:string;
};

export type CustomerField = {
  nocustomer:string;
  namacustomer:string;
  poin:number;
};

export type CustomersTable = {
  nocustomer:string;
  namacustomer:string;
  alamatcustomer:string;
  poin:string;
  nomortelepon:string;
};

export type CustomerForm = {
  nocustomer:string;
  namacustomer:string;
  alamatcustomer:string;
  poin:string;
  nomortelepon:string;
};

export type FormattedCustomersTable = {
  nocustomer:string;
  namacustomer:string;
  nomortelepon:string;
  
};

export type LatestCustomersRaw = Omit<Customer, 'amount'> & {
  amount: number;
};
// END CUSTOMERS //



export type UsersTable = {
  username: string;
  password: string;
  namauser: string;
  alamatuser: string;
  email: string;
  nomortelepon: string;
  id_user:string;
};

export type UsersForm = {
  id_user: string;
  username: string;
  password: string;
  namauser: string;
  alamatuser: string;
  email: string;
  nomortelepon: string;
};

export type UsersField = {
  id_user: string;
  username: string;
  password: string;
  email: string;
  
  // nama_montir: string;
};

export type LatestUsersRaw = Omit<User, 'amount'> & {
  amount: number;
};
// END MONTIR //

export type menu = {
  no_menu:string;
  nama_menu:string;
  harga_menu:string;
  
};

export type MenuTable = {
  no_menu:string;
  nama_menu:string;
  harga_menu:string;
};

export type MenuField = {
  no_menu:string;
  nama_menu:string;
  harga_menu:number;
};

export type MenuForm = {
  no_menu:string;
  nama_menu:string;
  harga_menu:string; 
};

export type LatestMenuRaw = Omit<menu, 'amount'> & {
  amount: number;
};

export type Service = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  sukucadang_price:number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
};

export type ServiceTable = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  platenumber: string;
  nama_montir: string;
  sukucadang_price: number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
}

export type ServiceForm = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  sukucadang_price:number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
}

export type ServiceField = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  sukucadang_price:number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
}

export type LatestServiceRaw = Omit<Service, 'amount'> & {
  amount: number;
  name: string;
};





export type transaksi = {
  id_transaksi:string;
  nocustomer:string;
  id_user:string;
  tanggal_transaksi:string;
  total_harga:string;
  status_transaksi:string;
  metode_pembayaran:string;
  keterangan:string;
  newpoin:string;
  poindipakai: string;
  no_menu:string;
  nama_menu:string;
  quantity:string;
  
};

export type TransaksiTable = {
  id_transaksi:string;
  nocustomer:string;
  id_user:string;
  username:string;
  namacustomer:string;
  tanggal_transaksi:string;
  total_harga:string;
  status_transaksi:string;
  metode_pembayaran:string;
  keterangan:string;
  poin:string;
  newpoin:string;
  poindipakai: string;
  no_menu:string;
  nama_menu:string;
  quantity:string;
  
};

export type TransaksiField = {
  id_transaksi:string;
  nocustomer:string;
  id_user:string;
  poindipakai: string;
  newpoin:string;
  tanggal_transaksi:string;
  total_harga:string;
  status_transaksi:string;
  metode_pembayaran:string;
  keterangan:string;
  no_menu: string;
  nama_menu: string;
  quantity: string;
};

export type TransaksiForm = {
  id_transaksi: string;
  nocustomer: string;
  namacustomer: string;
  username: string;
  poindipakai: string;
  id_user: string;
  tanggal_transaksi: string;
  total_harga: string;
  status_transaksi: string;
  metode_pembayaran: string;
  keterangan: string;
  no_menu: string;
  nama_menu: string;
  quantity: string;
  menuItems?: { no_menu: string; nama_menu: string; harga_menu: number; quantity: number }[];
};

export type DtTransaksiForm = {
  id_detail_transaksi: string;  
  id_transaksi: string;         
  id_menu: string;              
  nama_menu: string;            
  harga_menu: string;           
  quantity: number;             
  total_harga: string;          
};

export type DtTransaksiField = {
  id_detail_transaksi: string;  
  id_transaksi: string;         
  id_menu: string;              
  nama_menu: string;            
  harga_menu: string;           
  quantity: number;             
  total_harga: string;          
};

export type DtTransaksiTable = {
  id_detail_transaksi: string;  
  id_transaksi: string;         
  no_menu: string;              
  nama_menu: string;            
  harga_menu: string;           
  quantity: number;             
  total_harga: string;          
};



export type LatestTransaksiRaw = Omit<transaksi, 'amount'> & {
  amount: number;
};

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined