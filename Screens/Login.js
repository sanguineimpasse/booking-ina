import { ToastAndroid, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const myUsername = 'user';
    const myPassword = 'pass12345';

    const handleLogin = () => {
        if(username == myUsername && password == myPassword){
            loginRedirect(username);
        }
        else{
            displayToast('Incorrect username or password');
        }
    }

    function loginRedirect(user) {
        displayToast(`Welcome, ${user}!`);
        setTimeout(() => {
            navigation.navigate('HomeStack');
        }, 1000);
    };

    function displayToast(str) {
        ToastAndroid.show(str, ToastAndroid.SHORT);
    }
    
    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <Image 
                    source={require('../assets/square.png')}
                    style={styles.appIcon}
                />
                <Text style={styles.pageTitle}>Login</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="username"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={styles.formInput}
                    placeholder="password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <View style={styles.spacer}/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> handleLogin()}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 3,
                        marginTop: 20
                    }}
                >
                    <Text>
                        Don't have an account? 
                    </Text>
                    <TouchableOpacity  >
                        <Text style={{color: '#865a5a'}}>
                            Sign up.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#D2C1C1',
    },
    container:{
        height: '100%',
        marginTop: 80,
        alignItems: 'center',
    },
    appIcon:{
        height: 100,
        width: 100
    },
    pageTitle:{
        fontSize: 30,
        marginTop: 50,
        marginBottom: 50
    },
    spacer:{
        marginTop: 100
    },
    formInput:{
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        borderColor: 'black',
        width: '80%'
    },
    button:{
        backgroundColor: '#865a5a',
        width: '80%',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8
    },
    buttonText:{
        color: 'white',
        fontSize: 17
    }
});