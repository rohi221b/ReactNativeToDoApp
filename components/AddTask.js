import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from './Styles';


class AddTask extends Component {
    state = { task: "" };
    render() {
        return (
            <TextInput
                style={styles.textInput}
                {...this.props}
                // onChangeText={(text)=>this.props.changeTextHandler}
                // onSubmitEditing={this.props.addTask}
                // value={this.props.state.text}
                placeholder="Add Task"
            />
        );
    }
}

export default AddTask;
