import { StyleSheet, View } from "react-native";


import { bgStyles } from "../assets/bgStyles/bgStyles";
import CenterImage from "./components/CenterImage";
import ChooseButton from "./components/ChooseButton";




export default function Index() {
  return (
    <View
      style={bgStyles.container}
    >




      <CenterImage />
      <ChooseButton />

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