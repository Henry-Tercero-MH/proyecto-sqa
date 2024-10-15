import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface RFIDInputProps {
  onSubmit: (code: string) => void;
  darkMode: boolean;
}

const RFIDInput: React.FC<RFIDInputProps> = ({ onSubmit, darkMode }) => {
  const [rfidCode, setRfidCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rfidCode.length === 8) {
      onSubmit(rfidCode);
    } else {
      alert('RFID code must be 8 characters long');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <CreditCard className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
        <label htmlFor="rfid" className="font-medium">
          Scan RFID Card
        </label>
      </div>
      <input
        type="text"
        id="rfid"
        value={rfidCode}
        onChange={(e) => setRfidCode(e.target.value)}
        placeholder="Enter RFID code"
        className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
        maxLength={8}
      />
      <button
        type="submit"
        className={`w-full py-2 rounded transition duration-200 ${
          darkMode
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default RFIDInput;