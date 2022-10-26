import React, { useMemo, useRef, useState } from 'react';
import GamesContainer from '../GamesContainer';
import KenoGame from './KenoGame';
import { headerTabs, minesPageData } from '../../assets/static/static';
import KenoGameStatistics from './KenoGameStatistics';
import KenoGameTable from './KenoGameTable';

const KenoPage = () => {

    const [tab, setTab] = useState(0);
    const tableRef = useRef();
    const game = useMemo(() =>
        <KenoGame/>,
    []);

    const lastGame = useMemo(() =>
        <KenoGameStatistics
            tableRef={tableRef}
            setActive={setTab}
            data={minesPageData}
            game={'mines'}
        />,
    []);

    const table = useMemo(() =>
        <KenoGameTable
            headerTabs={headerTabs}
            tableRef={tableRef}
            active={tab}
            setActive={setTab}
        />,
    []);

    return <GamesContainer
        game={game}
        lastGame={lastGame}
        scoreboard={false}
        table={table}
        gameRealMode="keno"
    />;

};

export default KenoPage;