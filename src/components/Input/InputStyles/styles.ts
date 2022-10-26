
import styled from 'styled-components';

const SimpleInput:any = styled.input`
  border: none;
  background: none;
  color: ${props => props.theme.textColors.color4};
  width:  ${({ inputWidth }: any) => inputWidth || ''};
  max-width: ${({ maxWidth }: any) => maxWidth || ''};
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none !important;
  }
  &:active {
    background: ${props => props.theme.bgColors.color34}

  }

  &:disabled {
    background: ${props => props.theme.bgColors.color34}
  }
`;

export {
    SimpleInput
};