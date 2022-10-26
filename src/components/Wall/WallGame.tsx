import React, { useEffect, useMemo, useState } from 'react';
import Coefficient from './Coefficient';
import Game from './Game';
import BetConfigBlock from './BetConfigBlock';
import * as Index from './styles/wallStyle';
import { useDispatch, useSelector } from 'react-redux';
import { IStateWall } from '../../interface/components-ts/wall-ts/IWall';
import WinningModal from '../Modals/WinningModal';
import { changeWinOrLose } from '../../store/acions/wall';
import { WallPersentage } from './WallOpenPercent';

const WallGame = () => {

    const dispatch = useDispatch();
    const { isNextClick, startCount } = useSelector((state: IStateWall) => state.wall);
    const coefficients = useMemo(() => WallPersentage[startCount - 1], [startCount]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);
    const [openWinModal, setOpenWinModal] = useState(false);
    const [buttonText, setButtonText] = useState('bet');
    const [nextClickLine, setNextLine] = useState(isNextClick);
    const [ clickLine, setClickLine ] = useState<number[]>([]);
    
    useEffect(() => {
       
        if (openWinModal) {

            dispatch(changeWinOrLose(true));
            setClickLine([]);

        }
    
    }, [dispatch, openWinModal]);
    
    return <Index.Container>
        <Index.GameContent>
            <WinningModal
                open={openWinModal}
                coefficient={count > 1 && coefficients[count - 2] || 1}
                amount={0}
                width={'479px'}
                widthM={'90%'}
                height={'544px'}
            />
            <Index.GameBlock>
                <Coefficient count={count} nextClickLine={nextClickLine} startCount={startCount}/>
                <Game
                    count={count}
                    setCount={setCount}
                    clickLine={clickLine}
                    setDisable={setDisable}
                    setNextLine={setNextLine}
                    setClickLine={setClickLine}
                    nextClickLine={nextClickLine}
                    setButtonText={setButtonText}
                    setOpenWinModal={setOpenWinModal}
                />
            </Index.GameBlock>
            <BetConfigBlock
                disable={disable}
                setCount={setCount}
                buttonText={buttonText}
                setDisable={setDisable}
                setButtonText={setButtonText}
                setOpenWinModal={setOpenWinModal}
            />
        </Index.GameContent>
    </Index.Container>;

};


export default WallGame;