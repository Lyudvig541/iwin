import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import styles from '../../../../styles/pages/MinesPage.module.css';
import { IMinesBlock } from '../../../interface/components-ts/mines-ts/IMinesPage';

const MineBlocks = ({
    ifMineBlockAlert,
    ifMine,
    setClickedCount,
    clickedCount,
    disable,
    finish,
    layerStopSelectMines,
    setClickedMine,
    countOfDiamonds
}: IMinesBlock) => {

    const ref = useRef(null);
    const [className, setClassName] = useState(styles.minesDefault);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {

        if (disable) {

            setClicked(false);
            setClassName(styles.minesDefault);

        }

    }, [disable]);
    useEffect(() => {

        if (finish) {

            setClassName(ifMine && styles.minesBomb || styles.minesDiamond);

        }

    }, [finish]);

    const handleClick = () => {

        if (!layerStopSelectMines && !clicked) {

            const styleKey = (ifMine && 'minesBomb') || 'minesDiamond';

            setClicked(true);
            setClassName(styles[styleKey]);

            if (ifMine) {

                setClickedMine(true);
                ifMineBlockAlert(false);
                setClickedCount(0);

            } else {

                ifMineBlockAlert(true);
                setClickedCount(++clickedCount);
                (clickedCount === countOfDiamonds) && ifMineBlockAlert(false);

            }

        }

    };

    return (
        <div>
            <MineMainBlock
                className={className}
                ref={ref}
                onClick={handleClick}
                layerStopSelectMines={layerStopSelectMines}
                clicked={clicked}
            />
        </div>
    );

};


const MineMainBlock: any = styled.div`
  width: 85px;
  height: 90px;
  border-radius: 10px;
  margin: 0 12px 8px 0;
  float: left;
  cursor: pointer;
  ${({ layerStopSelectMines, clicked }: any) => layerStopSelectMines && !clicked && css`
    opacity: 0.6;
    cursor: auto;
  `};
  @media (max-width: 972px) {
    margin: 0 4px 8px 0;
  }

  @media (max-width: 500px) {
    width: 56px;
    height: 58px;
    background-size: cover;
    margin: 0 8px 8px 0;
  }
`;

export default MineBlocks;