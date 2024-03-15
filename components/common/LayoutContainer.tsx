import { View, Text, SafeAreaView } from "react-native";
import React, { ReactNode } from "react";

type LayoutContainerProps = {
  children?: ReactNode;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {children}
    </SafeAreaView>
  );
};

export default LayoutContainer;
