import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image, TextInputProps, Text } from 'react-native';

interface InputProps extends TextInputProps {
  isFocused: boolean;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  onFocus,
  onBlur,
  showPasswordToggle,
  onTogglePassword,
  isFocused,
  errorMessage,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.focusedInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCapitalize="none"
        {...props}
      />
      {showPasswordToggle && (
        <TouchableOpacity onPress={onTogglePassword} style={styles.icon}>
          <Image
            source={require('../assets/unlook.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      )}
      <View style={styles.textContanier}>{errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontWeight: '600',
  },
  focusedInput: {
    borderColor: '#FF9900',
    borderWidth: 2,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '35%',
    transform: [{ translateY: -12 }],
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  textContanier: {
    height: 24,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 2,
    margin: 3,
  },
});

export default Input;
