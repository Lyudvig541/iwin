import styled from 'styled-components';

const GameRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;  
  margin: 20px 0 0 0 ;
  gap: ${({ gap }: { gap?: any }) => gap || '16px'};
  }
`;

const BetButton = styled.div`
  height: 48px;
  width: 248px;

  button {
    max-width: 248px;
    width: 248px;

  }
`;
const InputWithLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ pt }: { pt?: any }) => pt || 'auto'};
`;
const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  font-weight: 660;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};
  padding-bottom: 13px;
`;

const CountText = styled.div`
  width: 100%;
  color: ${props => props.theme.textColors.color12};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
`;
const Risk = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${props => props.theme.bgColors.color8};
  height: 48px;
  width: ${({ width }: { width: any }) => width || '54px'};
  border-radius: 6px;
`;

const SelectBlock: any = styled.div`
  width: 100%;
  display: ${({ op }: { op: number }) => (!!op && 'flex') || 'none'};
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 6px rgba(19, 5, 45, 0.08);
  border-radius: 10px;
  position: absolute;
  padding: 12px 16px;
  top: 110%;
  right: 0;
  opacity: ${({ op }: { op: number }) => op};
  transition: 1s;
  z-index: 222;
  background-color: ${props => props.theme.bgColors.color2};
  color: ${props => props.theme.textColors.color3};
`;
const OptionBlock: any = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 15px;

  &:hover {
    background: ${props => props.theme.buttonColors.mix1};
    color: ${props => props.theme.bgColors.white};
    border-radius: 6px;
    cursor: pointer;
  }
`;
const ArrowBlock = styled.span`
  display: flex;
  align-items: center;
`;
const GettingOption = styled.span`
  width: 90%;
  color: ${props => props.theme.textColors.color3};
`;
const Arrow = styled.button`
  width: 10%;
  padding: 2%;
  border: none;
  background: none;
`;

const ButtonMini = styled.div`
  height: 15px;
`;
const ButtonPick = styled.button`
  margin-top: 25px;
  width: 118px;
  background-color: inherit;
  height: 48px;
  border: 2px solid;
  border-radius: 100px;
  text-decoration: inherit;
  color: ${props => props.theme.buttonColors.borderColor2};
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;
const ButtonClear = styled.button`
  margin-top: 25px;
  width: 118px;
  background-color: inherit;
  height: 48px;
  border: 2px solid;
  border-color: ${props => props.theme.bgColors.color48};
  border-radius: 100px;
  color: ${props => props.theme.textColors.color1};
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.bgColors.color48};
  }
`;

export {
    GameRow,
    InputWithLabel,
    Label,
    Risk,
    CountText,
    SelectBlock,
    OptionBlock,
    GettingOption,
    Arrow,
    ArrowBlock,
    BetButton,
    ButtonMini,
    Column,
    ButtonPick,
    ButtonClear
};