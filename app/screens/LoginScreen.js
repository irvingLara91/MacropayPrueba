import React, {useEffect, useState} from "react";
import {Dimensions, Keyboard, LayoutAnimation, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import LoginForm from "../components/LoginForm/LoginForm";
import {emailRegEx, removeDataAsyncStorage} from "../utils/utils";
import ModalError from "../components/Modals/ModalError";
import {connect} from "react-redux";
import {loginAction} from "../redux/authDuck";

const {width,height} = Dimensions.get('window');

const LoginScreen =(props)=>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [justificante_login, setJustificante_login] = useState("center");
    const [term, setTerm] = useState(true);
    const [loading, setLoading] = useState(false)

    //Modal error
    const [modalVisible, setModalVisible] = useState(false)
    const [titleModal, setModalTitle] = useState('')
    const [messageModal, setModalMessage] = useState('')

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', keyboardWillShow);
        Keyboard.addListener('keyboardDidHide', keyboardWillHide);

    }, []);

    const keyboardWillShow = (e) => {
        LayoutAnimation.easeInEaseOut();
        setJustificante_login("flex-start")
    };

    const keyboardWillHide = (e) => {
        LayoutAnimation.easeInEaseOut();
        setJustificante_login("center")
    };


    const loginAction_=()=>{
        let msgs = [];
        let error = false;
        setLoading(true)

        if (email.trim() === "") {
            error = true;
            msgs.push("\n· Falta tu correo ");
        } else {
            if (!emailRegEx.test(email)) {
                error = true;
                msgs.push("\n· Correo inválido");
            }
        }
        if (pass.trim() === "") {
            error = true;
            msgs.push("\n\n· Falta tu contraseña");
        }

        if (error) {
            setLoading(false)
            setModalVisible(true)
            setModalTitle("Ups!")
            setModalMessage(msgs)
        }else {
            setLoading(false)
            let formData = new FormData();
            formData.append("email",email);
            formData.append("password",pass);
            props.loginAction(formData);
        }
    }

    return(
    <View
        style={{
            width: "100%",
            backgroundColor: "#0047ba",
            height: height + 29,
            zIndex: 20
        }}
    >
        <StatusBar
            animated={true}
            backgroundColor={"#0047ba"}
            barStyle={"light-content"}
        />
        <KeyboardAwareScrollView
            extraScrollHeight={25}
            enableOnAndroid={true}
            keyboardShouldPersistTaps='handled'>
            <View style={{height: Dimensions.get('window').height * .10}}/>
            <View style={{height: Dimensions.get('window').height * .01}}/>
            <View style={{width: Dimensions.get('window').width, alignItems: 'flex-end'}}></View>
            <LoginForm
                email={email} setEmail={setEmail} pass={pass} setPass={setPass}
                 justificante_login={justificante_login}
                 setTerm={setTerm} term={term}
                loginAction={loginAction_}
                loading={props.auth.fetching}
                 color={'#0047ba'} secondaryColor={'white'}
            />
            {
                modalVisible &&
                <ModalError visible={modalVisible}  setVisible={setModalVisible} title={titleModal}
                             text={messageModal}/>

            }
        </KeyboardAwareScrollView>
        </View>
    )
};

const mapState=(state)=>{
    return{
        auth:state.auth
    }
}


export default connect(mapState,{loginAction})(LoginScreen);