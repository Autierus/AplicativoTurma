import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
    // Aqui você pode adicionar a lógica para mudar o tema do app
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Sobre o Staturma</Text>
        <Button title="Ir para Sobre" onPress={() => navigation.navigate('AboutScreen')} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo Escuro</Text>
        <Switch 
          value={isDarkMode} 
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'black', // Cor do título alterada para preto
  },
  settingItem: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 18,
    color: 'black', // Cor do texto das configurações alterada para preto
  },
});

export default SettingsScreen;
