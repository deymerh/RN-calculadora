import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: string;
  color?: "#9b9b9b" | "#FF9427";
  width?: boolean;
  action: (numberText: string) => void;
}

export const ButtonCalc = ({ text, color, width = false, action }: Props) => {
  return (
    <TouchableOpacity style={{
      ...styles.button,
      backgroundColor: color,
      width: (width) ? 180 : 80
    }}
      onPress={() => action(text)}
    >
      <Text style={{
        ...styles.buttonText,
        color: (color === '#9b9b9b' ? 'black' : 'white')
      }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});