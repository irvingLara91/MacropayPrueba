import React, {useEffect} from "react";
import {Platform, Text, View,StyleSheet} from "react-native";
import {statusBarHeight, textSizeRender} from "../../utils/utils";
import ToolbarHome from "../../components/Toolbars/ToolbarHome";
import {logOutAction} from "../../redux/authDuck";
import {connect} from "react-redux";
import {StatusBar} from "expo-status-bar";
import QRCode from "react-native-qrcode-svg";

const DashboardScreen =(props)=>{
    const go_LogOut = async ()=>{
        await props.logOutAction();
    }

     const getTokenHash = (token = null) => {
        if (token){
            let arrayType = token.split(".");
            let value = arrayType[arrayType.length - 3]
            return value;
        }else {
            return "hola"
        }

    }

    useEffect(()=>{
    },[])

    return( <View style={{
        flex:1,
        paddingTop: statusBarHeight + 50,
        backgroundColor:'#ffffff',
    }}>
        <StatusBar
            animated={true}
            backgroundColor={"#0047ba"}
            barStyle={"light-content"}
        />
        <ToolbarHome color={'#0047ba'} logOut={go_LogOut} auth={props.auth}/>
        <View style={{
            height:'100%',
            width:'100%',
        }}>
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                height:'30%',
                padding:10,
                width:'100%',
            }}>
                <View style={Platform.OS === "ios" ? styles.card_ios : styles.card_android}>
                    <Text style={{
                        textAlign:'center',
                        color:'#ffffff',
                        fontFamily:'SharpGroteskMedium',
                        fontSize:textSizeRender(6)
                    }}>{"Bienvenido\n"}</Text>
                    <Text style={{
                        color:'#ffffff',
                        textAlign:'center',
                        fontFamily:'SharpGroteskBook',
                        fontSize:textSizeRender(5)
                    }}>{props.auth.user.titular}</Text>
                </View>

            </View>

            <View style={{
                justifyContent:'center',
                alignItems:'center',
                height:'50%',
                width:'100%',
            }}>
                <View style={{
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center',
                    padding:10,
                    backgroundColor:'#ffdd01',
                    borderColor:'#ffdd01',
                    borderWidth:1
                }}>
                    <QRCode
                        color={"#0047ba"}
                        value={props.auth.user.token} size={textSizeRender(85)}/>
                    <View style={{marginTop:10}}>
                        <Text style={{
                            color:'#0047ba',
                            fontFamily:'SharpGroteskBook',
                            fontSize:textSizeRender(4)
                        }}>{getTokenHash(props.auth.user.token)}</Text>
                    </View>
                </View>

            </View>

        </View>
    </View>)
}
const styles = StyleSheet.create({
    card_ios: {
        width:'90%',
        height:'70%',
        padding:8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 14,
        backgroundColor: '#0047ba', ///this.props.app.color,
        elevation: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    card_android: {
        height:'70%',
        width:'100%',
        padding:8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 14,
        backgroundColor: '#0047ba', ///this.props.app.color,
        elevation: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
})

const mapState = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapState, { logOutAction })(DashboardScreen);
