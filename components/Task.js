import React,{ Component } from "react";
import styles from './Styles';
import { View, Text, StyleSheet,FlatList } from "react-native";


export default class Task extends Component {
    render() {
        return (
            
            <FlatList
                style={styles.list}
                data={this.props.tasks}
                renderItem={this.props.renderItem}
                extraData={this.props.state}
            />
        );
    }
}