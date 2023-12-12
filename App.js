import { Platform, StyleSheet } from 'react-native';
import { COLORS } from './constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import TestScreen from './screens/TestScreen';
import HomeNavigation from './screens/HomeNavigation';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function App() {
  StatusBar.setHidden(true)
  return (<>
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} options={{
          header: () => null,
          tabBarIcon: ({ focused, tintColor }) => {
            return <Ionicons name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor} />;
          },
        }}/>
      <Tab.Screen name="Crags" component={TestScreen} options={{
          headerTintColor: "#e5e5e5",
          headerTransparent: true,
          headerTitle: "",
          tabBarIcon: ({ focused, tintColor }) => {
            return <Ionicons name={`ios-analytics${focused ? '' : '-outline'}`} size={25} color={tintColor} />;
          },
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.fontPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
});
