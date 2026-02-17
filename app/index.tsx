import * as NavigationBar from "expo-navigation-bar";
import { Redirect } from "expo-router";
import React from "react";
NavigationBar.setButtonStyleAsync('light');

export default function IndexScreen() {
  return (
    <Redirect
      href={"/(tabs)/(home)"}
    />
  );
}
