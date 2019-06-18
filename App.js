import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      darkMode: false,
      press: true,
      backgroundColor: "#ffffff",
      textColor: "#455a64"
    };
  }
  handleSwitchToggle = () => {
    this.setState({
      active: !this.state.active
    });
  };
  darkMode = () => {
    if (this.state.press == false) {
      this.setState({
        darkMode: false,
        press: true,
        backgroundColor: "#ffffff",
        textColor: "#455a64"
      });
    } else {
      this.setState({
        darkMode: true,
        press: false,
        backgroundColor: "#455a64",
        textColor: "#ffffff"
      });
    }
  };

  press = () => {
    this.handleSwitchToggle();
    this.darkMode();
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.backgroundColor }
        ]}
      >
        <Text style={[styles.welcome, { color: this.state.textColor }]}>
          Fahim Valanchery
        </Text>
        <View
          style={[
            styles.btnCnt,
            { backgroundColor: this.state.active ? "green" : "grey" }
          ]}
        >
          <TouchableOpacity
            style={[styles.toggle, { left: this.state.active ? 40 : 0 }]}
            onPress={this.press.bind(this)}
          >
            <Text style={styles.label}>
              {this.state.active ? "Light" : "Dark"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    alignItems: "center"
  },
  btnCnt: {
    height: 40,
    width: 100,
    borderRadius: 25,
    alignSelf: "center"
  },
  toggle: {
    height: 40,
    width: 60,
    backgroundColor: "#55acee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  label: {
    fontSize: 16,
    color: "#ffffff"
  }
});
