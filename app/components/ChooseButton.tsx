import { Heart, XCircle } from 'lucide-react-native';
import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';

export default function ChooseButton() {
    const scaleLeft = useRef(new Animated.Value(1)).current;
    const scaleRight = useRef(new Animated.Value(1)).current;

    const animateIn = (scale: any) => {
        Animated.spring(scale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const animateOut = (scale: any) => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.buttonContainer}>
            {/* Bouton gauche (XCircle) */}
            <Pressable
                onPressIn={() => animateIn(scaleLeft)}
                onPressOut={() => animateOut(scaleLeft)}
            >
                <Animated.View style={{ transform: [{ scale: scaleLeft }] }}>
                    <View style={styles.button}>
                        <XCircle color="red" size={45} />
                    </View>
                </Animated.View>
            </Pressable>

            {/* Bouton droit (Heart) */}
            <Pressable
                onPressIn={() => animateIn(scaleRight)}
                onPressOut={() => animateOut(scaleRight)}
            >
                <Animated.View style={{ transform: [{ scale: scaleRight }] }}>
                    <View style={styles.button}>
                        <Heart color="white" size={45} />
                    </View>
                </Animated.View>
            </Pressable>
        </View>
    );
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
});
