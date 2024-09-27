import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

const App = () => {
  const [location, setLocation] = useState(null); 
  const [currentScreen, setCurrentScreen] = useState('screen1');
  const navigation = useNavigation();

  useEffect(() => {
    // Função para solicitar permissões de localização
    const requestLocationPermissionsAsync = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
          const position = await getCurrentPositionAsync();
          setLocation(position);
        } else {
          console.log('Permissão de localização não concedida');
        }
      } catch (error) {
        console.error('Erro ao obter localização:', error);
      }
    };

    // Alterar a tela após 700 millisegundos
    const timer = setTimeout(() => {
      setCurrentScreen('screen2');
    }, 700);

    // Solicitar permissões de localização quando mudar para a tela 2
    if (currentScreen === 'screen2') {
      requestLocationPermissionsAsync();
    }

    // Limpar o timer quando não for usado
    return () => clearTimeout(timer);
  }, [currentScreen]);

  return ( 
    <View style={styles.container1}>
      {currentScreen === 'screen1' && (
        <View style={styles.screen1}>
          <Image style={styles.logo} source={require('../../assets/logo2.png')} />
          <Text style={styles.text}>PROTOTIPO v2</Text>
        </View>
      )}
      {currentScreen === 'screen2' && (
        <View style={styles.screen2}>
          {location && (
            <MapView
              style={styles.MapView}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
            />
          )}
          <Animatable.View
            delay={200}
            animation='fadeInUp'
            style={styles.containerForms}
          >
            <TouchableOpacity
              style={[styles.button, styles.button1]}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.button2]}
              onPress={() => navigation.navigate('Start')}
            >
              <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.button3]}
              onPress={() => navigation.navigate('StatisticsMap')}
            >
              <Text style={styles.buttonText}>Dados</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.button4]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Denunciar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MapView: {
    flex: 1,
    width: '100%',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#faffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2: {
    flex: 1,
    width: '100%',
    backgroundColor: '#4169e1',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 24,
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 20,
  },
  containerForms: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginBottom: 0,
    marginTop: 0,
},
button: {
    flex: 1,
    marginHorizontal: 0,
    padding: 15,
    borderRadius: 0,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  button1: {
    backgroundColor: '#4169e1',
  },
  button2: {
    backgroundColor: '#4169e1',
  },
  button3: {
    backgroundColor: '#4169e1',
  },
  button4: {
    backgroundColor: '#4169e1',
  },
  buttonText: {
    color: 'white', // Cor do texto dos botões
    fontSize: 10, // Tamanho da fonte do texto dos botões
  },
});

export default App;