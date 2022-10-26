import * as GameStyle from './styles/gameStyle';
import styles from '../../../styles/pages/WallPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../interface/store-ts/actions/lightMode';
import { changeWinOrLose, clickBomb } from '../../store/acions/wall';
import React, { useEffect, useMemo, useState } from 'react';
import { IMainPartGame } from '../../interface/components-ts/wall-ts/IWall';

const Game = ({
    id,
    item,
    count,
    setLine,
    isCheck,
    setCount,
    loseLine,
    clickLine,
    setDisable,
    setClickLine,
    setNextLine,
    setButtonText,
    nextClickLine,
    setOpenWinModal
}: IMainPartGame) => {

    const dispatch = useDispatch();
    const { lightMode } = useSelector((state: IState) => state.lightMode);
    const [click, setClick] = useState(false);

    const winLoseImg = useMemo(() => {

        const img = item.win && (lightMode && styles.wallWinLight || styles.wallWinDark);

        return img || (lightMode && styles.wallLoseLight || styles.wallLoseDark);

    }, [item, lightMode]);

    const testYourLike = (key: number, win: boolean, id: number) => {

        setClickLine([...clickLine, key]);
        setClick(true);
        
        if (!win) {

            dispatch(changeWinOrLose(false));
            setLine({ line: key, id });
            setClickLine([]);

        }

        if(!click) {

            if (count === key) {

                setNextLine(nextClickLine && win);
                ((count === 10) && win) && setOpenWinModal(true);
                (count === 10) && win && setButtonText('bet');

                if (nextClickLine) {

                    dispatch(clickBomb(key));
                    setCount(key + 1);
                    setDisable(false);
                    !win && setButtonText('bet');
                    setClick(false);

                } else {

                    setCount(0);
                    !nextClickLine && setButtonText('bet');
                    setClick(false);

                }

            }

        }
    
    };

    useEffect(() => {

        setClick(false);

    }, [nextClickLine]);

    return(
        <GameStyle.GameLines
            className={!item.isClick && (lightMode && styles.wallDefaultLight || styles.wallDefaultDark)}
            onClick={() => testYourLike(id, item.win, item.id)}
            opacity={nextClickLine && (id <= count - 2)}
            disabled={!isCheck}
            nextClickLine={nextClickLine}
        >
            {(item.isClick && <GameStyle.GameResultImg
                bloor={{
                    line: loseLine.line,
                    id: loseLine.id,
                    lineId: id,
                    number: item.id
                }}
                className={winLoseImg}
            />) || item.id}
        </GameStyle.GameLines>
    );

};

export default Game;