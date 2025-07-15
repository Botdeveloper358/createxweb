import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">CreateXWeb</h1>
      <p className="text-xl mb-8">Professional Website Maker For Everyone</p>
      <div className="space-x-4">
        <Link href="/register">
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-300">
            Get Started
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 border border-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
