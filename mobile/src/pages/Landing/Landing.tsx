import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';



import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import cuidadorIcon from "../../assets/images/icons/cuidador.png";
import elderlyIcon from "../../assets/images/icons/elderly.png";
import giveClassesBg from "../../assets/images/give-classes-background.png";
import api from "../../services/api";

export default function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);


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
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Grato por ter você aqui, {"\n"}
        <Text style={styles.titleBold}>Escolha uma das duas opções</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToLearnPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={elderlyIcon} style={elderlyIcon}/>
          <Text style={styles.buttonText}>Procurar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={cuidadorIcon} />
          <Text style={styles.buttonText}>Cuidar</Text>
        </RectButton>
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
