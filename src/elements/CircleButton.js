import React from "react";
import {StyleSheet, View, Text} from "react-native";

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return(
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor}]}>
        <Text style={[styles.CircleButtonitle, {color: textColor}]}>
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
  },
});

export default CircleButton;
