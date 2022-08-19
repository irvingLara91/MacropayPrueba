import React, {useEffect, useRef, useState} from 'react';
import {useFonts} from "expo-font";
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {NavigationLoginScreen, NavigationDashboardScreen} from "./LayoutApp";
import LottieView from 'lottie-react-native';
import {connect} from "react-redux";

const Layout = (props) => {
    const animation = useRef(null);
    const [isReady, setIsReady] = useState(false);

    let [fontsLoaded] = useFonts({
        'SharpGroteskBook': require('../../assets/fonts/SharpGrotesk-Book20.otf'),
        'SharpGroteskMedium': require('../../assets/fonts/SharpGrotesk-Medium20.otf'),
    });
    useEffect(() => {

        setTimeout(()=>{
            animation.current?.play();
        },100)

    }, [])

    if (fontsLoaded && isReady) {
        return (
            <NavigationContainer>
                {
                    props.auth.loggedIn ?
                        <NavigationDashboardScreen/>
                        :
                       <NavigationLoginScreen/>
                }
            </NavigationContainer>
        );
    } else {
        return (
            <View style={styles.animationContainer}>
                <LottieView
                    loop={false}
                    onAnimationFinish={(a)=>{
                        setIsReady(true)
                    }}
                    ref={animation}
                    style={{
                        backgroundColor:'#0047ba'
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../../assets/sky.json')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});

const mapState =(state)=>{
    return{
        auth:state.auth
    }
}

export default connect(mapState)(Layout);