
'use client';

import { useState, useEffect } from 'react';
import { UserCircleIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTransaksi } from '@/app/lib/actions';
import { CustomerField, MenuField, UsersField } from '@/app/lib/definitions';
import Link from 'next/link';

type MenuItem = {
  menuId: string;
  quantity: number;
  
};

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
  const [selectedUsers, setSelectedUsers] = useState('');
  const [menuItems, setMenuItems] = useState<{ menuId: string; quantity: number }[]>([{ menuId: "", quantity: 1 }]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [usePoints, setUsePoints] = useState(false);
  const [poinUsed, setPoinUsed] = useState<number>(0); // Inisialisasi dengan nilai number

  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);
  const [isDiscountChecked, setIsDiscountChecked] = useState(false);
  const [points, setPoints] = useState(0);
  const [pointsToUse, setPointsToUse] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState('Pending');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [newpoin, setNewPOIN] = useState<number>(0);


  // Menambahkan menu baru ke dalam daftar
  const addMenuItem = () => {
    setMenuItems([...menuItems, { menuId: '', quantity: 1 }]); // Tambahkan menu kosong dengan jumlah 1
  };

  // Menghapus menu berdasarkan index
  const removeMenuItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  // const pointsValue = selectedCustomer
  // ? parseInt(customer.find((cust) => cust.nocustomer === selectedCustomer)?.poin || '0', 10)
  // : 0;

  const handleMenuSubmit = (menuItems: MenuItem[]) => {
    setMenuItems(menuItems);
    // Update total price based on selected items and quantities
    const updatedTotalPrice = menuItems.reduce((total, item) => {
      const menuItem = menu.find((menuItem) => menuItem.no_menu === item.menuId);
      return menuItem ? total + menuItem.harga_menu * item.quantity : total;
    }, 0);
    setTotalPrice(updatedTotalPrice);
  };


  // Fungsi untuk menangani perubahan menu atau jumlah
  const handleMenuChange = (
    index: number,
    field: 'menuId' | 'quantity',
    value: string | number
  ) => {
    if (field === 'menuId') {
      const isDuplicate = menuItems.some(
        (item, i) => i !== index && item.menuId === value
      );
      if (isDuplicate) {
        alert('Menu sudah dipilih. Silakan pilih menu lain.');
        return;
      }
    }
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
              return acc + selectedMenu.harga_menu * item.quantity; // Menghitung harga total
            }
            return acc;
          }, 0);

          
          const discount = isDiscountChecked ? (points > total ? total : points) : 0; // Diskon berdasarkan poin jika checkbox aktif
          const totalAfterDiscount = total - discount;

          setTotalPrice(totalAfterDiscount); 

        }, [menuItems, menu, points, isDiscountChecked]);


        
        const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          // Get the checkbox state (checked or unchecked)
          const isChecked = e.target.checked;
          console.log('Checkbox changed:', isChecked);  // Log the checkbox state (checked or unchecked)
        
          // Update the state for whether the discount is checked
          setIsDiscountChecked(isChecked);
        
          // Based on whether the checkbox is checked, set the points
          if (isChecked) {
            console.log('Using points:', points);
            setPoinUsed(points);  // If checked, set the points to the available points
          } else {
            console.log('Resetting points to:', newpoin);
            setPoinUsed(newpoin);  // If unchecked, reset the points to some default value (newpoin)
          }
        };
        
        
  useEffect(() => {
    const calculatedPoints = Math.round(totalPrice * 0.05); // Menghitung poin berdasarkan total harga
    setNewPOIN(calculatedPoints);  // Update poin berdasarkan total harga setelah diskon
  }, [totalPrice]);  // Hanya menjalankan effect ini ketika totalPrice berubah
  //  Pastikan poin juga menjadi dependensi agar menghitung ulang saat poin berubah
  

    useEffect(() => {
      if (usePoints) {
        const discount = pointsToUse; // Ensure you're using pointsToUse here, which is the points user wants to redeem
        const newDiscountedPrice = Math.max(totalPrice - discount, 0);
        setDiscountedPrice(newDiscountedPrice);
      } else {
        setDiscountedPrice(totalPrice);
      }
    }, [usePoints, pointsToUse, totalPrice]);

    useEffect(() => {
      if (isDiscountChecked) {
        setPoinUsed(points); // Apply all points if checkbox is checked
      } else {
        setPoinUsed(0);
      }
    }, [isDiscountChecked, points]);
    
    
    
    
   
  

  useEffect(() => {
    
    
    if (selectedCustomer) {
      const selectedCustomerData = customer.find(c => 
        c.nocustomer.toString() === selectedCustomer.toString()
      );
      console.log("Selected Customer Data:", selectedCustomerData);
      
      if (selectedCustomerData) {
        setPoints(Number(selectedCustomerData.poin)); // Convert to number
      }
    }
  }, [selectedCustomer, customer]);
  
  

  

    useEffect(() => {
      const customerData = customer.find(c => c.nocustomer === selectedCustomer);
      console.log(customerData);  
    }, [selectedCustomer, customer]);
    
  
    
  
    // Fungsi untuk mengurangi poin di database
    const handleUsePoints = async () => {
      if (pointsToUse <= 0) {
        setError('Poin yang digunakan harus lebih dari 0.');
        return;
      }
  
      if (pointsToUse > points) {
        setError('Poin yang Anda gunakan melebihi poin yang dimiliki.');
        return;
      }
  
      try {
        // Kirim permintaan API untuk memperbarui poin di database
        const response = await fetch('/api/update-points', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nocustomer: selectedCustomer,
            pointsToUse,
          }),
        });
  
        if (response.ok) {
          // Update poin yang tersisa
          setPoints(prevPoints => prevPoints - pointsToUse);
          setPointsToUse(0); // Reset poin yang digunakan
          setError(''); // Clear error
          alert('Poin berhasil digunakan!');
        } else {
          setError('Terjadi kesalahan saat mengurangi poin.');
        }
      } catch (error) {
        setError('Terjadi kesalahan jaringan.');
      }
    };

    

    const handlePoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPoin = parseInt(e.target.value, 10);
      if (!isNaN(newPoin)) {
        setPoinUsed(newPoin);
      } else {
        setPoinUsed(0);
      }
    };
    
    


  
  const handleTotalPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPrice(Number(e.target.value));
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    
  const transactionData = {
    transaksi: {
      nocustomer: selectedCustomer,
      total_harga: totalPrice,
      discounted_price: discountedPrice,
      status_transaksi: transactionStatus,
      payment_method: paymentMethod,
      description: description,
      use_points: isDiscountChecked,               // Whether points are being used (boolean)
      points_used: isDiscountChecked ? points : 0, // If points are used, set the points used value
      points_earned: isDiscountChecked ? 0 : newpoin,
    },
    transaksi_menu: menuItems.map(item => ({
      menuId: item.menuId,
      quantity: item.quantity,
    })),
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

const selectedCustomerData = customer.find(
  c => c.nocustomer.toString() === selectedCustomer.toString()
);

  const customerPoints = selectedCustomerData ? selectedCustomerData.poin : 0; // Get the points from the selected customer


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
          <div>Points: {points}</div>
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
                  id= "menuId"
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
              </div>

              <div className="relative w-20">
                <input
                  id = "quantity"
                  type="number"
                  min="1"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  value={item.quantity}
                  onChange={(e) => handleMenuChange(index, 'quantity', +e.target.value)}
                />
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
            onClick={addMenuItem}
            className="text-blue-500 hover:text-blue-700"
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

        {/* Form untuk memilih apakah menggunakan poin */}
        <div>
        <label>
          Gunakan Poin:
          <input
            type="checkbox"
            name="use_points"
            id= "use_points"
            checked={isDiscountChecked}
            
            onChange={handleCheckboxChange}
          />
        </label>
        <div>Jumlah Poin yang Tersedia: {points}</div>
      </div>

      {/* Input Poin untuk jumlah poin yang ingin digunakan */}
      <div>
    <label htmlFor="poin" className="mb-2 block text-sm font-medium">
      Poin yang Digunakan
    </label>
    <input
      type="number"
      id="poin"
      name="poin"
      value={isDiscountChecked ? points : newpoin}  
      onChange={handlePoinChange}
       
      className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
    />
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
          value={totalPrice}
          onChange={handleTotalPriceChange}
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
        />
      </div>

        {/* Error & Success Messages */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}

        {/* Submit Button */}
        <div className="mt-12 flex justify-end gap-4">
          <Link
            href="/dashboard/transaksi"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Batal
          </Link>
          <Button
            className="items-center "
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
