import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import LayoutContainer from "@/components/common/LayoutContainer";
import ModalContent from "@/components/common/ModalContent";
import { useCallback, useState } from "react";
import CreditList from "@/components/credits/CreditList";
import Colors from "@/constants/Colors";
import CustomTextInput from "@/components/common/CustomTextInput";
import { validateEmail } from "@/utils/validations";
import { getCreditsService } from "@/services/creditService";
import { router } from "expo-router";

export default function TabOneScreen() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [credits, setCredits] = useState([]);
  const [selectedCredit, setSelectedCredit] = useState(null);

  const updateFormValidity = (name: string, email: string): void => {
    const isValid = name.trim() !== "" && validateEmail(email);
    setIsFormValid(isValid);
  };

  const handleNameChange = (name: string): void => {
    setName(name);
    updateFormValidity(name, email);
  };

  const handleEmailChange = (email: string): void => {
    setEmail(email);
    updateFormValidity(name, email);
  };

  const handleDiscoverCredits = useCallback(async () => {
    const creditList = await getCreditsService();
    setCredits(creditList);
    setIsModalVisible(true);
  }, [credits, setCredits]);

  const onSelectCredit = useCallback(
    (item) => {
      console.log({ item });
      setSelectedCredit(item);
    },
    [selectedCredit, setSelectedCredit]
  );

  const onSubmitCredit = useCallback(() => {
    if (selectedCredit) {
      setIsModalVisible(false);
      router.push({ pathname: `/steptwo`, params: selectedCredit });
    }
  }, [selectedCredit, setSelectedCredit, isModalVisible, setIsModalVisible]);

  return (
    <LayoutContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Descubre tu credito</Text>
        <Text style={styles.description}>
          Llena el siguiente formulario para conocer los créditos que tenemos
          disponibles para ti.
        </Text>
        <View style={styles.separator} />
        <Text style={styles.labelInput}>Nombre</Text>
        <CustomTextInput
          label="Nombre"
          value={name}
          onChangeText={handleNameChange}
        />
        <Text style={styles.labelInput}>Correo</Text>
        <CustomTextInput
          label="Correo"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: isFormValid
                ? Colors.bluePrimary
                : Colors.disabled,
            },
            styles.button,
            pressed && styles.pressedButton,
          ]}
          onPress={handleDiscoverCredits}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Descubrir créditos</Text>
        </Pressable>
      </View>
      <ModalContent
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <CreditList
          credits={credits}
          onSelect={onSelectCredit}
          selectedCredit={selectedCredit}
          onSubmit={onSubmitCredit}
        />
      </ModalContent>
    </LayoutContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  description: {
    width: "80%",
    fontSize: 12,
    color: "#7A7A7A",
    marginTop: 30,
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "80%",
  },
  labelInput: { fontSize: 12, color: "grey" },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  pressedButton: {
    opacity: 0.75,
  },
});
