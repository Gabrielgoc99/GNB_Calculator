import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,  
    backgroundColor: 'black',  
    

  },
  itensContainer: {
    flexDirection: 'columns',
    padding: 12,
  },
  paragraph: {    
    marginBottom: 0,
    fontSize: 30,
    fontWeight: 'bold',    
    borderColor: 'red',
    color: 'white',
  },
  imagem: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  botao: {
    width: 200,  
    alignSelf: 'center',
    padding: 8,
    marginBottom: 10,
  },
  input: {
    marginTop: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: 'red',
    shadowRadius: 2,
    padding: 12,
    height: 30,
    textAlign: 'center',

  },
  card: {
    width: 185,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 20,
    alignItems: 'center',





  }
});