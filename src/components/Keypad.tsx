import React, { useState } from 'react';
import { KeyRound } from 'lucide-react';

interface KeypadProps {
  onSubmit: (pin: string) => void;
  darkMode: boolean;
}

const Keypad: React.FC<KeypadProps> = ({ onSubmit, darkMode }) => {
  const [pin, setPin] = useState('');

  const handleKeyPress = (key: string) => {
    if (pin.length < 4) {
      setPin(pin + key);
    }
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      onSubmit(pin);
    } else {
      alert('PIN must be 4 digits');
    }
  };

  const handleClear = () => {
    setPin('');
  };

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <KeyRound className={darkMode ? 'text-green-400' : 'text-green-500'} />
        <label htmlFor="pin" className="font-medium">
          Enter PIN
        </label>
      </div>
      <input
        type="password"
        id="pin"
        value={pin}
        readOnly
        className={`w-full p-2 border rounded text-center text-2xl ${
          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
        }`}
        placeholder="****"
      />
      <div className="grid grid-cols-3 gap-2">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className={`p-3 rounded transition duration-200 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleClear}
          className={`flex-1 py-2 rounded transition duration-200 ${
            darkMode
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className={`flex-1 py-2 rounded transition duration-200 ${
            darkMode
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Keypad;