import { StyleSheet } from 'react-native';
import { COLORS } from './constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import HomeNavigation from './components/navigation/HomeNavigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import CragsNavigation from './components/navigation/CragsNavigation';

const Tab = createBottomTabNavigator()

export default function App() {
  StatusBar.setHidden(true)
  return (<>
    <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeNavigation} options={{
          header: () => null,
          tabBarIcon: ({ focused, tintColor }) => {
            return <Ionicons name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor} />;
          },
        }}/>
      <Tab.Screen name="CragsStack" component={CragsNavigation} options={{
          header: () => null,
          tabBarIcon: ({ focused, tintColor }) => {
            return <Ionicons name={`ios-analytics${focused ? '-sharp' : ''}`} size={25} color={tintColor} />;
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
