import React, { useState } from "react";
import { View, Image, ScrollView, Text } from "react-native";


import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { Feather } from '@expo/vector-icons';

import styles from "./styles";
import { TextInput, BorderlessButton, RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

export default function TeacherList() {

  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [course, setcourse] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handlerFiltersSubmit(){
    const response = await api.get("classes", {
      params: {
        course,
        week_day,
        time,
      },
    });

    if (response.data.length === 0) {
      alert("No matchs for your search!");
      return;
    }
    setIsFiltersVisible(false)
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
      title="Procurar cuidador" 
      headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF"/>
        </BorderlessButton>
      )}>

        { isFiltersVisible && (
         <View style={styles.searchform}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput
            placeholderTextColor="#c1bccc"
            style={styles.input}
            value={course}
            onChangeText={text => setcourse(text)}
            placeholder="Qual a cidade?"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
               <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
               <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário"
                />
              </View>
            </View>
            <RectButton onPress={handlerFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>

            </RectButton>
            </View>
        )} 
        </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>

        {teachers.map((teacher: Teacher)=> {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </ScrollView>
    </View>
  );
}
