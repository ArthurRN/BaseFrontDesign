import {createNativeStackNavigator} from '@react-navigation/native-stack'
import{ionicons } from '@expo/vector-icons'


import Report from '../pages/Report'
import Start from '../pages/Start'
import Login from '../pages/Login'
import StatisticsMap from '../pages/StatisticsMap'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import ChangeProfile from '../pages/ChangeProfile'

const Stack = createNativeStackNavigator();

export default function routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name ="Start"
                component={Start}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name ="StatisticsMap"
                component={StatisticsMap}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name ="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name ="Register"
                component={Register}
                options={{headerShown: false}}
            /> 
            <Stack.Screen
                name ="Report"
                component={Report}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name ="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name ="ChangeProfile"
                component={ChangeProfile}
                options={{headerShown: false}}
            />
        </Stack.Navigator>     
    )
}
