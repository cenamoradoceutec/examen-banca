
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { BankProvider } from './src/context/BankContext';

export default function App() {
return (
<BankProvider>
  <AppNavigator />
</BankProvider>
);
}
