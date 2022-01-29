import React, { Component } from 'react';
import styles from './components/Styles';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import AddTask from './components/AddTask';

const Separator = () => {
  return <View style={styles.separator} />;
}
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
        <Button title="X" color="#7f7f7f" onPress={() => this.deleteTask(index)} />
      </View>
      <Separator/>
    </View>;

  render() {
    return (
      <View style={[styles.container, { paddingBottom: 30 }]}>
        <Text style={styles.header}>AU Todo List</Text>
        <Text>{this.state.tasks.length} more to go</Text>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={this.renderItem}
          extraData={this.state}
        />
        <AddTask changeTextHandler={this.changeTextHandler} addTask={this.addTask} text={this.state.text} />
        <TouchableOpacity title="Reset"
          style={styles.reset}
          onPress={
            () => this.setState(
              {
                tasks: [],
                text: "",
              }
            )}>
              <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default TodoList;