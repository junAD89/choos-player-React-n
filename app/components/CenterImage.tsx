import { Image, StyleSheet, View } from "react-native";
import Swiper from 'react-native-swiper';

export default function CenterImage() {
    return (
        <View style={styles.container}>




            <Swiper>

                <Image
                    source={{
                        uri: `https://fifpro.org/media/cvglel2t/imago1020346080.jpg?rxy=0.47221054333764556,0.1990534726514335&width=1600&height=1024&rnd=133226681627000000`
                    }}
                    style={styles.image}
                />
                <View>

                    <Image
                        source={{
                            uri: `https://fifpro.org/media/cvglel2t/imago1020346080.jpg?rxy=0.47221054333764556,0.1990534726514335&width=1600&height=1024&rnd=133226681627000000`
                        }}
                        style={styles.image}
                    />
                </View>
                <View>


                    <Image
                        source={{
                            uri: `https://fifpro.org/media/cvglel2t/imago1020346080.jpg?rxy=0.47221054333764556,0.1990534726514335&width=1600&height=1024&rnd=133226681627000000`
                        }}
                        style={styles.image}
                    />
                </View>
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 550,
        borderRadius: 10,

    },

});