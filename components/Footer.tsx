import React from "react";
import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";
interface FooterProps {
    style: any
}

const Footer: React.FunctionComponent<FooterProps> = ({style}) => {
  return (
    <View style={{...styles.footer,...style}}>
      <MyButton text={"+"} onPress={() => {console.log("Press")}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    footer:{
    }
})

export default Footer;
