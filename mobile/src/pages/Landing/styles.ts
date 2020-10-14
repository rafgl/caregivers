import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  titleOne: {
    fontFamily: "Poppins_600SemiBold",
    flex: 0.5,
    fontSize: 38,
    color: "#fff",
    textAlign: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    color: '#7FFFD4',
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
    height: 155,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 20,
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
    fontSize: 23,
  },
  iconName: {
    fontSize: 50,
    color: '#836FFF',
  },
  elderlyIcon: {
    color: '#FFF',
  },
});

export default styles;
