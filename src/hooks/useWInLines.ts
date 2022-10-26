import { useCallback, useEffect } from 'react';
import { IWallGameData } from '../interface/components-ts/wall-ts/IWall';
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { useDispatch, useSelector } from 'react-redux';
import { startNewGame } from '../store/acions/wall';

const useWInLines = (winCount: number) => {

    const dispatch = useDispatch();
    const gameWall = useSelector((state: { wall: { game: IWallGameData } }) => state.wall.game);
    const generateWinnBlock = useCallback(() => {

        let generate = true;
        const randomNumbers = [];

        while (generate) {

            const number = generateRandomNumber(4);

            if (randomNumbers.indexOf(number) === -1) {

                randomNumbers.push(number);

            }

            generate = randomNumbers.length !== winCount;

        }

        return randomNumbers;

    }, [winCount]);

    useEffect(() => {

        dispatch(startNewGame(winCount));

    }, [dispatch, winCount, generateWinnBlock]);

    return { gameWall };

};

export default useWInLines;