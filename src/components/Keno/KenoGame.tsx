import React, { useMemo, useState } from 'react';
import * as Keno from './styles/gameStyle';
import { useDispatch, useSelector } from 'react-redux';
import { generateWinNumbers } from '../../store/acions/keno';
import { IKenoList } from '../../interface/store-ts/redducers/keno';
import Image from 'next/image';
import DarkTable from '../../assets/images/keno-table-dark.png';
import LightTable from '../../assets/images/keno-table-light.png';
import { IState } from '../../interface/store-ts/actions/lightMode';
import KenoSettings from './KenoSettings';
import WinningModal from '../Modals/WinningModal';
import BlockOfNums from './KenoBlockOfNums';
import { coefficientKenoShow } from '../../utils/randomCheckKeno';

const KenoGame = () => {

    const dispatch = useDispatch();
    const { kenoList, riskButton } = useSelector((state: IKenoList) => state.keno);
    const { lightMode } = useSelector((state: IState) => state.lightMode);

    const [startGame, setStartGame] = useState(false);
    const [startNewGame, setStart] = useState(true);
    const [openWinModal, setOpenWinModal] = useState(false);
    const [risk, setRisk] = useState(riskButton[1].text);
    const [checkCount, setCheckCount] = useState(0);
    const randomCheck = useMemo(() => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []);
    const coefficients = useMemo(() =>
        checkCount > 0 && [...coefficientKenoShow[risk][checkCount-1].xList],
    [checkCount, risk]
    );

    const runGame = () => {

        dispatch(generateWinNumbers(risk));
        setStartGame(true);
        setStart(false);

    };

    return <>
        <Keno.GameBlock>
            <WinningModal
                open={openWinModal}
                coefficient={1}
                amount={0}
                width={'90%'}
                widthM={'90%'}
                height={'500px'}
                pt={'150px'}
            />
            <Keno.Coefficients>
                <Keno.Title>
                    <Keno.Line/>
                    <Image
                        src={lightMode ? LightTable : DarkTable}
                        alt={'bomb'}
                        width={'24px'}
                        height={'24px'}
                    />
                    <Keno.Text>
                        PAY TABLE
                    </Keno.Text>
                </Keno.Title>
                <Keno.CoefficientRows>
                    {coefficients && (<Keno.CoefficientsValues>
                        <Keno.CoeffMobile>
                            <Keno.CoeffMobileFive order={2}>
                                {coefficients.reverse().map((coff) =>
                                    coff.id > 5 && <Keno.CoefficientRows key={coff.id * 100}>
                                        <Keno.Numbers key={coff.id * 1000}>{coff.id}</Keno.Numbers>
                                        <Keno.Values key={coff.id}>{coff.x}</Keno.Values>
                                    </Keno.CoefficientRows>)}
                            </Keno.CoeffMobileFive>
                            <Keno.CoeffMobileFive order={1}>
                                {coefficients.map((coff) =>
                                    coff.id <= 5 && <Keno.CoefficientRows key={coff.id * 31}>
                                        <Keno.Numbers key={coff.id * 31}>{coff.id}</Keno.Numbers>
                                        <Keno.Values key={coff.id * 33}>{coff.x}</Keno.Values>
                                    </Keno.CoefficientRows>
                                )}
                            </Keno.CoeffMobileFive>
                        </Keno.CoeffMobile>
                    </Keno.CoefficientsValues>) ||
                        <Keno.CoefficientsValues>
                            <Keno.CoeffMobile>
                                <Keno.CoeffMobileFive order={2}>
                                    {randomCheck.map((number) =>
                                        number > 5 && <Keno.CoefficientRows key={number * 19}>
                                            <Keno.Numbers key={number * 29}>{number}</Keno.Numbers>
                                            <Keno.Values key={number}>{'-'}</Keno.Values>
                                        </Keno.CoefficientRows>)}
                                </Keno.CoeffMobileFive>
                                <Keno.CoeffMobileFive order={1}>
                                    {randomCheck.map((number) =>
                                        number <= 5 && <Keno.CoefficientRows key={number * 19}>
                                            <Keno.Numbers key={number * 29}>{number}</Keno.Numbers>
                                            <Keno.Values key={number}>{'-'}</Keno.Values>
                                        </Keno.CoefficientRows>)}
                                </Keno.CoeffMobileFive>
                            </Keno.CoeffMobile>
                        </Keno.CoefficientsValues>
                    }
                </Keno.CoefficientRows>
            </Keno.Coefficients>
            <Keno.GameRow>
                {kenoList.map(field =>
                    <BlockOfNums
                        key={field.id}
                        field={field}
                        startGame={startGame}
                        checkCount={checkCount}
                        setCheckCount={setCheckCount}
                    />
                )}
                <Keno.Hing>
                    Pick from 1 to 10 slots to see the odds!
                </Keno.Hing>
            </Keno.GameRow>
        </Keno.GameBlock>
        <KenoSettings
            setOpenWinModal={setOpenWinModal}
            startNewGame={startNewGame}
            setStart={setStart}
            runGame={runGame}
            risk={risk}
            setRisk={setRisk}
            setStartGame={setStartGame}
            checkCount={checkCount}
            setCheckCount={setCheckCount}
        />
    </>
    ;

};

export default KenoGame;