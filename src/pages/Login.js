import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation()
    return(
        <View style={Style.container}>
            <Animatable.View animation="fadeInLeft" style={Style.containerHeader}>
                <Text style={Style.message}>LOGIN</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={Style.containerForm}>
                <Text style={Style.title}>Insira seu Email ou CPF</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>

                <Text style={Style.title}>Insira sua senha</Text>
                <TextInput placeholder=" " style={Style.input}></TextInput>
            </Animatable.View>

            <TouchableOpacity style={Style.ButtonLogin} onPress={()=>navigation.navigate('Report')}>
                <Text style={Style.ButtonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.ButtonRegister} onPress={()=>navigation.navigate('Register')}>
                <Text style={Style.ButtonTextRegister}>Não possui conta? Cadastre-se aqui</Text>
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
        fontSize:20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    ButtonLogin:{
        backgroundColor: '#4169e1',
        width:'60%',
        paddingVertical:16,
        marginTop:10,
        borderRadius:20,
        marginLeft:'20%',
        marginBottom:'30%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        
    },
    ButtonText:{
        color: 'white',
        fontSize:18,
        alignSelf:'center',
        alignItems:'center',
    },
    ButtonRegister:{
        backgroundColor:'#4169e1',
        height:'8%',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        alignItems: 'center',
    },
    ButtonTextRegister:{
        alignItems:'center',
        paddingTop:'5%',
        color:'white'
    }
})