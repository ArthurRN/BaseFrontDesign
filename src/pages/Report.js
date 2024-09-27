import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

const ReportScreen = () => {
  const [reportType, setReportType] = useState(''); // Tipo de denúncia
  const [description, setDescription] = useState(''); // Descrição
  const [fileUri, setFileUri] = useState(null); // URI do arquivo selecionado
  const [location, setLocation] = useState(null); // Localização
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      // Solicitar permissões de localização
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(status === 'granted');
      
      if (status === 'granted') {
        // Obter a localização atual
        const { coords } = await Location.getCurrentPositionAsync();
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      }
    };

    requestPermissions();
  }, []);

  // Função para abrir o seletor de imagens
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFileUri(result.uri);
    }
  };

  // Função para abrir a câmera
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFileUri(result.uri);
    }
  };

  // Função para enviar o relatório
  const submitReport = () => {
    if (!reportType || !description || !location) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos e defina a localização.');
      return;
    }
    
    console.log('Tipo de Denúncia:', reportType);
    console.log('Descrição:', description);
    console.log('Localização:', location);
    console.log('Arquivo:', fileUri);

    Alert.alert('Sucesso', 'Denúncia enviada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Denúncia</Text>

      <TextInput
        style={styles.input}
        placeholder="Tipo de Denúncia"
        value={reportType}
        onChangeText={setReportType}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Escolher Imagem da Galeria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>

      {fileUri && (
        <Image source={{ uri: fileUri }} style={styles.imagePreview} />
      )}

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location ? location.latitude : 37.78825, // Coordenadas iniciais
            longitude: location ? location.longitude : -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          onPress={(e) => setLocation(e.nativeEvent.coordinate)}
        >
          {location && (
            <Marker coordinate={location} />
          )}
        </MapView>
      </View>
          
      <TouchableOpacity style={styles.buttonReport} onPress={submitReport}>
        <Text style={styles.buttonReportText}>Enviar Denúncia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#faffff'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#4169e1',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginVertical: 16,
    borderRadius: 4,
  },
  mapContainer: {
    flex: 1,
    marginBottom: 16,
  },
  map: {
    flex: 1,
  },
  buttonReport: {
    backgroundColor: '#4169e1', // Verde para indicar sucesso
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonReportText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportScreen;