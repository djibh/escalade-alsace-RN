import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "../../screens/PostScreen";
import FeedScreen from "../../screens/FeedScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Feed"
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
