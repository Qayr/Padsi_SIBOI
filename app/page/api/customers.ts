// /pages/api/customers.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { createPool } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const pool = createPool({
      connectionString: process.env.POSTGRES_URL,
    });

    let client;
    try {
      client = await pool.connect();

      // Query to fetch all customers
      const result = await client.query('SELECT nocustomer, name FROM customer');
      res.status(200).json(result.rows); // Return customers as JSON response
    } catch (error) {
      console.error('Error fetching customers:', error);
      res.status(500).json({ message: 'Error fetching customers' });
    } finally {
      if (client) {
        client.release();
      }
      pool.end();
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Only allow GET requests
  }
}
