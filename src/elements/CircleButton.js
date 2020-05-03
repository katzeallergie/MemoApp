import React from "react";
import {StyleSheet, View, Text} from "react-native";

class CircleButton extends React.Component {
  render() {
    return(
      <View style={styles.CircleButton}>
        <Text style={styles.CircleButtonitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    position: "absolute",
    bottom: 36,
    right: 36,
    width: 48,
    height: 48,
    backgroundColor: "#E31676",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CircleButtonitle: {
    fontSize: 24,
    lineHeight: 24,
    color: "#FFF"
  },
});

export default CircleButton;
