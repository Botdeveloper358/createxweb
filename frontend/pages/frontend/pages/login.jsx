import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://your-backend-url.onrender.com/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err) {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Login to CreateXWeb</h1>
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded font-bold hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
