import styled from 'styled-components';
import { IMultiplication } from '../../../interface/components-ts/imput-ts/IImputGroupes';


const MultiplicationButtons = ({
    disable,
    maxValue,
    minValue,
    setValue,
    value,
    balance,
    setInfluenceBalance
}:IMultiplication) => {

    const min = () => {

        if (!disable && balance) {

            if (minValue > balance) {

                setValue(minValue);
                setInfluenceBalance(true);

            }else{

                setValue(minValue);
                setInfluenceBalance(false);

            }


        } else {

            setValue('0');

        }

    };

    const half = () => {

        if (!disable && balance) {

            setValue(value * 0.5 < minValue ? minValue : value * 0.5);

        } else {

            setValue('0');

        }

    };

    const fourFold = () => {

        if (!disable && balance) {

            setValue((value * 2 > balance || value * 2 > maxValue) ? (balance > maxValue ? maxValue : balance) : value * 2);
            setInfluenceBalance(value * 2 < minValue);

        } else {

            setValue(minValue);

        }

    };

    const max = () => {

        if (!disable && balance) {

            setValue(maxValue > balance ? balance : maxValue);
            setInfluenceBalance(false);

        } else {

            setValue('0');

        }

    };

    return <ButtonsGroup disable={disable}>
        <Button onClick={min} disable={disable}>
            Min
        </Button>
        <Button onClick={half}>
            1/2
        </Button>
        <Button onClick={fourFold}>
            2x
        </Button>
        <Button onClick={max}>
            Max
        </Button>
    </ButtonsGroup>;

};

const ButtonsGroup: any = styled.div`
  display: flex;
  height: 100%;
  ${({ disable }: any) => disable && `
    & button {
        background: ${(props: any) => props.theme.bgColors.color23};
        cursor: default;
    }
  `}
`;
const Button: any = styled.button`
  background: ${props => props.theme.bgColors.color1};
  border-radius: 5px;
  color: ${props => props.theme.textColors.color3};
  border: 0;
  padding: 5px;
  width: 36px;
  height: 36px;
  margin-left: 4px;
  cursor: pointer;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 25px;
  ${({ disable }: any) => disable && `
    & button {
        background: ${(props: any) => props.theme.bgColors.color35};
        cursor: default;
    }
  `}
`;

export default MultiplicationButtons;