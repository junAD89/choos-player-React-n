import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ChooseButton() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text>
                    ChooseButton

                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>
                    ChooseButton

                </Text>
            </TouchableOpacity>

        </View >

    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4ADE80',
        width: 130,
        height: 70,
        borderRadius: 20,
    },
})