import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '~/components/Button';
import Input from '~/components/Input';

import logoIMG from '../../assets/groceries.png';

import * as S from './styles';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
          <Button />
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
}
