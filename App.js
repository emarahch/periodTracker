
// https://reactnavigation.org/docs/tab-based-navigation/


import SympModal from './components/sympModal';
import Calendar from './components/calendar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Modal,Pressable,TextInput,ScrollView,SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen( {navigation}) {
    const [currentDate, setCurrentDate] = useState('');
    // const [modalVisible, setModalVisible] = useState(false);
    // const [text, setText] = useState('');

    useEffect(() => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1; 
      var year = new Date().getFullYear(); 
      setCurrentDate(
        month + '/' + date + '/' + year 
      );
    }, []);
    

      return (
        <View style={styles.container}>
          <View style={styles.containerInner}>
          <Text style={styles.beigeColor} >{currentDate}</Text>
          <Text style={styles.beigeColor} >Hey user, do have something to share today?</Text>
          <SympModal date={currentDate}/>
          <StatusBar style="auto" />
          </View>
        </View>

  );
}


function InsightsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#11332E' }}>
      <Text>Insights!</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#11332E' }}>
      <Calendar/>
    </View>
  );
}



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#11332E'}}>
      <Text>Settings!</Text>
    </View>
  );
}





const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator
     screenOptions={{
      headerShown:false,
      tabBarStyle: { backgroundColor:"black"},
      tabBarInactiveTintColor:"#F1E9CF",
    }} >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerInner:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height:"75%",
    width:"90%",
    borderWidth: 1,
    borderColor:"#F1E9CF",
    backgroundColor: '#11332E',
  },

  beigeColor: {
    color:"#F1E9CF"
  },
  NavCon:{
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
