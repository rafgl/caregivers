import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  titleOne: {
    fontFamily: "Poppins_600SemiBold",
    flex: 0.6,
    fontSize: 38,
    color: "#fff",
    textAlign: "center",
    paddingTop: 20,
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
    padding: 20,
  },

  caregiver: {
    width: "100%",
    resizeMode: "contain",
    height: 200,
  },

  containerLogin: {
    flex: 1,
    backgroundColor: "#f0f0f7",
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 9,
        lineHeight: 30,
        marginTop: 80,
        overflow: 'hidden'
  },
  textRegister: {
    color: "#FFF",
    fontSize: 15,
  },

  titleLogin: {
    fontFamily: "Poppins_600SemiBold",
    color: "#9C9C9C",
    fontSize: 30,
    textAlign: "center",
    marginTop: 5,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    marginTop: 0,
    alignItems: "center", 
    justifyContent: "space-around",
    flex: 1,
  },

  button: {
    height: 60,
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },

  buttonPrimary: {
    backgroundColor: "#FFF",
  },

  buttonSecondary: {
    backgroundColor: "#3B5998",
  },

  buttonTextFacebook: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 13,
    paddingLeft: 9,
  },

  buttonTextGoogle: {
    fontFamily: "Archivo_700Bold",
    color: "#9C9C9C",
    fontSize: 13,
    paddingLeft: 9,
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
