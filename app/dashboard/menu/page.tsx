import React from 'react';
import Search from '@/app/assets/search';
import Table from './table';
import Pagination from './pagination';
import { Suspense } from 'react';
import { fetchMenuPages } from '@/app/lib/data';
import { poppins } from '@/app/assets/fonts';
import { Metadata } from 'next';
import { CreateMenu } from '@/app/dashboard/menu/button';
import { MenuTableSkeleton } from '@/app/dashboard/skeleton';

export const metadata: Metadata = {
  title: 'Menu',
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

  const totalPages = await fetchMenuPages(query);
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Menu</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search montir..." />
        <CreateMenu />
      </div>
      <Suspense key={query + currentPage} fallback={<MenuTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
