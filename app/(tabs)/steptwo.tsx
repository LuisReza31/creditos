import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import CreditOption from "@/components/credits/CreditOption";
import LayoutContainer from "@/components/common/LayoutContainer";
import Colors from "@/constants/Colors";

export default function StepTwo() {
  const selectedCredit = useLocalSearchParams();
  return (
    <LayoutContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Acepta tu credito</Text>
        <Text style={styles.subtitle}>
          Confirma que has seleccionado el crédito deseado.
        </Text>
        <CreditOption credit={selectedCredit} onSelect={() => {}} />
        <View style={{ marginVertical: 30 }} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contratar</Text>
        </TouchableOpacity>
      </View>
    </LayoutContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "grey",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bluePrimary,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
