import { useMemo, useState, useRef } from 'react';
import DiceControl from './components/DiceControl';
import DiceScoreboard from './components/DiceScoreboard';
import DiceGameStatistics from './components/DiceGameStatistics';
import DiceTable from './components/DiceTable';
import GamesContainer from '../GamesContainer';
import { IDicePageProps } from '../../interface/components-ts/dice-ts/IDice';


const DicePage = ({ scoreboardData, data, dataStatistic }: IDicePageProps) => {

    const [tab, setTab] = useState(0);
    const tableRef = useRef();

    const game = useMemo(() =>
        <DiceControl/>,
    []);

    const lastGame = useMemo(() =>
        <DiceGameStatistics
            data={dataStatistic}
            tableRef={tableRef}
            setActive={setTab}
            game={'dice'}
        />,
    [dataStatistic]);

    const scoreboard = useMemo(() =>
        <DiceScoreboard
            scoreboardData={scoreboardData}
            data={data}
        />,
    [data, scoreboardData]);

    const table = useMemo(() =>
        <DiceTable
            tableRef={tableRef}
            active={tab}
            setActive={setTab}
        />,
    [tab]);


    return (
        <>
            <GamesContainer
                game={game}
                lastGame={lastGame}
                scoreboard={scoreboard}
                table={table}
                gameRealMode={'dice'}
            />
        </>
    );

};


export default DicePage;