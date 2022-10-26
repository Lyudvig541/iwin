import React, { useEffect, useMemo, useRef, useState } from 'react';

import WallGame from './WallGame';
import GamesContainer from '../GamesContainer';
import MinesGameTable from '../Mines/components/MinesGameTable';
import WallScoreboard from '../Wall/Scoreboard';
import MinesGameStatistics from '../Mines/components/MinesGameStatistics';

import { useDispatch } from 'react-redux';
import { useGetBalance } from '../../hooks/useGetBalance';
import { changeBombCount } from '../../store/acions/wall';
import { headerTabs, minesPageData } from '../../assets/static/static';
import { IWallPage } from '../../interface/components-ts/wall-ts/IWall';

const WallPage = ({ scoreboardData }: IWallPage) => {

    const dispatch = useDispatch();
    const balance = useGetBalance();
    const tableRef = useRef();
    
    const [tab, setTab] = useState(0);

    useEffect(() => {

        dispatch(changeBombCount(3));
    
    }, [dispatch]);

    const game = useMemo(() => <WallGame/>, [balance, scoreboardData]);
    const lastGame = useMemo(() =>
        <MinesGameStatistics
            tableRef={tableRef}
            setActive={setTab}
            data={minesPageData}
            game={'mines'}
        />,
    []);
    const scoreboard = useMemo(() =>
        <WallScoreboard
            noOpen={true}
        />, []);
    const table = useMemo(() =>
        <MinesGameTable
            headerTabs={headerTabs}
            tableRef={tableRef}
            active={tab}
            setActive={setTab}
        />,
    [tab]);

    return <>
        <GamesContainer
            game={game}
            lastGame={lastGame}
            scoreboard={scoreboard}
            table={table}
            gameRealMode="kong"
        />
    </>;

};

export default WallPage;