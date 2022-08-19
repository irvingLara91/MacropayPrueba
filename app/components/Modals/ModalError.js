
import React, {useState} from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Dimensions,
    Image, TouchableOpacity
} from "react-native";
const {width, height} = Dimensions.get('window');
import { MaterialIcons } from '@expo/vector-icons';


const ModalError = ({visible, setVisible, title = '¡Error!', text, isError = true}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView,{backgroundColor:'#0047ba'}]}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 50}}>
                            {isError ?
                                <MaterialIcons name="cancel" size={50} color={'white'} />
                                :
                                <MaterialIcons name="cancel" size={50} color={'white'} />
                            }
                        </View>
                        <Text style={[styles.modalTitle,{fontFamily: 'SharpGroteskBook',color:'white'}]}>{title}</Text>

                        <Text style={[styles.modalText, {marginBottom: 30, fontFamily: 'SharpGroteskBook',color:'white'}]}>{text}</Text>

                        <TouchableOpacity style={[styles.fbBtn,{backgroundColor:"#ffdd01"}]} onPress={() => {
                            setVisible(false)
                        }}>
                            <Text style={[styles.fbText,{color:'#0047ba',fontFamily: 'SharpGroteskBook'}]}>
                                Cerrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.53)',
        justifyContent: "center",
        alignItems: "center",
    },
    fbBtn: {
        width:height/3,
        height: 40,
        borderRadius: 10,
        marginTop: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    fbText: {
        fontSize: 14,
    },
    modalView: {
        margin: 20,
        width:'80%',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        //padding: 10,
        //elevation: 2
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",

    },
    modalTitle: {
        marginBottom: 5,
        textAlign: "center",
        fontSize: 20,
    }
});


export default ModalError;