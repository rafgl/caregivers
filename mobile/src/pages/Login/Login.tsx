import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';



import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import landingCaregiver from "../../assets/images/cuidador.png";
import googleIcon from "../../assets/images/google.png";
import cuidadorIcon from "../../assets/images/icons/cuidador.png";
import elderlyIcon from "../../assets/images/icons/elderly.png";
import giveClassesBg from "../../assets/images/give-classes-background.png";
import facebookIcon from "../../assets/images/facebook.png"
import api from "../../services/api";

export default function Login() {
  const { navigate } = useNavigation();


  function handleNavigateToGiveClassesPage() {
    navigate("Teach");
  }

  function handleNavigateToLearnPages() {
    navigate("Learn");
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={giveClassesBg} style={styles.content} resizeMode="contain">
      <Text style={styles.titleOne}>
        Caregivers
        <Icon name="add" style={styles.iconName}/> 
      </Text>
      <Image source={landingCaregiver} style={styles.caregiver} />
      <View style={styles.containerLogin}>
        <Text style={styles.titleLogin}>
          Login
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToLearnPages}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Image source={googleIcon} style={elderlyIcon}/>
            <Text style={styles.buttonTextGoogle}>Entrar usando conta Google</Text>
          </RectButton>
            <Text style={styles.textRegister}> ───────────  ou  ───────────</Text>
          <RectButton
            onPress={handleNavigateToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image source={facebookIcon} />
            <Text style={styles.buttonTextFacebook}>Entrar usando conta facebook</Text>
          </RectButton>
        </View>
    </View>

      
      </ImageBackground>
    </View>
  );
}

/**
 <RectButton
          onPress={handleNavigateToGiveClssesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
 */
