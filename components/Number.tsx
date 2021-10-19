import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    numberToShow: number;
    [key: string]: any;
}

const Number = ({numberToShow, style}: Props) => {
    return (
        <View style={{...style, ...styles.number}}>
            <Text style={styles.numberText}>{numberToShow}</Text>
        </View>
    )
}

export default Number

const styles = StyleSheet.create({
    number:{

    },
    numberText:{
        fontWeight: "bold",
        fontSize: 36
    },
})
