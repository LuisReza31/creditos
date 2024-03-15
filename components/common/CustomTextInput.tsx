import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
interface CustomTextInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  ...props
}: CustomTextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
export default CustomTextInput;
