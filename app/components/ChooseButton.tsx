import { Heart, XCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { motion } from "motion/react";

export default function ChooseButton() {
    return (
        <View style={styles.buttonContainer}>

            <motion.view
                whileTap={{
                    scale: 0.8,
                    animation: 'ease-in-out'
                }}>
                <TouchableOpacity style={styles.button}>
                    <Text>

                        <XCircle color="red" size={45} />
                    </Text>

                </TouchableOpacity>
            </motion.view>





            <motion.view
                whileTap={{
                    scale: 0.8,
                    animation: 'ease-in-out'
                }}





            >
                <TouchableOpacity style={styles.button}>
                    <Text>
                        <Heart size={45} />
                    </Text>

                </TouchableOpacity>

            </motion.view>

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