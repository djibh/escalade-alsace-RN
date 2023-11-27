import { StyleSheet, Image } from 'react-native';
import { COLORS } from './constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (<>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          header: () => null
        }}/>
        <Stack.Screen name="Post" component={PostScreen} options={({ route }) => ({ title: route.params.title })}/>
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
