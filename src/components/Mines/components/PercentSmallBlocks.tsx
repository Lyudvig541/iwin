import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IPercentSmallBlocks } from '../../../interface/components-ts/mines-ts/IMinesPage';
import { minesPersentage } from './minesOpenPercent';


const PercentSmallBlocks = ({ mineId, numberOfMines, clickedCount }: IPercentSmallBlocks) => {

    const activeCheck = useMemo(() => mineId === clickedCount, [clickedCount, mineId]);
    const persentResult = useMemo(() => 
        minesPersentage[numberOfMines - 1]['percent'][mineId-1],
    [mineId, numberOfMines]);

    return <WinPercent key={mineId}>
        <CurrentPercent
            active={activeCheck}
        >
            {persentResult}X
        </CurrentPercent>
        <CurrentHits active={activeCheck}>{mineId} Hit</CurrentHits>
    </WinPercent>;

};

const CurrentPercent: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.3px;
  border-radius: 10px 10px 0 0;
  height: 28px;
  background: ${(props: any) => props.active && props.theme.buttonColors.mix1 || 'inherit'};
  color: ${(props: any) => props.active && props.theme.textColors.white || props.theme.textColors.color10};

`;
const CurrentHits: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: ${(props: any) => props.active && props.theme.textColors.color15 || props.theme.textColors.color10};
  background: ${(props: any) => props.theme.bgColors.color38};
  height: 28px;
  border-radius: 0 0 10px 10px;
`;
const WinPercent = styled.div`
  width: 56px;
  height: 56px;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => props.theme.bgColors.color37};
`;

export default PercentSmallBlocks;