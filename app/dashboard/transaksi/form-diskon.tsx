// 'use client';

// import { useState, useEffect } from 'react';
// import { UserCircleIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
// import { Button } from '@/app/ui/button';
// import { createTransaksi } from '@/app/lib/actions';
// import { CustomerField, MenuField } from '@/app/lib/definitions';
// import Link from 'next/link';

// export default function Form({
//   customer,
//   menu, // pastikan menu sudah diberikan tipe MenuField[]
// }: {
//   customer: CustomerField[];
//   menu: MenuField[]; // Tipe menu ditentukan di sini
// }) {
//   const [selectedCustomer, setSelectedCustomer] = useState('');
//   const [menuItems, setMenuItems] = useState<{ menuId: string; quantity: number }[]>([]);
//   const [totalPrice, setTotalPrice] = useState(0); // State untuk total harga

//   // Menambahkan menu baru ke dalam daftar
//   const addMenuItem = () => {
//     setMenuItems([...menuItems, { menuId: '', quantity: 1 }]); // Tambahkan menu kosong dengan jumlah 1
//   };

//   // Menghapus menu berdasarkan index
//   const removeMenuItem = (index: number) => {
//     setMenuItems(menuItems.filter((_, i) => i !== index));
//   };

//   // Fungsi untuk menangani perubahan menu atau jumlah
//   const handleMenuChange = (index: number, field: string, value: any) => {
//     setMenuItems((prevItems) =>
//       prevItems.map((item, i) =>
//         i === index ? { ...item, [field]: value } : item
//       )
//     );
//   };
  
//   const [transactionStatus, setTransactionStatus] = useState('Pending');
//   const [paymentMethod, setPaymentMethod] = useState('Cash');  // Default metode pembayaran adalah Cash
//   const [description, setDescription] = useState('');

  
  
  

//   // Menghitung total harga setiap kali menuItems berubah
//   useEffect(() => {
//     console.log('Menu Items:', menuItems);
//     console.log('Data Menu:', menu); // Memeriksa data menu yang diterima

//     const total = menuItems.reduce((acc, item) => {
//       console.log('Mencari menu dengan no_menu:', item.menuId);  // Log untuk memeriksa menuId
//       const selectedMenu = menu.find((m) => m.no_menu.toString() === item.menuId.toString());

//       console.log('Menu ditemukan:', selectedMenu);  // Log hasil pencarian menu
      
//       if (selectedMenu) {
//         console.log(`Menu ID: ${item.menuId}, Quantity: ${item.quantity}, Harga: ${selectedMenu.harga_menu}`);
//         return acc + selectedMenu.harga_menu * item.quantity;  // Menghitung harga total
//       }
//       return acc;
//     }, 0);
//     console.log('Total Harga:', total);  // Memeriksa harga total yang dihitung
//     setTotalPrice(total);  // Memperbarui state totalHarga
//   }, [menuItems, menu]);  // Efek ini akan berjalan ketika menuItems atau menu berubah
    
  

//   // Fungsi untuk handle submit form
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validasi input
//     if (!selectedCustomer || menuItems.some(item => !item.menuId || item.quantity <= 0)) {
//       alert('Harap pilih customer dan setidaknya satu menu dengan jumlah yang valid');
//       return;
//     }

//     // Siapkan data transaksi
//     const transactionData = {
//       nocustomer: selectedCustomer,
//       menu_items: menuItems,
//     };

//     // Kirim data transaksi ke backend
//     createTransaksi(transactionData).then((response) => {
//       if (response.success) {
//         alert('Transaksi berhasil dibuat!');
//       } else {
//         alert('Gagal membuat transaksi!');
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//         {/* Pilih Customer */}
//         <div className="mb-4">
//           <label htmlFor="customer" className="mb-2 block text-sm font-medium">
//             Pilih Customer
//           </label>
//           <div className="relative">
//             <select
//               id="nocustomer"
//               name="nocustomer"
//               className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               value={selectedCustomer}
//               onChange={(e) => setSelectedCustomer(e.target.value)}
//               aria-describedby="customer-error"
//             >
//               <option value="" disabled>
//                 Pilih customer
//               </option>
//               {customer?.map((customer) => (
//                 <option key={customer.nocustomer} value={customer.nocustomer}>
//                   {customer.namacustomer}
//                 </option>
//               ))}
//             </select>
//             <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Menu dan Jumlah (Multiple) */}
//         <div className="mb-4">
//           <label htmlFor="menu" className="mb-2 block text-sm font-medium">
//             Pilih Menu dan Jumlah
//           </label>

