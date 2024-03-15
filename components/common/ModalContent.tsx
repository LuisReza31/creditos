import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};
const ModalContent = ({ isVisible, onClose, children }: ModalProps) => {
  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: "85%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
});
export default ModalContent;
