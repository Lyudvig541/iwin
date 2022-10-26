import { useState, useRef, useMemo } from 'react';

import MinesGameStatistics from './components/MinesGameStatistics';
import MinesGameTable from './components/MinesGameTable';
import MinesScoreboard from './components/Scoreboard';
import GamesContainer from '../GamesContainer';
import MinesGame from './components/MinesGame';

import { useGetBalance } from '../../hooks/useGetBalance';
import { headerTabs, minesPageData } from '../../assets/static/static';
import { IMinesPage } from '../../interface/components-ts/mines-ts/IMinesPage';

const MinesPage = ({ scoreboardData }: IMinesPage) => {

    const balance = useGetBalance();
    const [tab, setTab] = useState(0);
    const tableRef = useRef();

    const game = useMemo(() =>
        <MinesGame
            balance={balance}
            scoreboardData={scoreboardData}
        />,
    [balance, scoreboardData]);
    
    const lastGame = useMemo(() => 
        <MinesGameStatistics
            tableRef={tableRef} 
            setActive={setTab}
            data={minesPageData}
            game={'mines'}
        />,
    []);
    
    const scoreboard = useMemo(() =>
        <MinesScoreboard
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
            gameRealMode="flip"
        />
    </>;

};

export default MinesPage;