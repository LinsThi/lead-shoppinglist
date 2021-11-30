import React from 'react';
import { Portal, Text, Modal } from 'react-native-paper';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
}

export function ModalProduct({ visible, setVisible }: Props) {
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={S.containerModal}
      >
        <Text>Modal exemple</Text>
      </Modal>
    </Portal>
  );
}
