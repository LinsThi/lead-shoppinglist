import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { Button } from '~/components/Button';
import Input from '~/components/Input';

import { loginAction } from '~/store/ducks/user/actions';

import logoIMG from '../../assets/groceries.png';

import * as S from './styles';

export function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    dispatch(loginAction(username, password));
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={false}
    >
      <S.Container>
        <S.ContainerImage>
          <S.LogoImage source={logoIMG} />
        </S.ContainerImage>

        <S.ContainerInputs>
          <Input
            iconLeft="person"
            iconType="ionicons"
            placeholder="Digite seu username"
            value={username}
            onChangeText={setUsername}
          />

          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
          />
        </S.ContainerInputs>

        <S.ContainerButton>
          <Button title="Entrar" onPress={() => handleLogin()} />
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
