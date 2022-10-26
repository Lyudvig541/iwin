import styled from 'styled-components';
import ChoosePart from './ChoosePart';
import { TextStyle } from '../../Text/TextStyles/styles';
import InputGroups from '../../InputGroups';
import Image from 'next/image';
import Heads from '../../../assets/images/Heads.svg';
import Tails from '../../../assets/images/Tails.svg';
import useGameDemo from '../../../hooks/useGameDdemo';
import { AUDIO_PLAY, STATUS } from '../../../assets/static/static';
import { useCallback, useEffect, useState } from 'react';
import useGameConfigs from '../../../hooks/useGameConfigs';
import ConnectAndBetButton from '../../GameConnectAndBet/ConnectAndBetButton';

import { useDispatch, useSelector } from 'react-redux';
import { usePlayAudio } from '../../../hooks/usePlayAudio';
import { changeGameResult } from '../../../store/acions/gameResult';
import { IFlipGame } from '../../../interface/components-ts/flip-ts/IFlipPage';
import { IState } from '../../../interface/store-ts/actions/lightMode';
import { IRealMode } from '../../../interface/store-ts/actions/realMode';


const FlipGame = ({ active, changeCoin, balance }: IFlipGame) => {

    const dispatch = useDispatch();
    const [ bet, setBet ] = useState(0);
    const [ winClassName, setWinClassName ] = useState('');
    const [ isRolling, setIsRolling ] = useState(false);
    const [ result, setResult ] = useState(false);
    const [ isClick, setIsClick ] = useState(false);
    const [ buttonName, setButtonName ] = useState('');
    const [ history, setHistory ] = useState<any>([]);
    const [winOrLusSound, setWinOrLusSound] = useState<null | boolean>(null);

    const [ influenceBalance, setInfluenceBalance ] = useState(false);

    const { winner, play, gameStatus } = useGameDemo();
    const { minBet, maxBet } = useGameConfigs('flip');
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const { setSoundName, setStopSound, stopSound } = usePlayAudio();
    const lightMode = useSelector((state: IState) => state.lightMode.lightMode);

    const gameFlow = useCallback((run) => {

        const flow = run === 'run';

        setIsClick(flow);

        setTimeout(() => {

            setIsRolling(flow);

        }, 4000);

        setResult(!flow);

    }, []);
    const winOrLus = useCallback(() => {

        const win = winner === 0 ? 'heads' : 'tails';

        return active === win;


    }, [active, winner]);

    const runGame = () => {

        if (!realMode) {

            setWinOrLusSound(null);
            setSoundName(AUDIO_PLAY.audioFlipPlay);
            play('flip');
            setWinClassName('');

        }

    };

    useEffect(() => {

        if (winner !== null) {

            setWinOrLusSound(winOrLus());
            dispatch(changeGameResult('flip', winOrLus()));

        }

    }, [dispatch, winOrLus]);

    useEffect(() => {

        let timeoutId:any = null;

        if (winner !== null) {

            timeoutId = setTimeout(() => {

                const winOrLus = (winOrLusSound && AUDIO_PLAY.audioFlipWin) || AUDIO_PLAY.audioFlipLose;

                setStopSound(!stopSound);
                setSoundName(winOrLus);

            }, 4000);

        }

        return () => {

            clearTimeout(timeoutId);

        };

    }, [winOrLusSound]);

    useEffect(() => {

        if (gameStatus === STATUS.PLAYED) {

            const winCard = !winner ? 'heads' : 'tails';

            gameFlow('');

            setTimeout(() => {

                setHistory([ { type: winCard, won: active === 'heads' }, ...history ]);

            }, 4000);
            setWinClassName(winCard);


        }

        if (gameStatus === STATUS.STARTED) {

            gameFlow('run');

        }


    }, [gameStatus, play]);

    useEffect(() => {

        setButtonName(`BET ${active === 'tails' ? 'TAILS' : 'HEADS'}`);

    }, [active]);

    return <FlipContent>
        <BetContent>
            <ChoosePart
                active={active}
                changeCoin={changeCoin}
                winClassName={winClassName}
                isRolling={isRolling}
                result={result}
                isClick={isClick}
            />
            <BetControl>
                <TextStyle
                    fontSize="12px"
                    margin="0 0 16px 0"
                    weight="bold"
                    color={lightMode ?'#736F6F':'#BDBDBD'}

                >
                    Bet Amount
                </TextStyle>
                <InputGroups
                    setInfluenceBalance={setInfluenceBalance}
                    value={bet}
                    setValue={setBet}
                    disable={!realMode || isClick}
                    minValue={minBet}
                    maxValue={maxBet}
                    balance={balance}
                    borderRadius="4px"
                    step={0.1}
                    type="MultiplicationButtons"
                    maxWidth="128px"
                />
            </BetControl>
            <BetButton>
                <ConnectAndBetButton
                    runGame={runGame}
                    disable={isClick}
                    influenceBalance={influenceBalance}
                    buttonName={buttonName}
                />
            </BetButton>
        </BetContent>
        <GameHistory>
            {history.map((item: { type: string, won: any }, key:number) => <History key={key} won={item.won}>
                <ImageWrapper>
                    <Image
                        src={item.type === 'heads' ? Heads : Tails}
                        alt={'...'}
                        sizes="(max-width: 500px) 100"
                    />
                </ImageWrapper>
            </History>)}
        </GameHistory>
    </FlipContent>;

};

const FlipContent = styled.div`
  display: flex;
  margin: 65px 0 0 0;
  @media (max-width: 1320px) {
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    flex-direction: column;
    margin: 0 0 44px 0;
    align-self: center;
    align-items: center;
  }
`;
const BetContent = styled.div`
  margin: 0 64px 0 32px;
  display: grid;
  @media (max-width: 1400px) {
    margin: 0 50px 0 20px;
  }
  @media (max-width: 1350px) {
    margin: 0 40px 0 20px;
  }
  @media (max-width: 1320px) {
    margin: 0 40px 0 8px;
  }
  @media (max-width: 1200px) {
    margin: 0 60px 0 28px;
  }
  @media (max-width: 790px) {
    margin: 0 15px 0 8px;
  }
  @media (max-width: 1158px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    margin: 0;
    order: 2;
    width: 100%;
    justify-items: center;
  }
`;
const GameHistory = styled.div`
  background: ${props => props.theme.bgColors.color9};
  border-radius: 100px;
  height: 407px;
  width: max-content;
  min-width: 48px;
  padding: 9px;
  overflow-y: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 48px;
    padding: 10px;
    order: 1;
    display: flex;
    margin: 48px 0 40px;
    overflow-y: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: auto;
      height: 0;
    }
  }
  @media (max-width: 586px) {
    margin: 0 0 24px;
  }
`;

const BetControl = styled.div`
  margin: 45px auto 56px;
  width: max-content;
  text-align: start;

  @media (max-width: 768px) {
    margin: 60px auto 32px;
  }
`;

const History:any = styled.div`
  margin-top: 16px;
  opacity: ${({ won }: any) => won ? 1 : 0.3};
  @media (max-width: 768px) {
    margin: 0 6px 5px 0;
    width: 30px !important;
    height: 30px !important;
  }
`;
const ImageWrapper = styled.div`
    width: 30px;
    height: 30px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const BetButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default FlipGame;