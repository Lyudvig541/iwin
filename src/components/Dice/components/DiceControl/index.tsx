import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import InputGroups from '../../../InputGroups';
import Over from '../../../../assets/icons/role-over.svg';
import OverLight from '../../../../assets/icons/role-over-light.png';
import Under from '../../../../assets/icons/role-under.svg';
import UnderLight from '../../../../assets/icons/role-under-light.png';
import dice from '../../../../assets/icons/dice.svg';
import Button from '../../../Button/Button';
import ConnectAndBetButton from '../../../GameConnectAndBet/ConnectAndBetButton';
import useGameConfigs from '../../../../hooks/useGameConfigs';
import useGameDemo from '../../../../hooks/useGameDdemo';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBalance } from '../../../../hooks/useGetBalance';
import { usePlayAudio } from '../../../../hooks/usePlayAudio';
import { AUDIO_PLAY, diceValues } from '../../../../assets/static/static';
import { changeGameResult } from '../../../../store/acions/gameResult';
import { IState } from '../../../../interface/store-ts/actions/lightMode';
import { IRealMode } from '../../../../interface/store-ts/actions/realMode';

const DiceControl = () => {

    const balance = useGetBalance();
    const dispatch = useDispatch();
    const { minRange, maxRange, defaultValue } = useMemo(() => diceValues, []);
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    const [rollOver, setRollOver] = useState(defaultValue);
    const [underRange, setUnderRange] = useState(true);
    const [multiplier, setMultiplier] = useState(0);
    const [winChance, setWinChance] = useState(0);
    const [betAmount, setBetAmount] = useState(0);
    const [prediction, setPrediction] = useState(defaultValue);
    const [payout, setPayout] = useState(0);
    const [winOrLusSound, setWinOrLusSound] = useState<boolean | null>(null);
    const [influenceBalance, setInfluenceBalance] = useState(false);

    const { winner, play, setButtonDisabled } = useGameDemo();
    const { minBet, maxBet } = useGameConfigs('dice');
    const { realMode } = useSelector((state: IRealMode) => state.realMode);

    const { setSoundName, setStopSound, stopSound } = usePlayAudio();

    const winOrLus = useCallback(() => {

        if (typeof winner === 'number') {

            if (underRange) {

                return 0 <= winner && winner <= rollOver;

            } else {

                return rollOver <= winner && winner <= 100;

            }

        }

        return true;

    }, [underRange, winner]);

    useEffect(() => {

        if (winner !== null) {

            setWinOrLusSound(winOrLus());
            dispatch(changeGameResult('dice', winOrLus()));

        }

    }, [winOrLus]);

    useEffect(() => {

        if (winner !== null) {

            const winOrLus = (winOrLusSound && AUDIO_PLAY.audioDiceWin) || AUDIO_PLAY.audioDiceLose;

            setStopSound(!stopSound);
            setSoundName(winOrLus);
            setButtonDisabled(false);

        }

    }, [winOrLusSound]);

    useEffect(() => {

        rangeChange(rollOver);

    });

    const runGame = () => {

        if (!realMode) {

            setWinOrLusSound(null);
            setSoundName(AUDIO_PLAY.audioDiceRolling);
            play('dice');

        }

    };

    const winChange = (v: number) => {

        const _MaxNumber = maxRange;
        const chance = v / 100;
        let value: number;

        if (!underRange) {

            value = _MaxNumber - _MaxNumber * chance;
            value = v > chanceValue() ? Math.floor(value) : Math.ceil(value);

        } else {

            value = chance * _MaxNumber;
            value = v < chanceValue() ? Math.floor(value) : Math.ceil(value);

        }

        setWinChance(v);
        return rangeChange(value);

    };
    const rangeChange = (rangeValue: any) => {

        const value = rangeValue.target ? rangeValue.target.value : rangeValue;

        setPrediction(value);
        setWinChance(underRange ? value : 100 - value);
        setRollOver(value);
        setMultiplier((0.99 / (underRange ? value : 100 - value)) * 100);
        setPayout(betAmount * multiplier);

    };
    const multiplierChange = (v: number) => {

        const _MaxNumber = 100;
        let value = (0.99 / v) * _MaxNumber;

        if (!underRange) {

            value = 100 - value;
            value = v <= multiplier ? Math.floor(value) : Math.ceil(value);

        } else {

            value = v > multiplier ? Math.floor(value) : Math.ceil(value);

        }

        setMultiplier(v);

        return setPrediction(value);

    };

    const numberFormat = (n: number | string, d = 3) => Number(Number(n).toFixed(d));

    const chanceValue = () => {

        const _MaxNumber = 100;
        let chance;

        if (!underRange) {

            chance = ((_MaxNumber - prediction) / _MaxNumber) * 100;

        } else {

            chance = (prediction / _MaxNumber) * 100;

        }

        return numberFormat(chance, 4);

    };

    return (<>
        <DiceGameBody>
            <Inputs>
                <RollOver>
                    <InputWithLabel>
                        <Label>Roll Over to Win</Label>
                        <InputGroups
                            lightMode={lightMode}
                            changePlayer={() => {

                                setUnderRange(!underRange);

                            }}
                            value={rollOver}
                            setValue={rangeChange}
                            disable={false}
                            player={'over'}
                            borderRadius="4px"
                            step={1}
                        />
                    </InputWithLabel>
                </RollOver>
                <Multiplier>
                    <InputWithLabel>
                        <Label>Multiplier</Label>
                        <InputGroups
                            lightMode={lightMode}
                            value={multiplier}
                            setValue={multiplierChange}
                            disable={false}
                            multiplier={false}
                            borderRadius="4px"
                            step={0.1}
                        />
                    </InputWithLabel>
                </Multiplier>
                <WinChance>
                    <InputWithLabel>
                        <Label>Win Chance</Label>
                        <InputGroups
                            lightMode={lightMode}
                            value={winChance}
                            setValue={winChange}
                            disable={false}
                            percent={true}
                            borderRadius="4px"
                            step={1}
                        />
                    </InputWithLabel>
                </WinChance>
                <PayoutMobile>
                    <InputWithLabel>
                        <Label>Payout</Label>
                        <InputGroups
                            lightMode={lightMode}
                            value={payout}
                            disable={true}
                            text={'ETH'}
                            borderRadius="4px"
                            step={0.1}
                        />
                    </InputWithLabel>
                </PayoutMobile>
            </Inputs>
            <DiceController>
                <RangeBar
                    type={'range'}
                    min={minRange}
                    max={maxRange}
                    step={1}
                    onChange={rangeChange}
                    value={rollOver}
                    underRange={underRange}
                />
                {winner && <PopUp result={winner}>{winner}</PopUp>}
                <RollOverUnderButtons>
                    <Button tertiary padding={'10px 30.5px'} underRange={underRange} onClick={() => setUnderRange(true)}>
                        <ButtonContent >
                            <Image src={lightMode ? UnderLight : Under} alt={'icon'}/>
                            <ButtonText> ROLL UNDER</ButtonText>
                        </ButtonContent>
                    </Button>
                    <PredictionBorder>
                        <PredictionContent>
                            <PredictionText>Prediction</PredictionText>
                            <PredictionCount>{prediction}</PredictionCount>
                        </PredictionContent>
                    </PredictionBorder>
                    <Button tertiary underRange={!underRange} onClick={() => setUnderRange(false)} >
                        <ButtonContent >
                            <Image src={lightMode ? OverLight :Over} alt={'icon'}/>
                            <ButtonText> ROLL OVER</ButtonText>
                        </ButtonContent>
                    </Button>
                </RollOverUnderButtons>
            </DiceController>
        </DiceGameBody>
        <BetControl>
            <BetAmount>
                <InputWithLabel>
                    <Label>Bet Amount</Label>
                    <InputGroups
                        minValue={minBet}
                        maxValue={maxBet}
                        value={betAmount}
                        setValue={setBetAmount}
                        disable={!realMode}
                        borderRadius="4px"
                        step={0.1}
                        type="MultiplicationButtons"
                        maxWidth="128px"
                        setInfluenceBalance={setInfluenceBalance}
                        balance={balance}
                    />
                </InputWithLabel>
            </BetAmount>
            <Payout>
                <InputWithLabel>
                    <Label>Payout</Label>
                    <InputGroups
                        value={payout}
                        disable={true}
                        text={'ETH'}
                        borderRadius="4px"
                        step={0.1}
                    />
                </InputWithLabel>
            </Payout>
        </BetControl>
        <DiceFooter>
            <ConnectAndBetButton
                runGame={runGame}
                influenceBalance={influenceBalance}
                icon={dice}
                iconName={'diceIcon'}
                buttonName={'ROLL DICE'}
            />
        </DiceFooter>
    </>
    );

};

