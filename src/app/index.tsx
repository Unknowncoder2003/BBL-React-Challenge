import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mytext}>Edit src/app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}
const [name, setName] = useState(0);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  mytext: {
    color: "red",
  }

});
