import { atom } from 'jotai';
import { z } from 'zod';
import * as jose from 'jose';

export const SecuritySchema = z.object({
  status: z.enum(['Active', 'Warning', 'Critical']),
  encryptionActive: z.boolean(),
  lastUpdate: z.date(),
  quantumSafeAlgorithm: z.enum(['Kyber', 'Dilithium', 'Falcon']),
});

type SecurityState = z.infer<typeof SecuritySchema>;

export const securityStateAtom = atom<SecurityState>({
  status: 'Active',
  encryptionActive: true,
  lastUpdate: new Date(),
  quantumSafeAlgorithm: 'Kyber',
});

export const encryptData = async (data: unknown): Promise<string> => {
  const secret = new TextEncoder().encode(
    'your-quantum-safe-secret-key'
  );
  
  const alg = 'HS256';
  const jwt = await new jose.SignJWT({ data })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);
  
  return jwt;
};

export const decryptData = async (token: string): Promise<unknown> => {
  const secret = new TextEncoder().encode(
    'your-quantum-safe-secret-key'
  );
  
  const { payload } = await jose.jwtVerify(token, secret);
  return payload.data;
};