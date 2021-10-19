import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

interface Props {
    number: number;
    [key: string]: any;
}

const Star = ({style, number}: Props) => {
    return (
        <View style={{...style, ...styles.star}}>
            <ImageBackground source={require('../assets/my-images/star.jpg')} 
            style={
                    {        
                        ...{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            resizeMode: ''
                        },
                        ...styles.starImage
                    }
                }>
                <Text style={styles.text}>{number}</Text>
            </ImageBackground>
        </View>
        
    )
}

export default Star

const styles = StyleSheet.create({
    starImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',

    },
    star: {
    },
    text: {
        fontWeight: "bold",
        color: 'white',
    }
})
