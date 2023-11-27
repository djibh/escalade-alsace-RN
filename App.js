import { StyleSheet, Image } from 'react-native';
import { COLORS } from './constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  StatusBar.setHidden(true)
  return (<>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          header: () => null,
          
        }}/>
        <Stack.Screen name="Post" component={PostScreen} options={{
          headerTintColor: "#e5e5e5",
          headerTransparent: true,
          headerTitle: ""
        }}/>
      </Stack.Navigator>
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
