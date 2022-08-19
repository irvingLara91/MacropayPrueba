import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/session/DashboardScreen";
const Stack = createNativeStackNavigator();



const StackLoginScreen = () => {
    return (<Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
            headerMode: 'none',
        }}>
        <Stack.Screen
            name={"LoginScreen"} component={LoginScreen} options={{
            headerShown: false,
            gestureEnabled: false,
        }}/>
    </Stack.Navigator>)
}


const StackDashboardScreen = () => {
    return (<Stack.Navigator
        initialRouteName="DashboardScreen"
        screenOptions={{headerMode: 'none'}}>
        <Stack.Screen
            name={"DashboardScreen"} component={DashboardScreen} options={{
            headerShown: false,
            gestureEnabled: false,
        }}/>
    </Stack.Navigator>)
};



export const NavigationLoginScreen = () => {
    return (<StackLoginScreen/>)
};

export const NavigationDashboardScreen = () => {
    return (
        <StackDashboardScreen/>
    )
};
