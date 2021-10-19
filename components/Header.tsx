import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  name: string;
  [key: string]: any;
}

const Header: React.FC<Props> = ({ name}: Props) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/my-images/Euromilhoes-270x225.jpg")}
        style={{
            width: 45,
            height: 40,
            borderRadius: 20,
          }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
      backgroundColor:"white",
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 50,
    elevation:6,
    
  },
  text: {
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

export default Header;
