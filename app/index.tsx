import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


import { bgStyles } from "../assets/bgStyles/bgStyles";


export default function Index() {
  return (
    <View
      style={bgStyles.container}
    >







      <TouchableOpacity>
        <Text style={styles.buttonText}>Bof</Text>
      </TouchableOpacity>



    </View>
  );

}


const styles = StyleSheet.create({


  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})