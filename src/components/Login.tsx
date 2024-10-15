import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

interface LoginProps {
  onSubmit: (username: string, password: string) => void;
  darkMode: boolean;
}

const Login: React.FC<LoginProps> = ({ onSubmit, darkMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <User className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
        <label htmlFor="username" className="font-medium">
          Username
        </label>
      </div>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
        required
      />
      <div className="flex items-center space-x-2">
        <Lock className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
        <label htmlFor="password" className="font-medium">
          Password
        </label>
      </div>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
        required
      />
      <button
        type="submit"
        className={`w-full py-2 rounded transition duration-200 ${
          darkMode
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Login
      </button>
    </form>
  );
};

export default Login;