import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from './Styles';


const AddTask = (props) => {
    return (
        <View style={styles.addTask}>
            <TextInput
                style={styles.input}
                placeholder="Add a task"
                onChangeText={props.changeTextHandler}
                value={props.text}
                onSubmitEditing={props.addTask}
            />
        </View>)
}

export default AddTask;
