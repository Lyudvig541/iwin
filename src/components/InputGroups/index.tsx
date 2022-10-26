import Input from '../Input';
import PayoutInput from '../Input/payoutInput';
import MultiplicationButtons from './components/MultiplicationButtons';
import { TittleStyle } from '../Text/TextStyles/styles';
import Image from 'next/image';
import {
    Buttons,
    ButtonsGroup,
    InputComponents,
    InputGroup,
    Multiplier,
    PayoutComponents,
    Percent
} from './InputGroupsStyle/styles';

import DownIcon from '../../assets/icons/down.svg';
import UpIcon from '../../assets/icons/up.svg';
import SwapIcon from '../../assets/icons/swap.svg';
import SwapLight from '../../assets/icons/swapLight.svg';
import UpLight from '../../assets/icons/upLight.svg';
import DownLight from '../../assets/icons/downLight.svg';

import { IInputGroups } from '../../interface/components-ts/imput-ts/IImputGroupes';

const InputGroups = ({
    borderRadius,
    background,
    disable,
    multiplier,
    type,
    step,
    value,
    maxValue = 10,
    minValue = 0,
    player,
    text,
    maxWidth,
    percent,
    width,
    inputWidth,
    setValue = () => {},
    changePlayer = () => {},
    setInfluenceBalance = () => {},
    lightMode,
    balance,
    height
}:IInputGroups) => {


    const plus = () => {

        setValue(maxValue < (Number(value) || 0) + step ? maxValue : (Number(value) || 0) + step);

    };
    const minus = () => {

        setValue(minValue > (Number(value) || 0) - step ? minValue : (Number(value) || 0) - step);

    };


    return <InputGroup
        disable={disable}
        borderRadius={borderRadius}
        background={background}
        text={text}
        width={width}
        height={height}
    >
        {text
            ? <PayoutComponents
                disable={disable}
                multiplier={multiplier}
                text={text}
            >
                <PayoutInput
                    maxWidth={maxWidth}
                    disable={disable}
                    value={value}
                />
                <TittleStyle lineHeight={'25px'}>{text}</TittleStyle>
            </PayoutComponents>
            : <InputComponents
                disable={disable}
                multiplier={multiplier}
            >
                {multiplier && <Multiplier>X</Multiplier>}
                <Input
                    setInfluenceBalance={setInfluenceBalance}
                    maxWidth={maxWidth || ''}
                    disable={disable}
                    type="number"
                    minValue={minValue}
                    maxValue={maxValue}
                    step={step}
                    value={value}
                    setValue={setValue}
                    inputWidth={inputWidth}
                    balance={balance}
                />
                {percent && <Percent>%</Percent>
                }
                <ButtonsGroup>
                    {type === 'MultiplicationButtons'
                        ? <MultiplicationButtons
                            setInfluenceBalance={setInfluenceBalance}
                            disable={disable}
                            maxValue={maxValue}
                            minValue={minValue}
                            value={value}
                            setValue={setValue}
                            balance={balance}
                        />
                        : <Buttons playerWidth={player}>
                            {player
                                ? <Image
                                    onClick={() => changePlayer(value)}
                                    src={lightMode ? SwapLight : SwapIcon}
                                    width={lightMode ? 22:33}
                                    height={40}
                                    alt={'...'}
                                /> : <>
                                    <Image
                                        onClick={() => plus()}
                                        src={lightMode ? UpLight : UpIcon}
                                        width={lightMode ? 14 : 28}
                                        height={lightMode ? 18 : 20}
                                        alt={'...'}
                                    />
                                    <Image
                                        onClick={() => minus()}
                                        src={lightMode ? DownLight : DownIcon}
                                        width={lightMode ? 14 : 28}
                                        height={lightMode ? 18 : 20}
                                        alt={'...'}
                                    />
                                </>}
                        </Buttons>}
                </ButtonsGroup>
            </InputComponents>}
    </InputGroup>;

};

export default InputGroups;