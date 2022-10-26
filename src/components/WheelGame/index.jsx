import React, { useEffect, useMemo, useState } from 'react';
import GameStatistics from '../GameStatistics';
import { getWheelGameHistory } from '../../actions/WheelGame';
import WheelGameTable from './components/WheelGameTable';
import GamesContainer from '../GamesContainer';
import WheelWrapper from './components/WheelWrapper';
import { randomNumberGenerator } from '../../utils/generateRandomNumber';
import { LData } from '../../assets/static/static';
import { useGetBalance } from '../../hooks/useGetBalance';
import WheelScoreboard from './components/WheelScoreboard';


const WheelGame = ({ buttonData, data, scoreboardData, onToggle, lightMode, setModal }) => {

    const [ gameType, setGameType ] = useState({});
    const [ lineData, setLineData ] = useState([]);
    const [ rotate, setRotate ] = useState(false);
    const [ result, setResult ] = useState(false);
    const [ value, setValue ] = useState();
    const [tableData, setTableData ] = useState([]);
    const balance = useGetBalance();

    const updateLineData = (typeData) => {

        setLineData(prevData => (
            [ { typeData, background: typeData, size: randomNumberGenerator() }, ...prevData ]
        ));

        setRotate(true);
        setResult(false);
        setTimeout(() => {

            setResult(true);
            setRotate(false);

        }, 10000);
    
    };
    
    useEffect(() => {

        getWheelGameHistory().then((history) => {

            setTableData(history);

        });
    
    }, []);

    const game = useMemo(() => <WheelWrapper
        buttonData={buttonData}
        result={result}
        lineData={lineData}
        setGameType={setGameType}
        rotate={rotate}
        value={value}
        setValue={setValue}
        updateLineData={updateLineData}
        gameType={gameType}
        balance={balance}
        lightMode={lightMode}/>,
    [balance, buttonData, gameType, lineData, result, rotate, value, lightMode]);

    const lastGame = useMemo(() => <GameStatistics game={'wheel'} data={LData} lightMode={lightMode}/>, [lightMode]);

    const scoreboard = useMemo(() => <WheelScoreboard
        data={data}
        scoreboardData={scoreboardData}
        onToggle={onToggle}
        lightMode={lightMode}/>,
    [data, onToggle, scoreboardData, lightMode]);

    const table = useMemo(() => <WheelGameTable data={tableData} lightMode={lightMode}/>, [tableData, lightMode]);

    return (
        <GamesContainer
            setModal={setModal}
            game={game}
            lastGame={lastGame}
            scoreboard={scoreboard}
            table={table}
            gameRealMode={'wheel'}
            lightMode={lightMode}
        />
    );

};

export default WheelGame;