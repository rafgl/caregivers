import React from "react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";

export default function GiveClasses() {
  const { goBack } = useNavigation();

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
      </ScrollView>
        <View>
          
        </View>
    </View>
  );
}
