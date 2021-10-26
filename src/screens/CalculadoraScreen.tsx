import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculate } from '../hooks/useCalculate';
import { themeGlobal } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    previousNumber,
    number,
    clean,
    positiveNegative,
    buttonDel,
    buttonAdd,
    buttonDivide,
    buildNumer,
    buttonMultiply,
    buttonSubstract,
    calculate
  } = useCalculate();
  return (
    <View style={themeGlobal.calculatorContainer}>
      {
        (previousNumber !== '0') && (<Text style={themeGlobal.resultLitle}>{previousNumber}</Text>)
      }
      <Text
        style={themeGlobal.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>
      <View style={themeGlobal.filaButtons}>
        <ButtonCalc text="C" color="#9b9b9b" action={clean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={buttonDel} />
        <ButtonCalc text="/" color="#FF9427" action={buttonDivide} />
      </View>
      <View style={themeGlobal.filaButtons}>
        <ButtonCalc text="7" action={buildNumer} />
        <ButtonCalc text="8" action={buildNumer} />
        <ButtonCalc text="9" action={buildNumer} />
        <ButtonCalc text="X" color="#FF9427" action={buttonMultiply} />
      </View>
      <View style={themeGlobal.filaButtons}>
        <ButtonCalc text="4" action={buildNumer} />
        <ButtonCalc text="5" action={buildNumer} />
        <ButtonCalc text="6" action={buildNumer} />
        <ButtonCalc text="-" color="#FF9427" action={buttonSubstract} />
      </View>
      <View style={themeGlobal.filaButtons}>
        <ButtonCalc text="1" action={buildNumer} />
        <ButtonCalc text="2" action={buildNumer} />
        <ButtonCalc text="3" action={buildNumer} />
        <ButtonCalc text="+" color="#FF9427" action={buttonAdd} />
      </View>
      <View style={themeGlobal.filaButtons}>
        <ButtonCalc text="0" width action={buildNumer} />
        <ButtonCalc text="." action={buildNumer} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  )
};
