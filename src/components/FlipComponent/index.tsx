import { useState, useRef } from 'react';
import { useGetBalance } from '../../hooks/useGetBalance';
import { useMemo } from 'react';

import FlipGameStatistics from './components/FlipGameStatistics';
import FlipGameTable from './components/FlipGameTable';
import FlipScoreboard from './components/Scoreboard';

import GamesContainer from '../GamesContainer';

import { flipPageData, headerTabs } from '../../assets/static/static';
import { IFlipPage } from '../../interface/components-ts/flip-ts/IFlipPage';
import FlipGame from './components/FlipGame';

const FlipPage = ({ active, changeCoin, scoreboardData }: IFlipPage) => {

    const balance = useGetBalance();
    const [tab, setTab] = useState(0);

    const tableRef = useRef();
    
    const game = useMemo(() =>
        <FlipGame
            active={active}
            changeCoin={changeCoin}
            balance={balance}
        />,
    [active, balance, changeCoin]);
    
    const lastGame = useMemo(() => 
        <FlipGameStatistics
            tableRef={tableRef} 
            setActive={setTab}
            data={flipPageData}
            game={'flip'}
        />,
    []);
    
    const scoreboard = useMemo(() =>
        <FlipScoreboard 
            scoreboardData={scoreboardData}
        />, 
    [scoreboardData]);

    const table = useMemo(() => 
        <FlipGameTable 
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
            gameRealMode="flip"
        />
    </>;

};

export default FlipPage;