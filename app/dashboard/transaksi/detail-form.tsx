'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TransaksiForm } from '@/app/lib/definitions';
import Button from '@/app/assets/button';
import { updateTransaksi } from '@/app/lib/actions';
import { MenuField, CustomerField, UsersField } from '@/app/lib/definitions';
import { fetchDtTransaksiById } from '@/app/lib/data';
import { fetchTransaksiMenuItems } from '@/app/lib/data';
import html2pdf from 'html2pdf.js';


export default  function Form({
  transaksi,
  menu,
  customer,
  users,
  
}: {
  transaksi: TransaksiForm;
  menu: MenuField[];
  customer: CustomerField[];
  users: UsersField[]; 
}) {
    interface MenuItem {
        no_menu: string;
        nama_menu: string;
        harga_menu: number;
        quantity: number;
      }
    const [formData, setFormData] = useState<TransaksiForm>({...transaksi,
        no_menu: transaksi.no_menu || '',
        quantity: transaksi.quantity || '',
        menuItems: transaksi.menuItems || []
    });
   
      
      
      
      
    const [namacustomer, setNamacustomer] = useState('');
    const [username, setUsername] = useState('');
    const [nama_menu, setNama_menu] = useState('');
    const updateTransaksiWithId = updateTransaksi.bind(null, transaksi.id_transaksi);
    const [menuItems, setMenuItems] = useState<{ no_menu: string; nama_menu: string; harga_menu: number; quantity: number }[]>([]);
    const DownloadIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    );
    const handleOnClick = (e: React.MouseEvent) => {
      e.preventDefault(); // Cegah perilaku default form jika tombol dalam form
      const element = document.getElementById('content-to-pdf'); // Pilih elemen yang ingin diunduh
      const options = {
        filename: 'invoice.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        margin: 10,
      };
      // Trigger download
      html2pdf().from(element).set(options).save();
    };
    

   
    

    useEffect(() => {
        // Pastikan menuItems adalah array (bukan undefined)
        const safeMenuItems = formData.menuItems ?? [];  // Jika undefined, gunakan array kosong
      
        if (safeMenuItems.length > 0) {
          setMenuItems(safeMenuItems); // Update state jika menuItems ada
          console.log('Menu Items yang di-fetch:', safeMenuItems);
        }
      }, [formData]);

    
      
      
      


      
  
  useEffect(() => {
    console.log('formData diubah:', formData);
  
    
    if (formData.nocustomer) {
      const selectedCustomerData = customer.find(
        (c) => c.nocustomer.toString() === formData.nocustomer.toString()
      );
      if (selectedCustomerData) {
        setNamacustomer(selectedCustomerData.namacustomer); // Set nama customer
        console.log('Nama Customer ditemukan:', selectedCustomerData.namacustomer);
      }
    }
  
    
    if (formData.id_user) {
      const selectedUserData = users.find((u) => u.id_user.toString() === formData.id_user.toString());
      if (selectedUserData) {
        setUsername(selectedUserData.username); 
      }
    }
  
    
    if (formData.no_menu) {
      const selectedMenuData = menu.find((m) => m.no_menu.toString() === formData.no_menu.toString());
      if (selectedMenuData) {
        setNama_menu(selectedMenuData.nama_menu); 
        console.log('Nama Menu ditemukan:', selectedMenuData.nama_menu);
      }
    }
  
    
    if (formData.menuItems && formData.menuItems.length > 0) {
      setMenuItems(formData.menuItems); 
      console.log('Menu Items yang di-fetch:', formData.menuItems);
    }
  }, [formData.nocustomer, formData.id_user, formData.no_menu, formData.menuItems, customer, users, menu]);
  
  console.log('Menu Items:', menuItems);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.tanggal_transaksi) {
      const formattedDate = new Date(formData.tanggal_transaksi).toISOString();
      formData.tanggal_transaksi = formattedDate; // Update formData
  }

  const formDataInstance = new FormData();
  for (const [key, value] of Object.entries(formData)) {
      formDataInstance.append(key, value as string);
  }

  updateTransaksiWithId(formDataInstance);
};

  return (
    <form onSubmit={handleSubmit}>
      <div id="content-to-pdf" >
      <div className="rounded-lg bg-white p-6 shadow-lg max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
    <div className="flex items-center">
      <img
        src="/favicon.ico" // Replace this with your logo's path
        alt="Logo"
        className="h-16 mr-4" // Adjust the height of the logo as needed
      />
      <h2 className="text-3xl font-semibold text-gray-800">Invoice</h2>
    </div>
    <p className="text-sm text-gray-600">Transaction ID: <span className="font-semibold">{formData.id_transaksi || 'Data not available'}</span></p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {/* Customer Info */}
    <div>
      <h3 className="text-lg font-semibold text-gray-950">Customer Details</h3>
      <p className="text-sm text-gray-950">Name: <span className="font-medium">{namacustomer || 'Data tidak tersedia'}</span></p>
      <p className="text-sm text-gray-950">Username: <span className="font-medium ">{username || 'Data tidak tersedia'}</span></p>
    </div>

    {/* Transaction Details */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Transaction Details</h3>
      <p className="text-sm text-gray-950">Date: <span className="font-medium">{formData.tanggal_transaksi ? new Date(formData.tanggal_transaksi).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}</span></p>
      <p className="text-sm text-gray-950">Payment Method: <span className="font-medium">{formData.metode_pembayaran || 'Data not available'}</span></p>
      <p className="text-sm text-gray-950">Status: <span className="font-medium">{formData.status_transaksi || 'Data not available'}</span></p>
    </div>
  </div>

  {/* Menu Section */}
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-950 mb-4">Ordered Items</h3>
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-yellow-300 text-left">
          <th className="py-2 px-4 text-sm font-medium text-gray-950">Menu Name</th>
          <th className="py-2 px-4 text-sm font-medium text-gray-950">Quantity</th>
          <th className="py-2 px-4 text-sm font-medium text-gray-950">Price</th>
          <th className="py-2 px-4 text-sm font-medium text-gray-950">Total</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.length > 0 ? menuItems.map((item, index) => (
          <tr key={index} className="border-t border-gray-100">
            <td className="py-2 px-4 text-sm text-gray-700">{item.nama_menu || 'Menu not found'}</td>
            <td className="py-2 px-4 text-sm text-gray-700">{item.quantity || 0}</td>
            <td className="py-2 px-4 text-sm text-gray-700">{parseFloat('1000000').toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
            {/* <td className="py-2 px-4 text-sm text-gray-700">{(parseFloat(item.harga_menu) * item.quantity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td> */}
            
          </tr>
        )) : (
          <tr>
            {/* <td colSpan="4" className="py-2 px-4 text-sm text-gray-500 text-center">No items found</td> */}
          </tr>
        )}
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-600">
  Points Used: <span className="font-medium">{formData.poindipakai ?? '0'}</span>
</p>

  {/* Total Price */}
  <div className="flex justify-between items-center bg-yellow-300 py-4 px-6 mb-6 rounded-lg">
    <p className="text-lg font-semibold text-gray-950">Total</p>
    <p className="text-xl font-bold text-gray-950">
      {formData.total_harga
        ? parseFloat(formData.total_harga.replace(/[^0-9,-]+/g, '').replace(',', '.')).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
        : 'Total harga tidak tersedia'}
    </p>
  </div>

  {/* Action Buttons */}
  <div className="flex justify-end gap-4" data-html2canvas-ignore>
    <Link
      href="/dashboard/transaksi"
      className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    >
      Back
    </Link>

    <button
  type="button" 
  onClick={handleOnClick}
  className="flex items-center px-4 py-2 bg-yellow-400 rounded-xl hover:bg-yellow-600"
>
  <DownloadIcon />
  <span className="ml-2">Download PDF</span>
</button>

    
  </div>
</div>
</div>

    </form>
  );
}
