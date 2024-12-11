// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    // id: '410544b2-4001-4271-9855-fec4b6a6442a',
    // name: 'User',
    // email: 'user@nextmail.com',
    // password: '123456',
    id:'5',
    username:'admin',
    password:'admin123',
    nama:'Qayro',
    alamat:'Jl. Pisang No.21',
    email:'admin@coba.com',
    nomortelepon:'081234555890'

  },
  {
    id:'3',
    username:'owner1',
    password:'ownernihdeck',
    nama:'Jane Doe',
    alamat:'Jl. Mangga No.32',
    email:'owner@Kmail.com',
    nomortelepon:'084587667891'
  },
];

const customer = [
  {
    nocustomer: '19',
    namacustomer:'Budi Santoso',
    poin: '0',
    // alamatcustomer:'Jl. Mawar No.1',
    // poin:'10',
    // nomortelepon:'081234567890'
  },
  {
    nocustomer: '16',
    namacustomer:'Budiawan',
    poin : '2000',
    // alamatcustomer:'Jl. tawar No.1',
    // poin:'0',
    // nomortelepon:'081234867890'
  },
  {
    nocustomer: '66',
    namacustomer:'Budi Siregar',
    alamatcustomer:'Jl. Mawar No.1',
    poin:'10',
    nomortelepon:'081234567890'
  },
  // {
  //   id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  //   name: 'Michael Novotny',
  //   email: 'michael@novotny.com',
  //   image_url: '/customers/michael-novotny.png',
  // },
  // {
  //   id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
  //   name: 'Amy Burns',
  //   email: 'amy@burns.com',
  //   image_url: '/customers/amy-burns.png',
  // },
  // {
  //   id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
  //   name: 'Balazs Orban',
  //   email: 'balazs@orban.com',
  //   image_url: '/customers/balazs-orban.png',
  // },
];

const transaksi = [
  {
    id_transaksi:'1',
    no_customer: '2',
    id_user:'1',
    tanggal_transaksi:'2024-11-19',
    total_harga:'55000',
    status_transaksi:'pending',
    metode_pembayaran:'e-wallet',
    keterangan:'Pesanan Meja 2',
    no_menu: '1',
    poindipakai:'1000',
    newpoin:'1210',
    nama_menu: 'ayam kemangi',
    quantity: '1',
  }
]

// const invoices = [
//   {
//     customer_id: customer[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customer[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customer[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customer[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customer[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customer[2].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customer[0].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customer[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customer[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customer[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customer[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customer[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customer[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customer,  revenue, transaksi };
