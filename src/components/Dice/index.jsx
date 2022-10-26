import { useMemo, useState, useRef } from 'react';
import DiceControl from './components/DiceControl';
import DiceScoreboard from './components/DiceScoreboard';
import DiceGameStatistics from './components/DiceGameStatistics';
import DiceTable from './components/DiceTable';
import GamesContainer from '../GamesContainer';
import { useGetBalance } from '../../hooks/useGetBalance';

const DicePage = ({
    setModal,
    scoreboardData,
    data,
    dataStatistic, lightMode
}) => {

    const balance = useGetBalance();
    const [tab, setTab] = useState(0);
    const tableRef = useRef();

    const game = useMemo(() =>
        <DiceControl
            balance={balance}
            lightMode={lightMode}
        />,
    [balance, lightMode]);

    const lastGame = useMemo(() =>
        <DiceGameStatistics
            data={dataStatistic}
            tableRef={tableRef}
            setActive={setTab}
            game={'dice'}
            lightMode={lightMode}
        />, 
    [dataStatistic, lightMode]);
    
    const scoreboard = useMemo(() => 
        <DiceScoreboard 
            scoreboardData={scoreboardData} 
            data={data}
            lightMode={lightMode}
        />,
    [data, scoreboardData, lightMode]);

    const table = useMemo(() =>
        <DiceTable
            tableRef={tableRef}
            active={tab}
            setActive={setTab}
            lightMode={lightMode}
        />,
    [tab, lightMode]);


    return (
        <>
            <GamesContainer
                game={game}
                lastGame={lastGame}
                scoreboard={scoreboard}
                table={table}
                setModal={setModal}
                gameRealMode={'dice'}
                lightMode={lightMode}
            />
        </>
    );

};

export default DicePage;