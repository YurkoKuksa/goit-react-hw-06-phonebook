import React from 'react';
import {
  ButtonSbm,
  List,
  ParaghNumber,
  Paragraph,
} from './ContactsList.styled';

export const ContactsList = ({ filterNames, onDeleteUser }) => {
  return (
    <ul>
      {filterNames.map(({ id, name, number }) => (
        <List key={id} name={filterNames}>
          <Paragraph>{name}:&nbsp; </Paragraph>
          <ParaghNumber> {number} &nbsp;</ParaghNumber>
          <ButtonSbm onClick={() => onDeleteUser(id)} type="button">
            Delete
          </ButtonSbm>
        </List>
      ))}
    </ul>
  );
};
