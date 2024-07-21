import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./Login";
import HomeScreen from "./Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={() => 
            ({ headerShown: false })
        }
    >
        <Tab.Screen name="Home" component={HomeScreen}/>
    </Tab.Navigator>
);

const StackNavigator = () => (
    <Stack.Navigator  
        initialRouteName='Login'
        screenOptions={() => 
            ({ headerShown: false })
        } 
    >
        <Stack.Screen name="LoginStack" component={LoginScreen}/>
        <Stack.Screen name="HomeStack" component={TabNavigator}/>
    </Stack.Navigator>
);

export default Navigation = () => (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
);