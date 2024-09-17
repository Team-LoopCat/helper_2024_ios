
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      activeOpacity={0.7}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: 340,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Button;
