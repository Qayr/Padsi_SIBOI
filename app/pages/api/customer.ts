// pages/api/customers.js
export default async function handler(req, res) {
    try {
      // Gantilah kode ini dengan logika untuk mendapatkan data dari database atau sumber lain
      const customers = [
        { nocustomer: 'C001', namacustomer: 'John Doe' },
        { nocustomer: 'C002', namacustomer: 'Jane Smith' }
      ];
      res.status(200).json(customers); // Mengirimkan data ke frontend
    } catch (error) {
      res.status(500).json({ message: 'Error fetching customers' });
    }
  }
  