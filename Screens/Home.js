import { Text, View, StyleSheet } from "react-native"

export default Home = () => {
    return(
        <View style={styles.container}>
            <Text>
                This is the dashboard screen :DD
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50
    },
});