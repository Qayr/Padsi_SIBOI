// import React, { useState, useEffect } from 'react';
import Search from '@/app/assets/search';
import Table from './table';
import Pagination from './paginatio';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
import { poppins } from '@/app/assets/fonts';
import { Metadata } from 'next';
import { CreateCustomer } from './buttons';
import { CustomersTableSkeleton } from '../skeleton';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function customersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomersPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl `}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      {/* <Suspense fallback={<loadingCustomersSkeleton />}></Suspense> */}
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table query={query} CurrentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
