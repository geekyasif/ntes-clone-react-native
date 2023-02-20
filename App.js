import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SpotYourTrainScreen from './screens/SpotYourTrainScreen';

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import LiveStationScreen from './screens/LiveStationScreen';
import TrainScheduleScreen from './screens/TrainScheduleScreen';
import TrainBwStationScreen from './screens/TrainBwStationScreen';
import CancelledTrainScreen from './screens/CancelledTrainScreen';
import RescheduledTrainScreen from './screens/RescheduledTrainScreen';
import DivertedTrainScreen from './screens/DivertedTrainScreen';
import ManageFavouriteScreen from './screens/ManageFavouriteScreen';
import TrainExceptionScreen from './screens/TrainExceptionScreen';
import AboutAppScreen from './screens/AboutAppScreen';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator

          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}

        >
          <Stack.Screen name="Rail Connect" component={HomeScreen} />
          <Stack.Screen name="Spot your train" component={SpotYourTrainScreen} />
          <Stack.Screen name="Live station" component={LiveStationScreen} />
          <Stack.Screen name="Train schedule" component={TrainScheduleScreen} />
          <Stack.Screen name="Train b/w stations" component={TrainBwStationScreen} />
          <Stack.Screen name="Cancelled trains" component={CancelledTrainScreen} />
          <Stack.Screen name="Rescheduled trains" component={RescheduledTrainScreen} />
          <Stack.Screen name="Diverted trains" component={DivertedTrainScreen} />
          <Stack.Screen name="Manage favourites" component={ManageFavouriteScreen} />
          <Stack.Screen name="Train exceptions" component={TrainExceptionScreen} />
          <Stack.Screen name="About app" component={AboutAppScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