const DiceGameBody = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  @media (max-width: 586px) {
    margin-top: 0;
    padding: 0;
  }
`;
const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "RollNumber Multiplier WinChance";
  gap: 0 85px;
  @media (max-width: 1158px) {
    gap: 0 80px;
  }
  @media (max-width: 970px) {
    gap: 0 40px;
  }
  @media (max-width: 586px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "RollNumber WinChance"
        "Multiplier Payout";
    margin-top: 60px;
    order: 2;
    gap: 0 30px;
    padding: 0 8px ;
  }
`;
const RollOver = styled.div`
  grid-area: RollNumber / RollNumber / RollNumber / RollNumber;
`;
const Multiplier = styled.div`
  grid-area: Multiplier / Multiplier / Multiplier / Multiplier;
  @media (max-width: 586px) {
    margin-top: 32px;
  }
`;
const WinChance = styled.div`
  grid-area: WinChance / WinChance / WinChance / WinChance;
`;
const BetAmount = styled.div``;
const Payout = styled.div`
  @media (max-width: 586px) {
    display: none;
  }
`;
const PayoutMobile = styled.div`
  display: none;
  @media (max-width: 586px) {
    display: grid;
    grid-area: Payout / Payout / Payout / Payout;
    margin-top: 32px;
  }
`;
const InputWithLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 302px;
`;
const Label = styled.label`
  font-weight: 660;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};
  padding-bottom: 13px;
  padding-left: 5px;
