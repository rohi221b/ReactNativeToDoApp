import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from './Styles';


const AddTask = (props) => {
    return (
            <TextInput
                style={styles.textInput}
                placeholder="Add a task"
                onChangeText={props.changeTextHandler}
                value={props.text}
                onSubmitEditing={props.addTask}
            />)
}

export default AddTask;
