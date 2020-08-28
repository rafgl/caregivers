import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Text style={styles.logoText}>
          Caregivers
          <Icon name="add" style={styles.iconName}/> 
        </Text>
        
      </View>

      <View style={styles.header}>
           <Text style={styles.title}>{title}</Text>
           {headerRight}
      </View>
      
      {children}
    </View>
  );
};

export default PageHeader;
