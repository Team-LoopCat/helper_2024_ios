import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';

export function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorId, setErrorId] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleLogin = () => {
    let hasError = false;

    if (!id) {
      setErrorId('아이디를 입력해주세요');
      hasError = true;
    } else {
      setErrorId('');
    }

    if (!password) {
      setErrorPassword('비밀번호를 입력해주세요');
      hasError = true;
    } else {
      setErrorPassword('');
    }

    if (!hasError) {
      console.log('로그인 시도:', {id, password});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <Input
        value={id}
        onChangeText={setId}
        placeholder="아이디"
        onFocus={() => setFocusedField('id')}
        onBlur={() => setFocusedField('')}
        isFocused={focusedField === 'id'}
        errorMessage={errorId}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="비밀번호"
        secureTextEntry={!showPassword}
        onFocus={() => setFocusedField('password')}
        onBlur={() => setFocusedField('')}
        showPasswordToggle
        onTogglePassword={() => setShowPassword(!showPassword)}
        isFocused={focusedField === 'password'}
        errorMessage={errorPassword}
      />

      <Button
        title="로그인"
        onPress={handleLogin}
        buttonStyle={[
          styles.button,
          {backgroundColor: id && password ? '#FF9900' : '#BEBEBE'},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    marginBottom: '20%',
    color: '#000000',
    marginTop: '40%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
    borderRadius: 8,
    width: '82.5%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
