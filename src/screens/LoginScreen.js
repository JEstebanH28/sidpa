import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!username || !password) {
        return;
      }
      e.preventDefault();
    });
    return unsubscribe;
  }, [navigation, username, password]);

  const handleLogin = () => {
    if (username === 'esteban' && password === '123') {
      Alert.alert('Éxito', 'Sesión iniciada correctamente');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f5f5f5' }}>
      <View style={{ width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 }, shadowRadius: 10, elevation: 5 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Bienvenido</Text>
        <Image source={require('../assets/img/acobarras/login/sidpa.gif')} style={{ width: 255, height:60, marginBottom: 20 }} />
        
        <TextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 10,
            borderRadius: 5,
            fontSize: 16,
            backgroundColor: '#fff',
          }}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 10,
            borderRadius: 5,
            fontSize: 16,
            backgroundColor: '#fff',
          }}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#007BFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 16,
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Entrar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default LoginScreen;
