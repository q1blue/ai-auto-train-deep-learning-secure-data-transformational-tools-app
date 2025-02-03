import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key } from 'lucide-react';

const SecurityPolicy = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-4">Quantum Security Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 border rounded-lg">
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Quantum-Safe Encryption</h2>
            <p className="text-gray-600">
              All data is protected using post-quantum cryptographic algorithms.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <Lock className="w-8 h-8 text-green-600 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Self-Healing Security</h2>
            <p className="text-gray-600">
              Automatic threat detection and response mechanisms.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <Key className="w-8 h-8 text-yellow-600 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Access Control</h2>
            <p className="text-gray-600">
              Fine-grained permissions and role-based access control.
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Privacy Policy</h2>
          <p>
            Our quantum-safe security measures ensure the highest level of data protection:
          </p>
          <ul>
            <li>End-to-end encryption using post-quantum algorithms</li>
            <li>Regular security audits and updates</li>
            <li>Secure key distribution and management</li>
            <li>Privacy-preserving computation techniques</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SecurityPolicy;