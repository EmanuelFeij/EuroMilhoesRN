import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

interface ButtonProps  {
  text: string;
  [key: string]: any;
  
}

const MyButton : React.FC<ButtonProps> = ({ style, text, onPress}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...style, ...styles.myButton, }}>
        <Text >{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    myButton: {

        width:40,
        height:40,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        alignItems: "center",
        elevation:8,
    }
})

export default MyButton;
