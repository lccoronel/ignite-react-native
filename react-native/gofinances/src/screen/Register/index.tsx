import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { useAuth } from '../../hooks/auth';
import Header from '../../components/Header';
import CategorySelect from '../CategorySelect';
import { Container, Form, Fields, TransactionTypes } from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O Valor nåo pode ser negativo')
    .required('O valor é obrigatório'),
});

const Register: React.FC = () => {
  const { user } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { navigate } = useNavigation();

  const [transactionType, setTransactiontype] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionTypeButtonSelect(type: 'positive' | 'negative') {
    setTransactiontype(type);
  }

  function handleSelectCategoryModal() {
    setCategoryModalOpen(oldValue => !oldValue);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) return Alert.alert('Selecione um tipo de transacao');

    if (category.key === 'key') return Alert.alert('Selecione a categoria');

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const dataKey = `@gofinances:transactions${user.id}`;

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactiontype('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigate('Listagem');
    } catch (error) {
      Alert.alert('Não foi possivel salvar');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Cadastro" />

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="sentences"
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionTypeButtonSelect('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionTypeButtonSelect('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionTypes>

            <CategorySelectButton
              testID="button-category"
              title={category.name}
              onPress={handleSelectCategoryModal}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal
          visible={categoryModalOpen}
          animationType="slide"
          testID="modal-category"
        >
          <CategorySelect
            closeSelectCategory={handleSelectCategoryModal}
            category={category}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
