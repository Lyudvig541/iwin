import React, { useMemo, useState } from 'react';
import * as Settings from './styles/settingsStyle';
import Select from './bet-config/Select';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../interface/store-ts/actions/lightMode';
import InputGroups from '../InputGroups';
import { useGetBalance } from '../../hooks/useGetBalance';
import { IRealMode } from '../../interface/store-ts/actions/realMode';
import { ThemeNew } from '../../constants/themeNew';
import ButtonGroup from './bet-config/ButtonGroup';
import { IKenoSettings } from '../../interface/components-ts/keno-ts/IKeno';
import { IKenoList } from '../../interface/store-ts/redducers/keno';
import {
    clearUserCheckList,
    clearWInList,
    generateRandomCheck
} from '../../store/acions/keno';

const KenoSettings = ({ 
    setOpenWinModal, 
    setStart, 
    runGame, 
    risk, 
    setRisk, 
    setStartGame, 
    setCheckCount, 
    checkCount
}: IKenoSettings) => {
    
    const dispatch = useDispatch();
    const balance = useGetBalance();
    
    const { lightMode } = useSelector((state: IState) => state.lightMode);
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const { riskButton, isWin, autoPicks } = useSelector((state: IKenoList) => state.keno);


    const [value, setValue] = useState(0);
    const [, setInfluenceBalance] = useState(false);
    const [buttonText, setButtonText] = useState('bet');
    const [option, setOption] = useState(autoPicks[1].text);

    const inputBackground = useMemo(() =>
        (lightMode && ThemeNew.lightMode.bgColors.color43) || ThemeNew.lightMode.bgColors.color43,
    [lightMode]);


    const checkRandom = (number: number) => {

        dispatch(clearWInList());
        dispatch(clearUserCheckList());
        dispatch(generateRandomCheck(number));
        setCheckCount(number);
    
    };

    const clearChecks = () => {

        setOpenWinModal(false);
        setStartGame(false);
        setStart(true);
        setCheckCount(0);
        setButtonText('bet');
        dispatch(clearWInList());
        dispatch(clearUserCheckList());

    };

    return <Settings.Column pt={'350px'}>
        <Settings.GameRow gap={'24px'} a={'column'}>
            <Settings.InputWithLabel>
                <Settings.Label>Bet Amount</Settings.Label>
                <InputGroups
                    minValue={1}
                    maxValue={12}
                    value={value}
                    setValue={setValue}
                    disable={!realMode}
                    borderRadius="4px"
                    step={0.1}
                    type="MultiplicationButtons"
                    maxWidth="128px"
                    balance={balance}
                    height={'48px'}
                    setInfluenceBalance={setInfluenceBalance}
                    background={inputBackground}
                />
            </Settings.InputWithLabel>
            <Settings.ButtonMini>
                <ButtonGroup
                    runGame={runGame}
                    setOpenWinModal={setOpenWinModal}
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    disable={!checkCount}
                    setDisable={setStart}
                />
            </Settings.ButtonMini>
        </Settings.GameRow>
        <Settings.GameRow gap={'24px'}>
            <Settings.GameRow >
                <Select 
                    lightMode={lightMode} 
                    text={'Risk'} 
                    width={'200px'} 
                    isWin={isWin} 
                    data={riskButton} 
                    option={risk} 
                    setOption={setRisk}
                />
                <Select 
                    lightMode={lightMode} 
                    text={'Auto Pick'} 
                    width={'86px'} 
                    isWin={isWin} 
                    data={autoPicks} 
                    option={option} 
                    setOption={setOption}
                />
            </Settings.GameRow>
            <Settings.GameRow>
                <Settings.ButtonPick onClick={() => checkRandom(+option)}>AUTO PICK</Settings.ButtonPick>
                <Settings.ButtonClear onClick={() => clearChecks()}>CLEAR TABLE</Settings.ButtonClear>
            </Settings.GameRow>
        </Settings.GameRow>
    </Settings.Column>;

};

export default KenoSettings;