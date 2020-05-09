import React from "react";
import {StyleSheet, View, TouchableHighlight} from "react-native";
import * as Font from "expo-font";
import fontAwesome from "../../assets/fonts/fa-solid-900.ttf";
import { createIconSet } from '@expo/vector-icons';

const glyphMap = { 'icon-name': 1234, test: '∆' };


const CustomIcon = createIconSet({
  pencil : "\uf303",
  plus   : "\uf067",
  check  : "\uf00c",
  trash  : "\uf2ed",
}, 'FontAwesome');


class CircleButton extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({fontLoaded: true});
  }

  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return(
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.CircleButton, { backgroundColor: bgColor}]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.CircleButtonitle, {color: textColor}]} />
            ) : null
          }
        </View>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 36,
    right: 36,
    width: 48,
    height: 48,
  },
  CircleButton: {
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
    fontFamily: "FontAwesome",
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
