import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DetailsScreen from "../screens/Details/Details";
import AllYourChampions from "../screens/AllYourChampions/AllYourChampions";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AllYourChampions" component={AllYourChampions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}