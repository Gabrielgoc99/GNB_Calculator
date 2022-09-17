import React from "react";
import {TextInput, View} from "react-native";
import styles from "./styles";

const MyInput = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}        
        value={props.value}  
        placeholder={props.placeholder}      
      />
    </View>
  );
};
export default MyInput;