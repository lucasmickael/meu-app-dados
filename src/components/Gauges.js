import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

export default function Gauges({ temp, hum }) {
  return (
    <View style={styles.row}>
      <View style={styles.gaugeBox}>
        <Progress.Circle
          size={120}
          progress={temp / 100}
          showsText={false}
          color={'#E74C3C'}
          unfilledColor={'#2C3E50'}
          borderWidth={0}
          thickness={8}
        />
        <Text style={styles.value}>{temp.toFixed(1)}°C</Text>
        <Text style={styles.label}>Temperatura</Text>
      </View>

      <View style={styles.gaugeBox}>
        <Progress.Circle
          size={120}
          progress={hum / 100}
          showsText={false}
          color={'#3498DB'}
          unfilledColor={'#2C3E50'}
          borderWidth={0}
          thickness={8}
        />
        <Text style={styles.value}>{hum.toFixed(1)}%</Text>
        <Text style={styles.label}>Umidade</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  gaugeBox: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '48%',
  },
  value: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  label: {
    color: '#AAA',
    marginTop: 4,
    fontSize: 14,
  },
});