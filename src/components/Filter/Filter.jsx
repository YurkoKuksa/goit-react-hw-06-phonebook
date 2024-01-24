import { InputStyle, LabelWrapper } from './Filter.styled';

export const Filter = ({ onChange, filter }) => {
  return (
    <LabelWrapper>
      Find contacts by name:&nbsp;
      <InputStyle type="text" value={filter} onChange={onChange} />
    </LabelWrapper>
  );
};
