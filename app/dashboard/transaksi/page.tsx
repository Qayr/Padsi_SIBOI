import React from 'react';
import Search from '@/app/assets/search';
import Table from './table';
import Pagination from './pagination';
import { Suspense } from 'react';
import { fetchTransaksiPages } from '@/app/lib/data';
import { poppins } from '@/app/assets/fonts';
import { Metadata } from 'next';
import { CreateTransaksi } from './buttons';
// import { TransaksiTableSkeleton } from '@/app/dashboard/skeleton';

export const metadata: Metadata = {
  title: 'Transaksi',
};

export default async function menuPage(
  props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  const totalPages = await fetchTransaksiPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Transaksi</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search user..." />
        <CreateTransaksi />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<TransaksiTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <Table query={query} currentPage={currentPage} searchParams={searchParams} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
