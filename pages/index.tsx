
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Reclaim Your Inbox in One Click</h1>
        <p className="text-gray-700 text-lg mb-8">
          Mass-unsubscribe from unwanted emails and newsletters instantly.
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
