import { useCallback, useEffect, useState } from 'react';
import { generateRandomNumber, generateStopRandom } from '../utils/generateRandomNumber';
import { STATUS } from '../assets/static/static';
import { rotate } from '../components/WheelGame/cordinats/rotate';
import { GameType, IWinner } from '../interface/hook-ts/IDemoGame';

const useGameDemo = () => {

    const [gameStatus, setGameStatus] = useState(STATUS.NOTSTARTED);
    const [winner, setWinner] = useState<IWinner>(null);
    const [gameName, setGameName] = useState<GameType>();
    const [wheelRun, setWheelRun] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const reset = useCallback(() => {

        setWinner(null);
        setGameStatus(STATUS.NOTSTARTED);

    }, []);
    const run = useCallback((name) => {

        setGameName(name);
        reset();
        setGameStatus(STATUS.STARTED);

    }, [reset, gameStatus]);

    const diceFlipDemo = () => {


        const randomNumber = ((gameName === 'flip') && 1) || ((gameName === 'dice') && 100) || 1;

        setTimeout(() => {

            setWinner(generateRandomNumber(randomNumber));

        }, 2000);

    };

    const wheelDemo = () => {

        setTimeout(() => {

            setWinner(generateStopRandom(rotate));
            setTimeout(() => {

                setWheelRun(true);

            }, 2000);

        }, 9000);

    };

    useEffect(() => {

        switch (gameStatus) {

            case STATUS.STARTED:
                setGameStatus(STATUS.WAITING);
                setButtonDisabled(true);
                (gameName === 'flip' || gameName === 'dice') && diceFlipDemo();
                gameName === 'wheel' && wheelDemo();

                setTimeout(() => {

                    setGameStatus(STATUS.PLAYED);

                }, 3000);
                break;

        }

    }, [gameStatus]);

    return { winner, play: run, gameStatus, reset, wheelRun, setWheelRun, buttonDisabled, setButtonDisabled };

};

export default useGameDemo;