"use client";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> Swahili Loop
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600">Nyumba</Link>
          <Link href="/profile" className="px-4 py-2 bg-blue-600 text-white rounded-full">Profaili</Link>
        </div>
      </div>
    </nav>
  );
}
