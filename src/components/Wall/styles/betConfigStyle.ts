import styled from 'styled-components';


const BetControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 334px;
  height: 394px;
  background: ${props => props.theme.bgColors.color36};
  border-radius: 10px;
  @media (max-width: 586px) {
    max-width: 343px;
    width: 100%;
    border-radius: 0;
    height: 298px;
  }
`;
const BetButton = styled.div`
  position: relative;
  margin-left: 10px;
  margin-top: 64px;
  @media (max-width: 586px) {
    margin-top: 24px;
  }
`;

const BetInput: any = styled.div`
  margin: 32px auto 0;
  width: max-content;
  text-align: start;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 586px) {
    margin: 24px auto 24px;
  }
`;
const BetAmount = styled.div`
  margin-top: 50px;
  @media (max-width: 586px) {
    margin-top: 24px;
  }
`;
const InputWithLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Label = styled.label`
  display: flex;
  font-weight: 660;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};
  padding-bottom: 13px;
`;
const BombsCount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const Bomb = styled.div`
  border-radius: 6px;
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.bgColors.color8};
`;

const CountText = styled.div`
  width: 100%;
  color: ${props => props.theme.textColors.color12};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
`;
const BananaCount = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${props => props.theme.bgColors.color8};
  height: 48px;
  width: 242px;
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
const GetiengOption = styled.span`
  width: 90%;
  color: ${props => props.theme.textColors.color3};;
`;
const Arrow = styled.button`
  width: 10%;
  padding: 2%;
  border: none;
  background: none;
`;

export {
    BetControl,
    BetInput,
    BetButton,
    BetAmount,
    InputWithLabel,
    Label,
    BombsCount,
    Bomb,
    BananaCount,
    CountText,
    SelectBlock,
    OptionBlock,
    GetiengOption,
    Arrow,
    ArrowBlock
};