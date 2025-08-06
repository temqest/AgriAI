"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const FOREST_GREEN = '#228B22';

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign up (no backend)
    router.push('/auth/log-in');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-white ${inter.className}`}> 
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: FOREST_GREEN }}>
          Create your account
        </h2>
        <p className="text-gray-600 mb-6 text-center">Sign up to get started</p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-base"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-base"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[${FOREST_GREEN}] text-white font-bold py-3 rounded-lg mt-2 hover:bg-green-800 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            className="text-[${FOREST_GREEN}] font-semibold hover:underline focus:outline-none"
            onClick={() => router.push('/auth/log-in')}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}