`;
const DiceController = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${props => props.theme.bgColors.color11};
  border-radius: 6px;
  margin-top: 32px;
  padding: 0 32px;
  @media (max-width: 586px) {
    padding: 0 8px 38px 8px;
    margin: 0 8px;
    order: 1;
  }
`;
const RangeBar: any = styled.input`
  overflow: visible;
  display: block;
  border-radius: 100px;
  appearance: none;
  width: 100%;
  margin: 51px 0 30px 0;
  cursor: pointer;
  height: 12px;

  &::-webkit-slider-runnable-track {
    position: relative;
    width: 100%;
    height: 12px;
    border-radius: 100px;
    border: none;
    background-image: ${props => props.theme.buttonColors.mix1};
    background-size: ${({ underRange, value }: any) => underRange ? `${value}% 100%` : `${100 - value}% 100%`};
    background-position: ${({ underRange }: any) => underRange ? 0 : '100%'};
    background-color: ${props => props.theme.bgColors.color22};
    background-repeat: no-repeat;
  }

  &::-moz-range-track {
    position: relative;
    width: 100%;
    height: 12px;
    border-radius: 100px;
    border: none;
    background-image: ${props => props.theme.buttonColors.mix1};
    background-size: ${({ underRange, value }: any) => underRange ? `${value}% 100%` : `${100 - value}% 100%`};
    background-position: ${({ underRange }: any) => underRange ? 0 : '100%'};
    background-color: ${props => props.theme.bgColors.disabled};
    background-repeat: no-repeat;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 4px solid ${props => props.theme.bgColors.white};
    border-radius: 100%;
    cursor: pointer;
    background-image: ${props => props.theme.buttonColors.mix1};
    transition: background-color 150ms;
    transform: translate(0, -6px);
    background-color: ${props => props.theme.buttonColors.buttonColor2};
    z-index: 2;
    box-shadow: inset 0px -1px 5px 5px ${props => props.theme.bgColors.color22}
  }

  &::-moz-range-thumb {
    position: relative;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 4px solid ${props => props.theme.textColors.color1};
    border-radius: 100%;
    cursor: pointer;
    background-image: ${props => props.theme.buttonColors.mix1};
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: 12px;
    border: 0;
    color: transparent;
    background: transparent;
  }
  @media (max-width: 586px) {
    margin: 30px 0;
  }
`;
const RollOverUnderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  padding-bottom: 24px;
  @media (max-width: 586px) {
    top: 35px;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  border-radius: 100px;
  background: transparent;
  justify-content: center;
  align-items: center;
  
   @media (max-width: 700px) {
     &:focus {
       background: ${props => props.theme.buttonColors.buttonColors};
       border: 2px solid${props => props.theme.bgColors.color22};
       box-sizing: border-box;
       border-radius: 100px;
     }
  }
`;

const ButtonText = styled.span`
  display: flex;
  font-weight: 600;
  font-size: 12px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.color1};
  @media (max-width: 700px) {
    display: none;
  }
