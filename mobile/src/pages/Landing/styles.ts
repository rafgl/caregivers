import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  titleOne: {
    fontFamily: "Poppins_600SemiBold",
    flex: 0.5,
    fontSize: 38,
    color: "#fff",
    textAlign: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#87CEFA",
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
    height: 200,
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    height: 120,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-around",
  },

  buttonPrimary: {
    backgroundColor: "#00BFFF",
  },

  buttonSecondary: {
    backgroundColor: "#00CED1",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },
});

export default styles;
