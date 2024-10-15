import React, { useState } from 'react';
import { CreditCard, KeyRound, Lock, Unlock, Moon, Sun } from 'lucide-react';
import RFIDInput from './components/RFIDInput';
import Keypad from './components/Keypad';
import Login from './components/Login';

const allowedCards = ["08449914", "08018476", "08356868", "08430791"];
const correctPIN = "4321";

function App() {
  const [step, setStep] = useState<'login' | 'rfid' | 'pin' | 'result'>('login');
  const [rfid, setRFID] = useState('');
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Simple login logic (replace with actual authentication in a real app)
    if (username === 'admin' && password === 'password') {
      setStep('rfid');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRFIDSubmit = (code: string) => {
    setRFID(code);
    if (allowedCards.includes(code)) {
      setStep('pin');
    } else {
      alert('Invalid RFID card');
      setRFID('');
    }
  };

  const handlePINSubmit = (enteredPin: string) => {
    setPin(enteredPin);
    if (enteredPin === correctPIN) {
      setIsUnlocked(true);
      setStep('result');
      setTimeout(() => {
        setIsUnlocked(false);
        setStep('rfid');
        setRFID('');
        setPin('');
      }, 3000);
    } else {
      alert('Incorrect PIN');
      setPin('');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`p-8 rounded-lg shadow-md w-96 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">RFID Access System</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
          </button>
        </div>
        {step === 'login' && (
          <Login onSubmit={handleLogin} darkMode={darkMode} />
        )}
        {step === 'rfid' && (
          <RFIDInput onSubmit={handleRFIDSubmit} darkMode={darkMode} />
        )}
        {step === 'pin' && (
          <Keypad onSubmit={handlePINSubmit} darkMode={darkMode} />
        )}
        {step === 'result' && (
          <div className="text-center">
            <div className="text-6xl mb-4">
              {isUnlocked ? <Unlock className="mx-auto text-green-500" /> : <Lock className="mx-auto text-red-500" />}
            </div>
            <p className="text-xl font-semibold">
              {isUnlocked ? 'Access Granted' : 'Access Denied'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;