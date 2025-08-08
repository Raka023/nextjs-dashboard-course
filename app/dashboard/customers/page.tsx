import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Customer',
};

export default function Page() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">Customers Page</h2>
      <p className="opacity-85">This page is not implemented.</p>
      <Link 
        href="/dashboard" 
        className="mt-4 rounded-md bg-blue-400 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  )
}