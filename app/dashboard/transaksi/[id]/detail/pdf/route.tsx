import Form from '../../../detail-form';
import Breadcrumbs from '../../../breadcrumbs';
import { fetchTransaksiById,fetchCustomers, fetchMenu,fetchUsers, fetchDtTransaksiById } from '@/app/lib/data';
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  
  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
  const customer = await fetchCustomers();
  const menu = await fetchMenu();
  const users = await fetchUsers();
  const [transaksi] = await Promise.all([fetchTransaksiById(id)]);
  const [dtTransaksi] = await Promise.all ([fetchDtTransaksiById(id)]);

  ReactPDF.renderToStream(<MyDocument />);
  
  return Response.json({
        transaksi
    }) 
    
}