//           {menuItems.map((item, index) => (
//             <div key={index} className="mb-4 flex items-center space-x-4">
//               <div className="relative flex-1">
//                 <select
//                   className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                   value={item.menuId}
//                   onChange={(e) => handleMenuChange(index, 'menuId', e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Pilih Menu
//                   </option>
//                   {menu?.map((menuItem) => (
//                     <option key={menuItem.no_menu} value={menuItem.no_menu}>
//                       {menuItem.nama_menu}
//                     </option>
//                   ))}
//                 </select>
//                 <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//               </div>

//               <div className="relative w-20">
//                 <input
//                   type="number"
//                   min="1"
//                   className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                   value={item.quantity}
//                   onChange={(e) => handleMenuChange(index, 'quantity', +e.target.value)}
//                 />
//                 <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//               </div>

//               <button
//                 type="button"
//                 className="text-red-500 hover:text-red-700"
//                 onClick={() => removeMenuItem(index)}
//               >
//                 Hapus
//               </button>
//             </div>
//           ))}

//           <button
//             type="button"
//             className="mt-2 text-blue-500 hover:text-blue-700"
//             onClick={addMenuItem}
//           >
//             Tambah Menu
//           </button>
//         </div>

//            {/* tanggal_transaksi */}
//            <div className="mb-4">
//           <label
//             htmlFor="sukucadang_price"
//             className="mb-2 block text-sm font-medium"
//           >
//             Tanggal Transaksi
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="tanggal_transaksi"
//                 name="tanggal_transaksi"
//                 type="date"
                
//                 placeholder="Fill Suku Cadang Price"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />

//               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         {/* Status TRANSAKSI */}
//         <div className="mb-4">
//           <label
//             htmlFor="status_transaksi"
//             className="mb-2 block text-sm font-medium"
//           >
//             Status Transaksi
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//           <select
//             id="status_transaksi"
//             name="status_transaksi"
//             className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//             value={transactionStatus}
//             onChange={(e) => setTransactionStatus(e.target.value)}
//           >
//             <option value="Pending">Pending</option>
//             <option value="Paid">Paid</option>
//             <option value="Completed">Completed</option>
//           </select>

//               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         {/* Metode Pembayaran */}
//         <div className="mb-4">
//             <label htmlFor="paymentMethod" className="mb-2 block text-sm font-medium">
//               Pilih Metode Pembayaran
//             </label>
//             <div className="relative">
//               <select
//                 id="metode_pembayaran"
//                 name="metode_pembayaran"
//                 className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 value={paymentMethod}
//                 onChange={(e) => setPaymentMethod(e.target.value)}  // Update state saat memilih metode pembayaran
//               >
//                 <option value="Cash">Tunai</option>
//                 <option value="Credit Card">Kartu Kredit</option>
//                 <option value="E-Wallet">Qris</option>
//               </select>
//             </div>
//           </div>

//           {/* KETERANGAN */}

//           <div className="mb-4">
//             <label htmlFor="description" className="mb-2 block text-sm font-medium">
//               Keterangan
//             </label>
//             <div className="relative">
//               <textarea
//                 id="keterangan"
//                 name="keterangan"
//                 rows={2}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
//                 placeholder="Masukkan keterangan atau catatan transaksi"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)} // Update state saat input keterangan berubah
//               ></textarea>
//             </div>
//           </div>





//         {/* Total Harga */}
//         <div className="mt-4 text-sm font-medium text-gray-800">
//           <span>Total Harga: </span>
//           <span className="font-bold">
//             {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
//           </span>
//         </div>
           

//       </div>

//       <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/service"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Batal
//         </Link>
//         <Button
//           className="items-center bg-blue-400 hover:bg-blue-600"
//           type="submit"
//         >
//           Buat Transaksi
//         </Button>
//       </div>
//     </form>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { UserCircleIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTransaksi } from '@/app/lib/actions';
import { CustomerField, MenuField, UsersField } from '@/app/lib/definitions';
import Link from 'next/link';

