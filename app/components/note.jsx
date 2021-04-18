import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Note = ({data, onDelete, mode}) => {
    const {date, content} = data
  return (
    <View style={{...styles.note,...styles[`${mode}Note`]}}>
      <Text style={{...styles.noteText, ...styles[`${mode}NoteText`]}}>{date}</Text>
      <Text style={{...styles.noteText, ...styles[`${mode}NoteText`]}}>{content}</Text>
      <TouchableOpacity style={{...styles.noteDelete,...styles[`${mode}NoteDelete`]}} onPress={onDelete}>
        <Text style={{...styles.noteDeleteText,...styles[`${mode}NoteDeleteText`]}}> - </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
  },
  darkNote:{
    borderBottomColor: "#ededed",
  },
  lightNote:{
    borderBottomColor: "#898989",
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    fontSize: 24,
  },
  darkNoteText:{
    borderLeftColor: "#3d3d3d",
    color: '#eee'
  },
  lightNoteText:{
    borderLeftColor: "#898989",
    color: '#191919'
  },
  noteDelete: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:50,
    height:50,
    borderRadius: 50,
    padding: 10,
    top: 20,
    bottom: 10,
    right: 10
  },
  darkNoteDelete:{
    backgroundColor: '#e3e3e3',
  },
  lightNoteDelete:{
    backgroundColor: '#770000',
  },
  noteDeleteText: {
    fontWeight: "700",
    fontSize: 24,
  },
  darkNoteDeleteText: {
    color: "#770000",
  },
  lightNoteDeleteText: {
    color: "#e3e3e3",
  }
};
export default Note;
