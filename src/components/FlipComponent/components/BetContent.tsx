import styled from 'styled-components';
import { TextStyle } from '../../Text/TextStyles/styles';
import InputGroups from '../../InputGroups';
import ChoosePart from './ChoosePart';
import Button from '../../Button/Button';
import { IBetContent } from '../../../interface/components-ts/flip-ts/IFlipPage';

const BetContent = ({
    active,
    changeCoin,
    winClassName,
    isRolling,
    result, 
    isClick, 
    setValue, 
    value, 
    disable,
    addHistory
}: IBetContent) => <BetContainer>
    <ChoosePart
        active={active}
        changeCoin={changeCoin}
        winClassName={winClassName}
        isRolling={isRolling}
        result={result}
        isClick={isClick}
    />
    <BetControl>
        <TextStyle
            fontSize="12px"
            color="#ffffff"
            margin="0 0 16px 0"
            weight="bold"
        >Bet Amount</TextStyle>
        <InputGroups
            value={value}
            setValue={setValue}
            disable={disable}
            minValue={5}
            maxValue={100}
            borderRadius="4px"
            step={0.1}
            type="MultiplicationButtons"
            maxWidth="128px"
        />
    </BetControl>
    <BetButton>
        <Button
            onClick={addHistory}
            secondary
            disabled={disable}
        >{`BET ${active.toUpperCase()}`}
        </Button>
    </BetButton>
</BetContainer>;

export default BetContent;

const BetContainer = styled.div`
  margin: 60px 64px 0 32px;

  display: grid;
     @media (max-width: 1400px){
       margin: 0 50px 0 20px;
     }
     @media (max-width: 1350px){
       margin: 0 40px 0 20px;
     }
     @media (max-width: 1320px){
       width: 100%;
       margin: 0 40px 0 8px;
     }
     @media (max-width: 768px){
       margin: 0;
       order: 2;
       width: 100%;
     }
`;

const BetControl = styled.div`
  margin: 45px auto 56px;
  width: max-content;
  text-align: start;
  @media (max-width: 1400px){
    margin: 70px auto 56px;
  }

  @media (max-width: 768px){
    margin: 60px auto 32px;
  }
`;
const BetButton = styled.div`
    display: flex;
    justify-content: center;
`;