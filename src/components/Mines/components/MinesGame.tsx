import styled from 'styled-components';
import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputGroups from '../../InputGroups';
import MineBlocks from './MineBlocks';
import PercentShowBlocks from './PercentShowBlocks';
import WinningModal from '../../Modals/WinningModal';
import Image from 'next/image';

import BombCount from '../../../assets/images/bomb-count.svg';
import useGameConfigs from '../../../hooks/useGameConfigs';
import ConnectAndBetButton from '../../GameConnectAndBet/ConnectAndBetButton';

import { IRealMode } from '../../../interface/store-ts/actions/realMode';
import { IMinesPage } from '../../../interface/components-ts/mines-ts/IMinesPage';
import { IState } from '../../../interface/store-ts/actions/lightMode';

import { changeGameResult } from '../../../store/acions/gameResult';
import { changeScoreboard, minesDemo } from '../../../store/acions/mines';
import { minesPersentage } from './minesOpenPercent';
import { minesValues } from '../../../assets/static/static';
import { IMinesState } from '../../../interface/store-ts/redducers/mines';

const { minCountBomb, maxCountBomb } = minesValues;

const MinesGame = ({ balance }: IMinesPage) => {

    const dispatch = useDispatch();

    const [buttonText, setButtonText] = useState('bet');
    const [layerStopSelectMines, setLayerStopSelectMines] = useState(true);
    const [clickedMine, setClickedMine] = useState(false);
    const [disable, setDisable] = useState(false);
    const [finish, setFinish] = useState(false);
    const [numberOfMines, setNumberOfMines] = useState(5);
    const [clickedCount, setClickedCount] = useState(0);
    const [coefficient, setCoefficient] = useState(0);
    const [betAmount, setBetAmount] = useState(20);

    const mines = useSelector((state: { mines: IMinesState}) => state.mines.mines);
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const { lightMode } = useSelector((state: IState) => state.lightMode);
    
    const countOfBlocks = useMemo(() => 25, []);
    const coefficients = useMemo(() =>
        mines.slice(0, countOfBlocks - numberOfMines),
    [countOfBlocks, numberOfMines, mines]);
    
    const { minBet, maxBet, edge } = useGameConfigs('mines');

    const runGame = () => {

        if (!realMode) {

            setDisable(true);
            buttonBetSubmit();

        }

    };
    const ifMineBlockAlert = (getBlockMine: boolean) => {

        setDisable(false);

        if (!getBlockMine) {

            setButtonText('bet');
            setClickedCount(0);
            setFinish(true);
            setLayerStopSelectMines(true);
            dispatch(changeGameResult('mines', false));

        } else {

            setClickedCount(clickedCount + 1);
            setCoefficient(minesPersentage[numberOfMines - 1]['percent'][coefficients[clickedCount]?.id]);
            dispatch(changeScoreboard({ mines: numberOfMines, diamond : (countOfBlocks - numberOfMines - clickedCount - 1) }));
            (clickedCount === countOfBlocks - numberOfMines) && setFinish(true);
        
        }

    };
    const buttonBetSubmit = () => {

        if (buttonText === 'bet') {

            dispatch(changeScoreboard({ mines: numberOfMines, diamond : (countOfBlocks - numberOfMines) }));
            setClickedMine(false);
            setButtonText('Cash Out');
            setLayerStopSelectMines(false);
            setFinish(false);
            dispatch(minesDemo({ numberOfMines }));
            setClickedCount(0);

        } else {

            setFinish(true);
            setButtonText('bet');
            setLayerStopSelectMines(true);
            setClickedCount(0);
            setDisable(false);
            dispatch(changeGameResult('mines', true));

        }
    
    };
    const changeMinesCount = (value: number) => {

        layerStopSelectMines && setNumberOfMines(value);
        dispatch(changeScoreboard({ mines: numberOfMines, diamond : countOfBlocks - numberOfMines }));

    
    };

    useEffect(() => {


        dispatch(minesDemo({ numberOfMines }));
        dispatch(changeScoreboard({ mines: numberOfMines, diamond : countOfBlocks - numberOfMines }));

    }, [dispatch, numberOfMines]);


    return (
        <MinesContent>
            <MinesBlock>
                {mines.map((mine) => (
                    <MineBlocks
                        key={mine.id}
                        ifMine={mine.mine}
                        ifMineBlockAlert={ifMineBlockAlert}
                        setClickedCount={setClickedCount}
                        clickedCount={clickedCount}
                        disable={disable}
                        finish={finish}
                        layerStopSelectMines={layerStopSelectMines}
                        setClickedMine={setClickedMine}
                        countOfDiamonds={countOfBlocks - numberOfMines}
                    />
                ))}
                <WinningModal
                    open={finish && !clickedMine}
                    coefficient={coefficient}
                    amount={coefficient * betAmount}
                />
            </MinesBlock>
            <Parameters>
                <InputWithLabel>
                    <Label>Mines</Label>
                    <BombsCount>
                        <Bomb>
                            <Image 
                                src={BombCount}
                                alt={'bomb'} 
                                width={'48px'} 
                                height={'48px'}
                            />
                        </Bomb>
                        <InputGroups
                            lightMode={lightMode}
                            value={numberOfMines}
                            setValue={(value: number) => {

                                changeMinesCount(value);

                            }}
                            disable={!layerStopSelectMines}
                            borderRadius="6px"
                            step={1}
                            width={'242px'}
                            height={'48px'}
                            maxValue={maxCountBomb}
                            minValue={minCountBomb}
                        />
                    </BombsCount>
                </InputWithLabel>
                <PercentShowBlocks
                    numberOfMines={numberOfMines}
                    clickedCount={clickedCount}
                    coefficients={coefficients}
                />
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
                            step={edge}
                            type="MultiplicationButtons"
                            maxWidth="128px"
                            balance={balance}
                            height={'48px'}
                        />
                    </InputWithLabel>
                </BetAmount>
                <BetButton>
                    <ConnectAndBetButton
                        runGame={runGame}
                        influenceBalance={false}
                        buttonName={buttonText}
                        disable={disable}
                    />
                </BetButton>
            </Parameters>
        </MinesContent>
    );

};

const MinesContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 65px 0 25px 0;
  width: 917px;
  @media (max-width: 1440px) {
    padding-left: 32px;
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    margin: 16px auto;
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 343px;
    margin: 0 auto;
  }
`;
const Parameters = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 334px;
  height: 482px;
  margin-left: 34px;
  border-radius: 10px;
  background: ${props => props.theme.bgColors.color36};
  width: 100%;
  padding: 32px 16px;
  @media (max-width: 1440px) {
    margin-left: 0;
  }
  @media (max-width: 1200px) {
    margin-left: 34px;
  }
  @media (max-width: 900px) {
    max-width: 343px;
    margin: 16px auto;
    padding: 0 16px;
    height: 376px;
  }
  @media (max-width: 500px) {
    margin: 0 auto;
    height: 376px;
    border-radius: 0;
  }
`;
const MinesBlock: any = styled.div`
  max-width: 485px;
  width: 100%;
  height: 482px;
  @media (max-width: 972px) {
  @media (max-width: 972px) {
    max-width: 448px;
  }
  @media (max-width: 500px) {
    height: 340px;
    max-width: 331px;
    padding-left: 11px;
  }
`;
const InputWithLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  order: 1;
  @media (max-width: 900px) {
    order: 2;
    margin-bottom: 16px;
  }
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
const BetAmount = styled.div`
  order: 3;
`;
const BetButton = styled.div`
  order: 4;
  display: flex;
  justify-content: center;
  margin-top: 48px;

  button {
    height: 48px;
    width: 100%;
  }

  @media (max-width: 900px) {
    margin: 8px auto;
    button {
      height: 48px;
      width: 215px
    }
  }
`;

export default MinesGame;