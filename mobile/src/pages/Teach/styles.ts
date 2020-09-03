import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
  },

  button: {
    height: 50,
    width: "70%",
    backgroundColor: "#04d361",
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-around",
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 23,
  },

  teacherList: {
    marginTop: -40,
    padding: 16,
  },

  title: {
    padding: 16,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    marginLeft: 25,
  },

  inputName: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    width: 250,
    fontFamily: 'Archivo_700Bold',
  },

  titleInput: {
    fontFamily: 'Poppins_400Regular',
    color: '#A9A9A9',
    fontSize: 12,
    marginTop: 4,
},

titleBio: {
  borderWidth: 1,
},

profile: {
flexDirection: 'row',
alignItems: 'center',
padding: 24,
},

avatar: {
width: 64,
height: 64,
borderRadius: 32,
backgroundColor: '#eee'
},

profileInfo: {
  marginLeft: 40,
},

name: {
  fontFamily: 'Archivo_700Bold',
  color: '#32264d',
  fontSize: 20,
},


bio: {
  marginHorizontal: 24,
  fontFamily: 'Poppins_400Regular',
  fontSize: 14,
  lineHeight: 24,
  color: '#6a6180',
},

footer: {
  backgroundColor: '#fafafc',
  padding: 24,
  alignItems: 'center',
  marginTop: 24,
},

price:{
  fontFamily: 'Poppins_400Regular',
  color: '#6a6180',
  fontSize: 16,
},

priceValue: {
  fontFamily: 'Archivo_700Bold',
  color: '#8257e5',
  fontSize: 16,
},

buttonsContainer: {
  flexDirection: 'row',
  marginTop: 16,
},

favoriteButton: {
  backgroundColor: '#8257e5',
  width: 56,
  height: 56,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 8,
},

favorited: {
  backgroundColor: '#e33d3d',
},
contactButton: {
  backgroundColor: '#04d361',
  flex: 1,
  height: 56,
  borderRadius: 8,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 8,
},

contactButtonText: {
  color: '#FFF',
  fontFamily: 'Archivo_700Bold',
  fontSize: 16,
  marginLeft: 16,
},


});

export default styles;