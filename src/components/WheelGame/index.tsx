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
import { IWheel, LineDataType } from '../../interface/components-ts/wheel-ts/IWheel';


const WheelGame = ({ buttonData, data, scoreboardData, onToggle }: IWheel) => {

    const [ gameType, setGameType ] = useState({ XWin:'', type:'', win: '' });
    const [ lineData, setLineData ] = useState<LineDataType>([]);
    const [ rotate, setRotate ] = useState(false);
    const [ result, setResult ] = useState(false);
    const [ value, setValue ] = useState();
    const [tableData, setTableData ] = useState([]);
    const balance = useGetBalance();

    const updateLineData = (typeData:string | number) => {

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
    />
    , [balance, buttonData, gameType, lineData, result, rotate, value]);

    const lastGame = useMemo(() => <GameStatistics game={'wheel'} data={LData}/>, []);

    const scoreboard = useMemo(() => <WheelScoreboard
        data={data}
        scoreboardData={scoreboardData} 
        onToggle={onToggle}/>, 
    [data, onToggle, scoreboardData]);
    
    const table = useMemo(() => <WheelGameTable data={tableData}/>, [tableData]);
    
    return (
        <GamesContainer
            game={game}
            lastGame={lastGame}
            scoreboard={scoreboard}
            table={table}
            gameRealMode={'wheel'}
        />
    );

};

export default WheelGame;