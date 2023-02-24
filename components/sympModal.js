

import React from 'react';
import RadioButton from './RadioButton';
import { useState } from "react";
import { View, Text, Pressable,Image,StyleSheet ,Modal, ScrollView,TextInput,Button} from 'react-native';


export default function SympModal(props){
    const [modalVisible, setModalVisible] = useState(false);
    const [option, setOption] = useState(null);
    const [optionFlow, setOptionFlow] = useState(null);
    const [optionMood, setOptionMood] = useState(null);
    const [optionPain, setOptionPain] = useState(null);
    const [optionDischarge, setOptionDischarge] = useState(null);
    const [optionSex, setOptionSex] = useState(null);
    const [optionOther, setOptionOther] = useState(null);
    const [text, setText] = useState('');
  
  


  const flowData = [
    { value: 'Light' },
    { value: 'Medium' },
    { value: 'Heavy' },
  ];

  const moodData = [
    { value: 'Calm' },
    { value: 'Happy' },
    { value: 'Sad' },
    { value: 'Angry' },
    { value: 'Excited' },
    { value: 'Mood Swings' },
    { value: 'Anxious' },
    { value: 'Indifferent' },
    { value: 'Irrtiable' },
  ];


  const dischargeData = [
    { value: 'None' },
    { value: 'Sticky' },
    { value: 'Eggwhite' },
    { value: 'Atypical' },
    
  ];

  const sexData = [
    { value: 'None' },
    { value: 'Protected' },
    { value: 'Unprotected' },
    { value: 'High sex drive' },
    { value: 'Low sex drive' },
    { value: 'Withdrawl' },
    { value: 'Masturbation' },
    { value: 'Painful' },
    
  ];

  const painData = [
    { value: 'None' },
    { value: 'Period Cramps' },
    { value: 'Ovulation' },
    { value: 'Breast Tenderness' },
    { value: 'Headache' },
    { value: 'Migraine' },
    { value: 'Joint' },
    { value: 'Back' },
    
  ];

  const otherData = [
    { value: 'Acne' },
  
  ];

    const saveHandler = () => {
      setModalVisible(!modalVisible)

      console.log(props.date)

      console.log(optionFlow)
      setOptionFlow('')


      console.log(optionMood)
      setOptionMood('')

      console.log(optionPain)
      setOptionPain('')


      console.log(optionDischarge)
      setOptionDischarge('')

      console.log(optionSex)
      setOptionSex('')

      console.log(optionOther)
      setOptionOther('')

      console.log(text)

      

    
    };

    return(
<View>
 <Modal
 animationType="slide"
 transparent={true}
 visible={modalVisible}
 onRequestClose={() => {
   setModalVisible(!modalVisible);
 }}>
   
 <View style={styles.centeredView}>
   <View style={styles.modalView}>

   <Pressable
       style={[styles.button, styles.buttonClose]}
       onPress={() => setModalVisible(!modalVisible)}>
       <Text style={styles.textStyle}>Hide Modal</Text>
     </Pressable>
     <Text style={styles.modalText}>{props.date}</Text>
     
     <ScrollView >

    

     <Text> Flow </Text>
 <RadioButton data={flowData} onSelect={(value) => setOptionFlow(value) }/>


 <Text> Mood </Text>
 <RadioButton  data={moodData} onSelect={(value) => setOptionMood(value)}/>

 <Text>  Discharge </Text>
 <RadioButton data={dischargeData} onSelect={(value) => setOptionDischarge(value)}/>

 <Text> Sex </Text>
 <RadioButton data={sexData} onSelect={(value) => setOptionSex(value)}/>

<Text> Pain </Text>
<RadioButton data={painData} onSelect={(value) => setOptionPain(value)}/>

 <Text> Other </Text>
 <RadioButton data={otherData} onSelect={(value) => setOptionOther(value)}/>
     

     <TextInput 
       style={{height:45}}
       placeholder="Anything else?"
       onChangeText={newText => setText(newText)}
       defaultValue={text}
       />

<Pressable
       style={[styles.button,styles.buttonClose]}
       onPress={() => saveHandler()}>
       <Text style={styles.textStyle}>Save</Text>
     </Pressable>
 
        </ScrollView>

     
   </View>
 </View>

</Modal>
<Button
    title="Log"
    color="#f194ff"
    onPress={() => setModalVisible(true)}
    />
</View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  