import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation()
    return(
        <View style={Style.container}>
            <Animatable.View animation="fadeInLeft" style={Style.containerHeader}>
                <Text style={Style.message}>CADASTRO</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={Style.containerForm}>
                <Text style={Style.title}>Insira seu email</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>

                <Text style={Style.title}>Insira seu nome</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>

                <Text style={Style.title}>Insira seu CPF(Opcional)</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>

                <Text style={Style.title}>Senha</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>

                <Text style={Style.title}>Confirme sua senha</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>
            </Animatable.View>

            <TouchableOpacity style={Style.ButtonLogin} onPress={()=>navigation.navigate('Report')}>
                <Text style={Style.ButtonText}>Cadastrar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#faffff"
    },
    containerHeader:{
        marginTop: '16%',
        marginBottom: '8%',
        paddingStart: '5%',
        alignItems:'center'
    },
    message:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'fff'
    },

    containerForm:{
        backgroundColor: '#faffff',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'10%',
        paddingEnd:'10%'
    },
    title:{
        fontSize:15,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 5,
        fontSize: 16
    },
    ButtonLogin:{
        backgroundColor: '#4169e1',
        width:'100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical:16,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    ButtonText:{
        color: 'white',
        fontSize:18,
        alignSelf:'center',
        alignItems:'center',
    
    }
})