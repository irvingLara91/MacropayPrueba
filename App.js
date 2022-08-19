import {StatusBar} from 'expo-status-bar';
import { View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Layout from "./app/containers/Layout";
import {Provider} from "react-redux";
import generateStore from './app/redux/store';
const store = generateStore();

const App = (props) => {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <View style={{flex: 1}}>
                    <StatusBar style="auto"/>
                    <Layout/>
                </View>
            </NativeBaseProvider>
        </Provider>
    );
}
export default App;
