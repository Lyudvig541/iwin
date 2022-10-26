import { useEffect, useState } from 'react';
import * as GameStyle from './styles/gameStyle';
import useWInLines from '../../hooks/useWInLines';
import { useDispatch, useSelector } from 'react-redux';
import { winOrLouse } from '../../store/acions/wall';
import { IGame, IStateWall } from '../../interface/components-ts/wall-ts/IWall';
import MiniPart from './MiniPart';

const Game = ({ 
    count,
    setCount,
    clickLine,
    setDisable,
    setNextLine,
    setClickLine,
    setButtonText,
    nextClickLine,
    setOpenWinModal
}: IGame) => {

    const dispatch = useDispatch();
    const { startCount, newGame, started } = useSelector((state: IStateWall) => state.wall);
    const { gameWall } = useWInLines(startCount);
    const [ loseLine, setLine ] = useState<{ line: null | number, id: null | number}>({ line: null, id: null });

    useEffect(() => {

        if (started) {

            setLine({ line: null, id: null });
            setNextLine(true);
            setCount(1);

        }
    
    }, [newGame, started]);
    useEffect(() => {

        if (nextClickLine !== null) {

            dispatch(winOrLouse(nextClickLine));

        }

    }, [dispatch, nextClickLine]);

    return (
        <GameStyle.GameBlock>
            {Object.keys(gameWall).reverse().map((key: string) =>
                <GameStyle.GameRow
                    key={+key}
                    pointer={ !nextClickLine || clickLine.indexOf(+key) !== -1}
                >
                    {gameWall[+key].map((item) =>
                        <MiniPart
                            id={+key}
                            item={item}
                            key={item.id}
                            count={count}
                            setLine={setLine}
                            isCheck={started}
                            setCount={setCount}
                            loseLine={loseLine}
                            clickLine={clickLine}
                            setDisable={setDisable}
                            setNextLine={setNextLine}
                            setClickLine={setClickLine}
                            setButtonText={setButtonText}
                            nextClickLine={nextClickLine}
                            setOpenWinModal={setOpenWinModal}
                        />
                    )}
                </GameStyle.GameRow>
            )}
        </GameStyle.GameBlock>
    );

};

export default Game;