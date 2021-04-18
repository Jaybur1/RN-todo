import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import Note from "./note";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [nightMode, setNightMode] = useState(true);

  const mode = nightMode ? "dark" : "light";
  const onAddNewTask = useCallback(() => {
    if (inputVal) {
      const newTask = {
        date: new Date().toDateString(),
        content: inputVal,
      };
      setTasks([newTask, ...tasks]);
      setInputVal("");
    }
  }, [tasks, inputVal]);

  const onDeleteTask = useCallback((i) => () => {
      tasks.splice(i,1)
      setTasks([...tasks])
  },[tasks])
  return (
    <View style={{...styles.container,...styles[`${mode}Container`]}}>
      <View style={{...styles.header,...styles[`${mode}Header`]}}>
        <Text style={{...styles.headerText, ...styles[`${mode}HeaderText`]}}>Demo To-do</Text>
        <View style={styles.modeToggle}>
          <Text style={{...styles.modeToggleText, ...styles[`${mode}ModeToggleText`]}}>Light</Text>
          <Switch value={nightMode} onValueChange={setNightMode} />
          <Text style={{...styles.modeToggleText, ...styles[`${mode}ModeToggleText`]}}>Dark</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {tasks.map((task, i) => (
          <Note key={`${task.content}-${i}`} data={task} mode={mode} onDelete={onDeleteTask(i)} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={{...styles.textInput, ...styles[`${mode}TextInput`]}}
          placeholder="Add a Task"
          placeholderTextColor={nightMode ? "#eee" : "#191919"}
          underlineColorAndroid="transparent"
          onChangeText={setInputVal}
          value={inputVal}
        ></TextInput>
      </View>
      <TouchableOpacity style={{...styles.addButton, ...styles[`${mode}AddButton`]}} onPress={onAddNewTask}>
        <Text style={{...styles.addButtonText,...styles[`${mode}AddButtonText`]}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer:{
    backgroundColor: "#121212",
  },
  LightContainer:{
      backgroundColor: "#eee"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    borderBottomWidth: 0.5,
  },
  darkHeader:{
    borderBottomColor: "#eee",
  },
  LightHeader:{
    borderBottomColor: "#121212",
  },
  headerText: {
    fontSize: 30,
    padding: 26,
    fontWeight: "500",
  },
  darkHeaderText:{
    color: "#eee",
  },
  lightHeaderText:{
    color: "#121212",
  },
  scrollContainer: {
    marginBottom: 100,
  },
  textInput: {
    alignSelf: "stretch",
    padding: 35,
    fontSize: 20,
  },
  darkTextInput:{
    color: "#eee",
    backgroundColor: "#191919",
  },
  lightTextInput:{
    color:"#191919" ,
    backgroundColor:"#eee",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 140,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  darkAddButton:{
    backgroundColor: "#373737",
  },
  lightAddButton:{
    backgroundColor: "#dedede",
  },
  addButtonText: {
    fontSize: 30,
    fontWeight: "700",
  },
  darkAddButtonText: {
    color: "#eee",
  },
  LightAddButtonText: {
    color: "#121212",
  },
  modeToggle: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 15,
    justifyContent: "space-between",
    padding: 20,
    marginTop: -30,
  },
  modeToggleText: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  darkModeToggleText:{
    color: "#eee",

  },
  lightModeToggleText:{
    color: "#121212",
  },
});

export default Main;