`;
const PredictionBorder = styled.div`
  display: flex;
  border-radius: 4px;
  border: 2px solid transparent;
  background: ${props => props.theme.buttonColors.mix16};
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
const PredictionContent = styled.div`
  display: flex;
  border-radius: 4px;
  background: ${props => props.theme.bgColors.color2};
  width: 200px;
  height: 82px;
  text-align: center;
  flex-direction: column;
  @media (max-width: 586px) {
    width: 148px;
  }
`;
const PredictionText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.color3};
  padding-top: 16px;
`;
const PredictionCount = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${props => props.theme.textColors.color1};
`;
const BetControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  @media (max-width: 1440px) {
    gap: 80px;
  }
  @media (max-width: 1320px) {
    padding: 0 22px;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
  @media (max-width: 700px) {
    gap: 40px;
  }
  @media (max-width: 586px) {
    order: 3;
    justify-content: center;
    padding: 0;
  }
`;
const DiceFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  @media (max-width: 586px) {
    order: 3;
    margin: 24px 0 34px;
  }
`;

const PopUp: any = styled.span`
  position: absolute;
  padding: 8px 30px 8px 30px;
  color: ${(props: any) => props.theme.textColors.color1};
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  text-shadow: 0 4px 4px ${props => props.theme.textColors.color5};
  border: 2px solid ${props => props.theme.bgColors.color20};
  border-radius: 100px;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 0.5s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 0.8s;
  left: calc(${({ result }:any) => result >= 50 ? `${result}% - ${(result) * 0.8}px` : ''});
  right: calc(${({ result }:any) => result < 50 ? `${100 - result}% - ${(100 - result) * 0.8}px` : ''});

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -27.5%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.theme.bgColors.color20} transparent transparent transparent;
  }

  @keyframes example {
    0% {
      ${({ result }:any) => result > 50 ? 'left : 0' : 'right: 0'}
    }
    30% {
      left: calc(${({ result }:any) => result >= 50 ? `${result}% - ${(result) * 0.8}px` : ''});
      right: calc(${({ result }:any) => result < 50 ? `${100 - result}% - ${(100 - result) * 0.8}px` : ''});
    }
    100% {
      left: calc(${({ result }:any) => result >= 50 ? `${result}% - ${(result) * 0.8}px` : ''});
      right: calc(${({ result }:any) => result < 50 ? `${100 - result}% - ${(100 - result) * 0.8}px` : ''});
    }
  }
  @media (max-width: 586px) {
    left: calc(${({ result }:any) => result >= 50 ? `${result}% - ${(result) * 0.7}px` : ''});
    right: calc(${({ result }:any) => result < 50 ? `${100 - result}% - ${(100 - result) * 0.6}px` : ''});
    @keyframes example {
      0% {
        ${({ result }:any) => result > 50 ? 'left : 0' : 'right: 0'}
      }
      30% {
        left: calc(${({ result }:any) => result >= 50 ? `${result}% - ${(result) * 0.7}px` : ''});
        right: calc(${({ result }:any) => result < 50 ? `${100 - result}% - ${(100 - result) * 0.6}px` : ''});
      }
      100% {
        left: calc(${({ result }:any) => result >= 50 ? `${result}% - ${(result) * 0.7}px` : ''});
        right: calc(${({ result }:any) => result < 50 ? `${100 - result}% - ${(100 - result) * 0.6}px` : ''});
      }
    }
  }
`;

export default DiceControl;