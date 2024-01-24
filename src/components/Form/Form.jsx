import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { ButtonSbm, FormContainer, InputStyle, LabelCont } from './Form.styled';

export const Form = ({ addName }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newObject = {
      id: nanoid(),
      name: name,
      number: number,
    };
    addName(newObject);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelCont>
        Name: &nbsp;
        <InputStyle
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          required
        />
      </LabelCont>
      <LabelCont>
        Number: &nbsp;
        <InputStyle
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          required
        />
      </LabelCont>
      <ButtonSbm>Add contact</ButtonSbm>
    </FormContainer>
  );
};
