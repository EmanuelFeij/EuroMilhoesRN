import React from "react";
import { View, StyleSheet } from "react-native";
import Number from "./Number";
import Star from "./Star";

interface Props {
  [key: string]: any;
}

const MainContainer = ({ style }: Props) => {
  const [numbers, setNumbers] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const [stars, setStars] = React.useState<number[]>([1, 2]);
  return (
    <View style={{ ...styles.mainContainer }}>
      <View style={styles.number}>
        {numbers.map((n) => (
          <Number key={n} numberToShow={n} />
        ))}
      </View>
      <View style={styles.star}>
        {stars.map((n) => (
          <Star key={n} number={n} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    paddingVertical: 50,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  star: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default MainContainer;
