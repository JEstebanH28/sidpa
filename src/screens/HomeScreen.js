import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usar MaterialIcons para Android

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Acobarras</Text>
          <Text style={styles.userText}>Hola, Usuario</Text>
          <Text style={styles.dateText}>Día: 02/08/2023</Text>
          <Text style={styles.trmText}>TRM: $4.039,14</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Sección Anuncios */}
      <View style={styles.announcementSection}>
        <Text style={styles.sectionTitle}>Sección Anuncios</Text>
        <View style={styles.announcementBox}>
          <Text style={styles.announcementText}>Mantenimiento</Text>
          <Text style={styles.announcementText}>Cumpleaños</Text>
          <Text style={styles.announcementText}>Etc.</Text>
        </View>
      </View>

      {/* Sección de Áreas */}
      <ScrollView contentContainerStyle={styles.areasSection}>
        <View style={styles.areaBox}>
          <Icon name="build" size={40} color="#007BFF" />
          <Text style={styles.areaText}>Área 1</Text>
        </View>
        <View style={styles.areaBox}>
          <Icon name="people" size={40} color="#007BFF" />
          <Text style={styles.areaText}>Área 2</Text>
        </View>
        <View style={styles.areaBox}>
          <Icon name="business" size={40} color="#007BFF" />
          <Text style={styles.areaText}>Área 3</Text>
        </View>
        <View style={styles.areaBox}>
          <Icon name="school" size={40} color="#007BFF" />
          <Text style={styles.areaText}>Área 4</Text>
        </View>
      </ScrollView>

      {/* Menú Inferior de Navegación */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="calendar-today" size={24} color="#fff" />
          <Text style={styles.navText}>Visitas agendadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="visibility" size={24} color="#fff" />
          <Text style={styles.navText}>Caros Vista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="help" size={24} color="#fff" />
          <Text style={styles.navText}>Solicitud Soporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="science" size={24} color="#fff" />
          <Text style={styles.navText}>Laboratorios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#007BFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  userText: {
    fontSize: 18,
    color: '#fff',
  },
  dateText: {
    fontSize: 14,
    color: '#fff',
  },
  trmText: {
    fontSize: 14,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  announcementSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  announcementBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  announcementText: {
    fontSize: 16,
    marginBottom: 8,
  },
  areasSection: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  areaBox: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  areaText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomeScreen;
