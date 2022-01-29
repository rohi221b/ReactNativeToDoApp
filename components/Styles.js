import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      paddingTop: 20,
      marginTop: 20,
     
    },
    text: {
      textAlign: "center",
      color: "#fff"    
    },
    list: {
      width: "100%"
    },
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 18
    },
    listItemCont: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
      height: 40,
      padding: 10,
      paddingLeft: 10,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      width: "100%"
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 10
    },
    reset: {
      backgroundColor: "#7f7f7f",
      color: "white",
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      width: "100%"
    }
  })