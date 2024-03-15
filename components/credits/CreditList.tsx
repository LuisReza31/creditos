import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import CreditOption from "./CreditOption";

const CreditList = ({ credits, selectedCredit, onSelect, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Felicidades!</Text>
      <Text>Encontramos estos créditos perfectos para ti:</Text>
      <View>
        {credits.map((credit, index) => (
          <CreditOption
            key={`credit-${index}`}
            selectedCredit={selectedCredit}
            credit={credit}
            onSelect={onSelect}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Seleccionar crédito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  creditOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: "#8EBCF7",
    borderRadius: 5,
    marginVertical: 5,
  },
  creditAmountText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  button: {
    height: 56,
    backgroundColor: Colors.bluePrimary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  selectedCreditStyle: {
    backgroundColor: Colors.bluePrimary,
  },
});

export default CreditList;
