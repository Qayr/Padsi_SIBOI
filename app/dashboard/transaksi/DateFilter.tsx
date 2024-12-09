"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DateFilter() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  const handleFilter = () => {
    if (!startDate || !endDate) {
      alert("Harap masukkan tanggal awal dan akhir!");
      return;
    }

    // Redirect ke URL dengan query parameter
    router.push(`?startDate=${startDate}&endDate=${endDate}`);
  };

  return (
    <div className="mb-4 flex gap-4 items-center">
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Tanggal Awal
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
          Tanggal Akhir
        </label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        />
      </div>
      <button
        onClick={handleFilter}
        className="bg-yellow-300 hover:bg-yellow-500 text-black px-4 py-2 rounded text-sm"
      >
        Filter
      </button>
    </div>
  );
}