export default function Form({
  customer,
  menu,
  users, // pastikan menu sudah diberikan tipe MenuField[]
}: {
  customer: CustomerField[];
  menu: MenuField[];
  users: UsersField[];
   // Tipe menu ditentukan di sini
}) {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedUsers,setSelectedUsers] = useState('');
  const [menuItems, setMenuItems] = useState<{ menuId: string; quantity: number }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [usePoints, setUsePoints] = useState(false); // State untuk menentukan apakah poin digunakan
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice); // Total harga setelah diskomn
  const [points, setPoints] = useState(0); 
  const [transactionStatus, setTransactionStatus] = useState('Pending');
  const [paymentMethod, setPaymentMethod] = useState('Cash');  // Default metode pembayaran adalah Cash
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false); // State for handling loading state
  const [error, setError] = useState(''); // State for handling error messages
  const [success, setSuccess] = useState(''); // State for handling success messages

  // Menambahkan menu baru ke dalam daftar
  const addMenuItem = () => {
    setMenuItems([...menuItems, { menuId: '', quantity: 1 }]); // Tambahkan menu kosong dengan jumlah 1
  };

  // Menghapus menu berdasarkan index
  const removeMenuItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  // Fungsi untuk menangani perubahan menu atau jumlah
  const handleMenuChange = (index: number, field: string, value: any) => {
    setMenuItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  // Menghitung total harga setiap kali menuItems berubah
    useEffect(() => {
      const total = menuItems.reduce((acc, item) => {
        const selectedMenu = menu.find((m) => m.no_menu.toString() === item.menuId.toString());
        if (selectedMenu) {
          return acc + selectedMenu.harga_menu * item.quantity;  // Menghitung harga total
        }
        return acc;
      }, 0);
      setTotalPrice(total);
      const calculatedPoints = Math.round(total * 0.05); // Dibulatkan ke bilangan bulat
      setPoints(calculatedPoints);
    }, [menuItems, menu]);

    useEffect(() => {
      // Hitung harga setelah diskon poin
      if (usePoints) {
        const discount = points * 100; // 1 poin = Rp100
        setDiscountedPrice(Math.max(totalPrice - discount, 0)); // Total harga setelah diskon, tidak boleh negatif
      } else {
        setDiscountedPrice(totalPrice); // Total harga asli
      }
    }, [usePoints, points, totalPrice]);

  // Fungsi untuk menangani perubahan total harga (input edit)
  const handleTotalPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/[^0-9.-]+/g, ''));  // Mengambil nilai input, menghapus karakter selain angka
    if (!isNaN(value)) {
      setTotalPrice(value);  // Memperbarui total harga
    }
  };

  // Fungsi untuk handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi input
    // if (!selectedCustomer || menuItems.some(item => !item.menuId || item.quantity <= 0)) {
    //   alert('Harap pilih customer dan setidaknya satu menu dengan jumlah yang valid');
    //   return;
    // }

    // Siapkan data transaksi
    const transactionData = {
      nocustomer: selectedCustomer,
      menu_items: menuItems,
      total_harga: totalPrice, // Kirim total harga ke backend
      status_transaksi: transactionStatus,
      payment_method: paymentMethod,
      description: description,
    };

    try {
      setLoading(true); // Set loading state to true while waiting for the transaction to be processed
      setError(''); // Reset error state
      setSuccess(''); // Reset success state

      // Kirim data transaksi ke backend
      const response = await createTransaksi(transactionData);

      if (response.success) {
        setSuccess('Transaksi berhasil dibuat!');
      } else {
        setError(response.message || 'Gagal membuat transaksi, coba lagi nanti.');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat membuat transaksi, coba lagi nanti.');
      console.error('Error creating transaction:', error);
    } finally {
      setLoading(false); // Set loading state to false after the transaction is complete
    }
  };

  return (
    <form action={createTransaksi}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Pilih Customer */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Pilih Customer
          </label>
          <div className="relative">
            <select
              id="nocustomer"
              name="nocustomer"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              value={selectedCustomer}
              onChange={(e) => setSelectedCustomer(e.target.value)}
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Pilih customer
              </option>
              {customer?.map((customer) => (
                <option key={customer.nocustomer} value={customer.nocustomer}>
                  {customer.namacustomer}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Menu dan Jumlah (Multiple) */}
        <div className="mb-4">
          <label htmlFor="menu" className="mb-2 block text-sm font-medium">
            Pilih Menu dan Jumlah
          </label>

          {menuItems.map((item, index) => (
            <div key={index} className="mb-4 flex items-center space-x-4">
              <div className="relative flex-1">
                <select
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  value={item.menuId}
                  onChange={(e) => handleMenuChange(index, 'menuId', e.target.value)}
                >
                  <option value="" disabled>
                    Pilih Menu
                  </option>
                  {menu?.map((menuItem) => (
                    <option key={menuItem.no_menu} value={menuItem.no_menu}>
                      {menuItem.nama_menu}
                    </option>
                  ))}
                </select>
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>

              <div className="relative w-20">
                <input
                  type="number"
                  min="1"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  value={item.quantity}
                  onChange={(e) => handleMenuChange(index, 'quantity', +e.target.value)}
                />
                <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>

              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => removeMenuItem(index)}
              >
                Hapus
              </button>
            </div>
          ))}

          <button
            type="button"
            className="mt-2 text-blue-500 hover:text-blue-700"
            onClick={addMenuItem}
          >
            Tambah Menu
          </button>
        </div>
            <div className="mb-4">
           <label
             htmlFor="id_user"
            className="mb-2 block text-sm font-medium"
          >
             id_user
           </label>
           <div className="relative mt-2 rounded-md">
             <div className="relative">
             <select
              id="id_user"
              name="id_user"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              value={selectedUsers}
              onChange={(e) => setSelectedUsers(e.target.value)}
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Pilih User
              </option>
              {users && users?.map((users) => (
                <option key={users.id} value={users.id}>
                  {users.username}
                </option>
              ))}
            </select>
               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
             </div>
           </div>
         </div>



                    {/* tanggal_transaksi */}
           <div className="mb-4">
           <label
             htmlFor="tanggal_transaksi"
            className="mb-2 block text-sm font-medium"
          >
             Tanggal Transaksi
           </label>
           <div className="relative mt-2 rounded-md">
             <div className="relative">
               <input
                 id="tanggal_transaksi"
                 name="tanggal_transaksi"
                 type="date"
                
                 placeholder="Fill Suku Cadang Price"
                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
               />

               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
             </div>
           </div>
         </div>

         {/* Status TRANSAKSI */}
         <div className="mb-4">
           <label
             htmlFor="status_transaksi"
             className="mb-2 block text-sm font-medium"
           >
             Status Transaksi
           </label>
           <div className="relative mt-2 rounded-md">
             <div className="relative">
           <select
             id="status_transaksi"
             name="status_transaksi"
             className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
             value={transactionStatus}
             onChange={(e) => setTransactionStatus(e.target.value)}
           >
             <option value="Pending">Pending</option>
             <option value="Paid">Paid</option>
             <option value="Completed">Completed</option>
           </select>

               <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
             </div>
           </div>
         </div>


        {/* metode pembayaran */}
        <div className="mb-4">
             <label htmlFor="paymentMethod" className="mb-2 block text-sm font-medium">
               Pilih Metode Pembayaran
            </label>
             <div className="relative">
               <select
                 id="metode_pembayaran"
                 name="metode_pembayaran"
                 className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                 value={paymentMethod}
                 onChange={(e) => setPaymentMethod(e.target.value)}  // Update state saat memilih metode pembayaran
               >
                 <option value="Cash">Tunai</option>
                 <option value="Credit Card">Kartu Kredit</option>
                 <option value="E-Wallet">Qris</option>
               </select>
            </div>
           </div>

        {/* KETERANGAN */}

           <div className="mb-4">
             <label htmlFor="description" className="mb-2 block text-sm font-medium">
               Keterangan
             </label>
             <div className="relative">
              <textarea
                 id="keterangan"
                 name="keterangan"
                 rows={2}
                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                 placeholder="Masukkan keterangan atau catatan transaksi"
                 value={description}
                onChange={(e) => setDescription(e.target.value)} // Update state saat input keterangan berubah
               ></textarea>
             </div>
           </div>

        {/* Total Harga */}
        <div className="mt-4">
          <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
            Total Harga
          </label>
          <input
            type="text"
            id="total_harga"
            name="total_harga"
            value={totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
            onChange={handleTotalPriceChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Poin */}
      <div className="mt-4">
        <label htmlFor="points" className="mb-2 block text-sm font-medium">
          Poin (5% dari Total Harga)
        </label>
        <input
          type="text"
          id="poin"
          name="poin"
          value={points}
          readOnly
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
        />
      </div>

      {/* Tombol Tukarkan Poin */}
          <div className="mt-4 flex items-center gap-4">
         
          </div>
        
      

        {/* Error & Success Messages */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}

        {/* Submit Button */}
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/transaksi"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Batal
          </Link>
          <Button
            className="items-center bg-blue-400 hover:bg-blue-600"
            type="submit"
            disabled={loading} // Disable submit button when loading
          >
            {loading ? 'Memproses...' : 'Buat Transaksi'}
          </Button>
        </div>
      </div>
    </form>
  );
}
