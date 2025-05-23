import React, { createContext, useContext, useState } from 'react';

type Transaccion = {
  id: number;
  tipo: 'Depósito' | 'Retiro' | 'Transferencia';
  monto: number;
  fecha: string;
};

type BankContextType = {
  saldo: number;
  transacciones: Transaccion[];
  depositar: () => void;
  retirar: () => void;
  transferir: (monto: number) => boolean;
};

const BankContext = createContext<BankContextType | undefined>(undefined);

export const BankProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [saldo, setSaldo] = useState(10000);
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

  const agregarTransaccion = (tipo: 'Depósito' | 'Retiro' | 'Transferencia', monto: number) => {
    const nueva = {
      id: Date.now(),
      tipo,
      monto,
      fecha: new Date().toLocaleString(),
    };
    setTransacciones(prev => [nueva, ...prev]);
  };

  const depositar = () => {
    setSaldo(prev => prev + 500);
    agregarTransaccion('Depósito', 500);
  };

  const retirar = () => {
    setSaldo(prev => prev - 200);
    agregarTransaccion('Retiro', 200);
  };

  const transferir = (monto: number): boolean => {
    if (monto <= saldo) {
      setSaldo(prev => prev - monto);
      agregarTransaccion('Transferencia', monto);
      return true;
    }
    return false;
  };

  return (
    <BankContext.Provider value={{ saldo, transacciones, depositar, retirar, transferir }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => {
  const context = useContext(BankContext);
  return context;
};