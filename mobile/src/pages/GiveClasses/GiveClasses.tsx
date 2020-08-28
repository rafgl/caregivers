
import React, { useState, Component } from "react";

import { View, ImageBackground, Text, ScrollView, Image, Linking, TextInput,  } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


export default function GiveClasses() {
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
         <View style={styles.profile}>
               <View style={styles.profileInfo}>
                     <Text style={styles.subject}>Coloque seu nome</Text>
                     <TextInput style={styles.inputName}>

                     </TextInput>
             </View> 
        </View>
        <Text style={styles.bio}></Text>

        <View style={styles.footer}>    
        </View>
    </View>
      </ScrollView>
    </View>
    
  );
}
