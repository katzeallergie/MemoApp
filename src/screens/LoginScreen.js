import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from "react-native";

import firebase from "firebase";

class LoginScreen extends React.Component {
  state = {
    email: "user1@example.com",
    password: "asdf1234",
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log("success", user);
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text　style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {this.setState({email: text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-mail address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {this.setState({password: text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttontitle}>
            ログインする
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  button: {
    backgroundColor: "#0088ff",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  buttontitle: {
    color: "#fff",
    fontSize: 18,
  }
});

export default LoginScreen;