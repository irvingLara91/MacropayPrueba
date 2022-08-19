
import {Text, TouchableOpacity, View} from "react-native";
import {statusBarHeight, textSizeRender} from "../../utils/utils";
import {AntDesign} from "@expo/vector-icons";
import React from "react";


const ToolbarHome = (props) => {

    return (
        <View style={{width: '100%', zIndex: 2, position: 'absolute'}}>
            <View
                style={{
                    height: statusBarHeight + 50,
                    backgroundColor: props.color,
                    flexDirection: 'row',
                    paddingTop: statusBarHeight - 5,
                    shadowColor: '#1a1a1a',
                    shadowOffset: {width: 1, height: 1},
                    shadowRadius: 2,
                    shadowOpacity: 0.15,
                    zIndex: 1111,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        flx: 1,
                        paddingLeft: 18,
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end'
                    }}>

                    <AntDesign name="left" size={textSizeRender(6)} color={props.color}/>
                </View>

                <View style={{
                    flex:1
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontFamily:'SharpGroteskBook',
                        fontSize: textSizeRender(5),
                        color: 'white',
                        textAlign: 'center',
                    }}>{"Dashboard"}</Text>
                </View>

                <View style={{
                    paddingRight: 18
                }}>
                    <TouchableOpacity
                        onPress={() =>
                        {
                            props.auth.loggedIn  &&  props.logOut()
                        }}
                        style={{
                            flx: 1,
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end'
                        }}>
                        <AntDesign name="login" size={textSizeRender(6)} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
};
export default ToolbarHome;
