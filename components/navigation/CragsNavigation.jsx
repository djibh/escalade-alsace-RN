import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CragScreen from "../../screens/Crag/CragScreen";
import CragsListScreen from "../../screens/CragsListScreen";

const Stack = createNativeStackNavigator();

export default function CragsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Crags">
      <Stack.Screen
        name="Crags"
        component={CragsListScreen}
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
