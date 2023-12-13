import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CragScreen from "../../screens/CragScreen";
import CragsScreen from "../../screens/CragsScreen";

const Stack = createNativeStackNavigator();

export default function CragsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Crags">
      <Stack.Screen
        name="Crags"
        component={CragsScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Crag"
        component={CragScreen}
        options={{
          headerTintColor: "#e5e5e5",
          headerTransparent: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
