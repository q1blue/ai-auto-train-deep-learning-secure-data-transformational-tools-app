import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useAtom } from 'jotai';
import { securityStateAtom } from '../store/security';

const TopBar = () => {
  const [securityState] = useAtom(securityStateAtom);

  return (
    <div className="bg-white h-16 px-6 flex items-center justify-between border-b">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">
          Quantum Security Status: {securityState.status}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs ${
          securityState.encryptionActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {securityState.encryptionActive ? 'Encrypted' : 'Unencrypted'}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;