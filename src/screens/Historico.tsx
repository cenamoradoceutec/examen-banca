import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useBank } from '../context/BankContext';

export default function Historico() {
  const { transacciones } = useBank();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de Transacciones</Text>
      <FlatList
        data={transacciones}
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
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});
