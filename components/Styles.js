import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      paddingTop: 20
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
    hr: {
      height: 1,
      backgroundColor: "gray"
    },
    textInput: {
      height: 40,
      paddingRight: 10,
      paddingLeft: 10,
      borderColor: "gray",
      width: "100%"
    }
  })