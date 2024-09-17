// src/components/CustomText.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const CustomText: React.FC<TextProps> = props => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PretendardVariable', // 폰트 패밀리 이름
  },
});

export default CustomText;
