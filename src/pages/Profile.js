import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";


export default function Welcome(){
    const navigation = useNavigation()
    return(
        <View style={Styles.conteiner}>
            <View style={Styles.conteinerProfile}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/perfil.png')}
                style={{width:'100%'}}
                resizeMode="contain"
                />
            </View>

            <Animatable.View delay={200} animation='fadeInUp' style={Styles.conteinerForms}>
                <Text style={Styles.title}>Nome: Fulano de tal</Text>
                <Text style={Styles.title}>EMAIL: algumacoisa@gmail.com</Text>
                <Text style={Styles.title}>CPF: 000.000.000.00</Text>
                <Text style={Styles.title}>SENHA: **********</Text>

                <TouchableOpacity style={Styles.Button1} onPress={()=>navigation.navigate('ChangeProfile')}>
                <Text style={Styles.ButtonText}>Alterar Dados</Text>
                </TouchableOpacity>

            </Animatable.View>
            <Animatable.View
                delay={200}
                animation='fadeInUp'
                style={Styles.containerForms}
            >
                <TouchableOpacity
                    style={[Styles.button, Styles.button1]}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={Styles.buttonText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[Styles.button, Styles.button2]}
                    onPress={() => navigation.navigate('Start')}
                >
                    <Text style={Styles.buttonText}>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[Styles.button, Styles.button3]}
                    onPress={() => navigation.navigate('StatisticsMap')}
                >
                    <Text style={Styles.buttonText}>Dados</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[Styles.button, Styles.button4]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={Styles.buttonText}>Denunciar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}


const Styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#faffff",
        marginTop:10
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: '10%',
        marginBottom: -30,
        marginLeft:20
    },
    Button1:{
        backgroundColor: '#4169e1',
        width:'35%',
        paddingVertical:10,
        marginTop:45,
        borderRadius:20,
        marginLeft:'5%',
        marginBottom:'60%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
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
