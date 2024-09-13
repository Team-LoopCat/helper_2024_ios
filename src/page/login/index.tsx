import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!id || !password) {
      setError('아이디나 비밀번호를 확인해주세요');
      return;
    }

    console.log('로그인 시도:', { id, password });
    setError('');
  };

  const isButtonEnabled = id && password;

  return (
    <View style={styles.container}>
      {/*로그인*/}
      <Text style={styles.title}>로그인</Text>
      {/*아이디 input*/}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={id}
          onChangeText={setId}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      </View>
      {/*비밀번호 input*/}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
          <Image
            source={require('../../asset/unlook.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      </View>
      <View style={styles.buttont}>
        <Button
          title="로그인"
          buttonStyle={[
            styles.button,
            { backgroundColor: isButtonEnabled ? '#FF9900' : '#BEBEBE' },
          ]}
          onPress={handleLogin}
        />
        <Text style={styles.textContainer}>
          <Text>회원이 아니라면,</Text>
          <Text style={styles.signup}>회원가입</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  title: {
    marginBottom: 30,
    color: '#000000',
    marginTop: 100,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: 340,
    height: 48,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontWeight: '600',
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  passwordInput: {
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  errorText: {
    position: 'absolute',
    color: '#ef4444',
    marginTop: 2,
    marginLeft: 5,
    fontSize: 12,
  },
  textContainer: {
    color: '#000000',
    fontSize: 14,
  },
  signup: {
    color: '#FF9900',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  button: {
    marginTop: 300,
    borderRadius: 8,
    width: 340,
    height: 48,
    fontWeight: 'heavy',
  },
  buttont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
