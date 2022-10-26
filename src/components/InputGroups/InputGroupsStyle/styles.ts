import styled from 'styled-components';

const InputGroup:any = styled.div`
  display: flex;
  border-radius: 5px;
  background: ${({ disable, text, theme }: any) => disable ? text ? 'none' : theme.bgColors.color34 : theme.bgColors.color1};
  align-items: center;
  width: ${({ width }: any) => width ? width : '' };
  max-width: 302px;
  height:  ${({ height }: any) => height ? height : '54px' };
  @media(max-width: 586px) {
    max-width: none;
  }
  
  &:focus-within {
    background: ${props => props.theme.buttonColors.mix1};
  }
`;
const ButtonsGroup = styled.div`
  display: flex;
`;
const Multiplier = styled.span`
  color: ${props => props.theme.textColors.color1};
  margin-left: 2px;
  font-size: 14px;
`;
const Percent = styled.span`
  color: ${props => props.theme.textColors.color1};
  margin-left: 2px;
  font-size: 14px;
`;
const InputComponents:any = styled.div`
  display: flex;
  background: ${({ disable, text, theme }: any) => disable ? text ? 'none' : theme.bgColors.color34 : theme.bgColors.color8};
  align-items: center;
  padding: 9px 6px 9px 16px;
  border-radius:5px;
  height: 48px;
  width: 100%;
  &:focus-within {
    background: ${({ disable, theme }:any) => disable ? theme.bgColors.color34 : theme.bgColors.color9};
}
`;
const PayoutComponents:any = styled.div`
  display: flex;
  background: ${({ disable, theme }: any) => disable ? 'none' : theme.bgColors.color7};
  border: 2px solid ${props => props.theme.bgColors.color6};
  width: 300px;
  align-items: center;
  justify-content: end;
  padding: 5px;
  border-radius:5px;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1158px) {
    width: 300px;
  }
  @media (max-width: 970px) {
    max-width: 250px;
  }
  @media (max-width: 676px) {
    width: 215px;
  }
  @media (max-width: 586px) {
    max-width: 100%;
    width: 100%;
  }
`;
const Buttons: any = styled.div`
  background: ${({ disable, theme }: any) => disable ? theme.bgColors.color7 : theme.bgColors.color5};
  flex-direction: column;
  align-items: center;
  border-radius:5px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  width: ${({ playerWidth }:any) => playerWidth ? '33px': '28px'};
  //height: 40px;
  &:focus-within {
    background: ${props => props.theme.buttonColors.mix1};
  }
  img {
    &:hover {
      background: ${props => props.theme.bgColors.color10};
      border-radius:5px;
    }  
  }
`;

export {
    InputGroup,
    ButtonsGroup,
    Buttons,
    InputComponents,
    PayoutComponents,
    Multiplier,
    Percent
};