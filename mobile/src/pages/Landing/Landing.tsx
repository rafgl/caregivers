import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
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
    navigate("GiveClasses");
  }

  function handleNavigateToLearnPages() {
    navigate("Learn");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleOne}>
        Caregivers
      </Text>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que você gostaria de fazer</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToLearnPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Buscar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
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
