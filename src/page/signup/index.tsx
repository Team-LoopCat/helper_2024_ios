import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';

export function Signup() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRepassword] = useState<string>('');
  const [idError, setIdError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [repasswordError, setRepasswordError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepassword, setShowRepassword] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleSignup = () => {
    let hasError = false;

    const idRegex = /^[a-zA-Z0-9_]{5,20}$/;
    if (!id || !idRegex.test(id)) {
      setIdError('아이디는 5 ~ 20자의 영문, 숫자, _만 사용 가능합니다');
      hasError = true;
    } else {
      setIdError('');
    }
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,20}$/;
    if (!password || !passwordRegex.test(password)) {
      setPasswordError('비밀번호는 8 ~ 20자의 영문, 숫자, 특수문자만 사용 가능합니다');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (password !== repassword) {
      setRepasswordError('비밀번호가 일치하지 않습니다');
      hasError = true;
    } else {
      setRepasswordError('');
    }

    if (!hasError) {
      console.log('회원가입 시도:', { id, password, repassword });
    }
  };

  const isButtonEnabled = id && password && repassword;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <Input
        value={id}
        onChangeText={setId}
        placeholder="아이디 (5 ~ 20자)"
        onFocus={() => setFocusedField('id')}
        onBlur={() => setFocusedField('')}
        isFocused={focusedField === 'id'}
        errorMessage={idError}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="비밀번호 (8 ~ 20자)"
        secureTextEntry={!showPassword}
        onFocus={() => setFocusedField('password')}
        onBlur={() => setFocusedField('')}
        showPasswordToggle
        onTogglePassword={() => setShowPassword(!showPassword)}
        isFocused={focusedField === 'password'}
        errorMessage={passwordError}
      />
      <Input
        value={repassword}
        onChangeText={setRepassword}
        placeholder="비밀번호 확인"
        secureTextEntry={!showRepassword}
        onFocus={() => setFocusedField('repassword')}
        onBlur={() => setFocusedField('')}
        showPasswordToggle
        onTogglePassword={() => setShowRepassword(!showRepassword)}
        isFocused={focusedField === 'repassword'}
        errorMessage={repasswordError}
      />

      <Button
        title="다음"
        onPress={handleSignup}
        buttonStyle={[
          styles.button,
          { backgroundColor: isButtonEnabled ? '#FF9900' : '#BEBEBE' },
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
