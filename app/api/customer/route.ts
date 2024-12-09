import { NextResponse } from 'next/server';
import { Pool } from '@vercel/postgres';  // Pastikan Anda sudah menginstal '@vercel/postgres'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Menggunakan variabel lingkungan untuk koneksi
});

export async function GET() {
  try {
    // Query untuk mengambil nocustomer dan namacustomer dari tabel customer
    const res = await pool.query(
      'SELECT nocustomer, namacustomer FROM customer'
    );

    const customers = res.rows;  // Menyimpan hasil query

    // Mengembalikan data customer dalam format JSON
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ message: 'Error fetching customers' }, { status: 500 });
  }
}
