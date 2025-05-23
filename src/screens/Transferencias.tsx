import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useBank } from '../context/BankContext';

export default function Transferencias() {
  const { transferir } = useBank();
  const [cuenta, setCuenta] = useState('');
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');

  const handleTransferencia = () => {
    const cantidad = parseFloat(monto);
    if (isNaN(cantidad)) {
      Alert.alert('Error', 'Ingrese un monto válido');
      return;
    }

    const exito = transferir(cantidad);
    if (exito) {
      Alert.alert('Exito', 'Transferencia se realizo con exito');
      setCuenta('');
      setNombre('');
      setMonto('');
    } else {
      Alert.alert('Error', 'No cuenta con saldo suficiente');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Número de Cuenta:</Text>
      <TextInput style={styles.input} value={cuenta} onChangeText={setCuenta} keyboardType="numeric" />
      <Text>Nombre del Destinatario:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
      <Text>Monto a Transferir:</Text>
      <TextInput style={styles.input} value={monto} onChangeText={setMonto} keyboardType="numeric" />
      <Button title="Transferir Saldo" onPress={handleTransferencia} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
