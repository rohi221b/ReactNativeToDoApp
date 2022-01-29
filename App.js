import React, { Component } from 'react';
import styles from './components/Styles';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import AddTask from './components/AddTask';

class TodoList extends Component {
  state = {
    tasks: [],
    text: "",
  }
  changeTextHandler = (text) => {
    this.setState({ text: text });
  };

  addTask = () => {
    let nonEmpty = this.state.text.trim().length > 0;

    if (nonEmpty) {
      this.setState((prevState) => {
        let { tasks, text } = prevState;
        return {
          tasks: tasks.concat({ key: tasks.length, text: text }),
          text: ""
        };
      });
    }
  };

  deleteTask = (i) => {
    this.setState(
      (prevState) => {
        let tasks = prevState.tasks;
        tasks.splice(i, 1);
        return { tasks: tasks };
      }
    )
  };

  renderItem = ({ item, index }) =>
    <View>
      <View style={styles.listItemCont}>
        <Text style={styles.listItem}>
          {item.text}
        </Text>
        <Button title="X" onPress={() => this.deleteTask(index)} />
      </View>
      <View style={styles.hr} />
    </View>;

  render() {
    return (
      <View style={[styles.container, { paddingBottom: 30 }]}>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={this.renderItem}
          extraData={this.state}
        // onPress={() => {refresh : !refresh}}
        />
        <Text>{this.state.tasks.length}</Text>
        <AddTask onChangeText={this.changeTextHandler}
                onSubmitEditing={this.addTask}
                value={this.state.text}
        />
        <Button title="Reset"
          onPress={() => this.setState({
            tasks: [],
            text: "",
          })}></Button>
      </View>
    );
  }
}

export default TodoList;