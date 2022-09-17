import * as React from 'react';
import {useState, useEffect} from 'react';
import { View } from 'react-native';
import MyButton from './MyButton';
import styles from './styles';
import MyInput from './MyInput';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

export default function HomePage() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultSoma, setResultSoma] = useState(0);
  const [resultSub, setResultSub] = useState(0);

  useEffect(() => {
    setResultSoma (Number(valor1) + Number(valor2));
  }, [valor1, valor2] );

  useEffect(() => {
    setResultSub (Number(valor1) - Number(valor2));
  }, [valor1, valor2] );

  const Limpar = () => {
    setValor1("");
    setValor2("");
  }

  return(
    <View style={styles.container}>

      <Text style={styles.paragraph}>GNB Calculator</Text>      
      <MyInput
        style={styles.input}
        onChangeText={setValor1}
        value={valor1}
        placeholder='Digite o Valor 1'
        />
      <MyInput
        style={styles.input}
        onChangeText={setValor2}
        value={valor2}
        placeholder='Digite o Valor 2'
      />

      <Card style={styles.card}>
        <Card.Content style={{alignItems: 'center'}}>
          <Title>Soma:</Title>
          <Paragraph>{resultSoma}</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={{alignItems: 'center'}}>
          <Title>Subtração:</Title>
          <Paragraph>{resultSub}</Paragraph>
        </Card.Content>
      </Card>

      <MyButton
        style={styles.botao}
        label="Limpar"
        onPress={Limpar}
        cor='red'                         
      />
    </View>

)};