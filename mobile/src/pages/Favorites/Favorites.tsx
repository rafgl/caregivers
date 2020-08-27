import React from "react";
import { View, Image, ScrollView } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title={"Cuidadores favoritos"} />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
      </ScrollView>
    </View>
  );
}
