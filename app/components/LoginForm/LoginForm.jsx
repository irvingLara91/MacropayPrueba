import React from "react";
import {ActivityIndicator, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
const {width,height} = Dimensions.get('window');
import {AntDesign} from "@expo/vector-icons";
import {darkerHex, textSizeRender} from "../../utils/utils";
import {Checkbox} from "native-base";

const LoginForm =(props)=>{

   return(<View
        style={{
            height: height * .65,
            marginHorizontal: width * .02,
            justifyContent: props.justificante_login,
            paddingHorizontal: 10,
        }}
    >
        <View style={{
            width: '100%',
            paddingHorizontal: 0,
            marginBottom: '10%'
        }}>
            <View style={{width: '12%', height: 4, backgroundColor: darkerHex("#ffdd01", 1)}}/>
            <Text style={{
                marginTop:10,
                color: "white",
                fontFamily: "SharpGroteskBook",
                fontSize: textSizeRender(7.3),
            }}>{'Ingresa tus\ncredenciales.'}</Text>
        </View>
        <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#08082F"
            autoCapitalize="none"
            onChangeText={(text) => props.setEmail(text)}
            value={props.email}
            keyboardType="email-address"
            underlineColorAndroid={'transparent'}
        />


        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#08082F"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(text) => props.setPass(text)}
            value={props.pass}
            keyboardType="default"
            underlineColorAndroid={'transparent'}
        />

           <View style={{
               paddingHorizontal: 15,
               paddingVertical: 18,
               flexDirection: 'row',
               alignItems: 'center'
           }}>
               <Checkbox
                   colorScheme={"blue"}
                   aria-label="check"
                   size="md"
                   value={props.term}
                   onChange={va => props.setTerm(va)}
                   defaultIsChecked={props.term}
               />
               <TouchableOpacity onPress={() => {
                  // props.setVisibleTerm(true)
               }}>
                   <Text style={{
                       marginLeft: 10,
                       fontSize: textSizeRender(3),
                       color: 'white', fontFamily: "SharpGroteskBook"
                   }}>
                       {'Estoy de acuerdo con los Términos y condiciones'}
                   </Text>
               </TouchableOpacity>

           </View>

           <View style={{flexDirection: 'row'}}>
               <View style={{flex: 1, marginTop: 5}}>
                   <TouchableOpacity
                       disabled={props.loading ? props.loading : !props.term}
                       onPress={() => {
                          props.loginAction()
                       }
                       }
                       style={{
                           width: "100%",
                           height: 54,
                           borderRadius: 2,
                           flexDirection: 'row',
                           alignItems: 'center',
                           backgroundColor: props.loading ? '#969696' : !props.term ? '#969696' : '#ffdd01'
                       }}>
                       <View style={{flex: 1, marginLeft: 20}}>
                           {
                               props.loading ?
                                   <View style={{flexDirection: 'row'}}>
                                       <ActivityIndicator style={{marginRight: 5}} size="small" color={'white'}/>
                                       <Text style={{
                                           color: '#ffffff',
                                           fontSize: textSizeRender(3.5),
                                           fontFamily: "SharpGroteskBook"
                                       }}>
                                           {'Por favor espere un momento...'}
                                       </Text>
                                   </View>

                                   :
                                   <Text style={{
                                       color: props.loading ? '#ffffff' : !props.term ? '#ffffff' : props.color,
                                       fontSize: textSizeRender(3.5),
                                       fontFamily: "SharpGroteskBook"
                                   }}>
                                       Ingresar
                                   </Text>
                           }

                       </View>
                       <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
                           <AntDesign name="right" size={24}
                                      color= {props.loading ? '#ffffff' : !props.term ? '#ffffff' : props.color}/>
                       </View>
                   </TouchableOpacity>
               </View>
           </View>
    </View>
)
}

const styles = StyleSheet.create({
        input: {
            marginTop: 8,
            marginBottom: 8,
            alignItems: 'center',
            paddingHorizontal: 15,
            width: "100%",
            height: 54,
            color: "black",
            borderColor: "rgba(0,0,0,.5)",
            borderWidth: 1,
            backgroundColor: "white",
            borderRadius: 3
        },
    }
);

export default LoginForm