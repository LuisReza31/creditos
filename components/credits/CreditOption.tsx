import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type CreditOptionProps = {
  credit: any;
  selectedCredit?: any;
  onSelect: (item: any) => void;
};

const CreditOption = ({
  credit,
  selectedCredit,
  onSelect,
}: CreditOptionProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.creditOptionContainer,
        selectedCredit?.id === credit?.id && styles.selectedCreditStyle,
      ]}
      onPress={() => onSelect(credit)}
    >
      <Text style={styles.creditAmountText}>{credit?.name}</Text>
      <Text style={styles.creditAmountText}>${credit?.value}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
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
  selectedCreditStyle: {
    backgroundColor: Colors.bluePrimary,
  },
});

export default CreditOption;
