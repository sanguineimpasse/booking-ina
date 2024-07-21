import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Menu = () => {
    const navigation = useNavigation();

    const handleLogout = ()=> {
        navigation.navigate('LoginStack');
    };
    return(
        <View style={styles.container}>
            <Text>
                This is the menu screen :DD
            </Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=>handleLogout()}
            >
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50
    },
    button:{
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 8,
        width: '70%'
    }
});