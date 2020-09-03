
import React, { useState, Component } from "react";

import { View, ImageBackground, Text, ScrollView, Image, Linking, TextInput,  } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


export default function Teach() {
  const { goBack } = useNavigation();
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');

  function handleNavigationBack() {
    goBack();
  }


  return (
    <View style={styles.container}>
      <PageHeader title={"Registrar cuidador"} />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>

<View style={styles.container}>
        <Text style={styles.title}>
          Seus dados
        </Text>
            <View style={styles.profileInfo}>
              <Text style={styles.titleInput}>Nome</Text>
                <TextInput style={styles.inputName}>
                </TextInput>
             </View> 

             <View style={styles.profileInfo}>
              <Text style={styles.titleInput}>Avatar</Text>
                <TextInput style={styles.inputName}>
                </TextInput>
             </View> 

             <View style={styles.profileInfo}>
              <Text style={styles.titleInput}>Whatsapp</Text>
                <TextInput style={styles.inputName}>
                </TextInput>
             </View> 

             <View style={styles.profileInfo}>
              <Text style={styles.titleInput}>Bio</Text>
                <TextInput style={styles.inputName}>
                </TextInput>
             </View>  
        <Text style={styles.bio}></Text>
    <View style={styles.footer}>   
      <RectButton
          onPress={handleNavigationBack}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>Cuidar</Text>
      </RectButton>
  </View>
</View>
      </ScrollView>
    </View>
    
  );
}
