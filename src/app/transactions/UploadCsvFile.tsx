"use client";

import React from "react";
import { importTdCsv } from "tx-normalizer";

export type UploadCsvResult = ReturnType<typeof importTdCsv>;

type UploadCsvButtonProps = {
  onUpload: (data: UploadCsvResult) => void;
};

export default function UploadCsvButton({ onUpload }: UploadCsvButtonProps) {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    const normalized = importTdCsv(text); // typed as UploadCsvResult

    onUpload(normalized);
  };

  return (
    <label className="cursor-pointer text-sm px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-md">
      Upload CSV
      <input type="file" accept=".csv" className="hidden" onChange={handleChange} />
    </label>
  );
}
