import * as React from 'react';
import { SafeAreaView } from 'react-native';
import HomePage from './components/HomePage';
import Header from './components/Header';
import styles from './components/styles';

export default function App (){
    return (    
      <SafeAreaView style={styles.container}>
        <Header/>
        <HomePage/>
      </SafeAreaView>
    );
}
