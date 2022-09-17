import * as React from 'react';
import { useState } from 'react';
import { Text, Animated } from 'react-native';
import styles from './styles'


const Header = () => {
    
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: 250,
        duration: 3000,
    }).start();

    Animated.timing(altura, {
        toValue: 125,
        duration: 3000,
    }).start();

    return (      
                  
      <Animated.Image source={require("../assets/GNB.jpg")}
         style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'gray', marginBottom: 10,  marginTop: 10}}
      />
                 
    );

}

export default Header;