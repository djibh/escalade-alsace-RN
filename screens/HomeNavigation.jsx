import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./PostScreen";
import FeedScreen from "./FeedScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={FeedScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTintColor: "#e5e5e5",
          headerTransparent: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
