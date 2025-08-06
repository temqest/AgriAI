"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const FOREST_GREEN = '#228B22';

export default function LogInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login (no backend)
    router.push('/dashboard');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-white ${inter.className}`}> 
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: FOREST_GREEN }}>
          Log In
        </h2>
        <p className="text-gray-600 mb-6 text-center">Access your AgriForecast dashboard</p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-base"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-base"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[${FOREST_GREEN}] text-white font-bold py-3 rounded-lg mt-2 hover:bg-green-800 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don’t have an account? </span>
          <button
            className="text-[${FOREST_GREEN}] font-semibold hover:underline focus:outline-none"
            onClick={() => router.push('/auth/sign-up')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}