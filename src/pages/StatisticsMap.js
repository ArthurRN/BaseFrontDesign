import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Statistics({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Statistics</Text>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz com que o View ocupe toda a tela
    },
    title: {
        // Adicione estilos para o título, se necessário
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
        color: 'white',
        fontSize: 10,
    },
});