import { importTdCsv } from "tx-normalizer";

export async function normalizeFromUploadedFile(file: File) {
  const csvString = await file.text();
  return importTdCsv(csvString);
}
