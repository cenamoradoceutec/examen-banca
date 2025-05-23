import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useBank } from '../context/BankContext';

export default function Inicio() {
  const { saldo, depositar, retirar, transacciones } = useBank();

  const ultimas = transacciones.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.saludo}>¡Bienvenido a tu banca móvil!</Text>
      <Text style={styles.saldo}>Saldo Actual: L. {saldo.toLocaleString()}</Text>
      <Button title="Depósito" onPress={depositar} />
      <Button title="Retiro" onPress={retirar} />
      <Text style={styles.historial}>Últimas Transacciones:</Text>
      <FlatList
        data={ultimas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.tipo} - L. {item.monto} - {item.fecha}</Text>
        )}
        ListEmptyComponent={<Text>No hay transacciones disponibles</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  saludo: { fontSize: 20, marginBottom: 10 },
  saldo: { fontSize: 18, marginBottom: 10 },
  historial: { marginTop: 20, fontWeight: 'bold' },
});
