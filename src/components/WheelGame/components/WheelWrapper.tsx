import { useCallback, useEffect, useState } from 'react';
import WheelButton from './WheelButtons';
import Image from 'next/image';
import Wheel from '../../../assets/images/Wheel.svg';
import Pointer from '../../../assets/images/Pointer.png';
import { TextStyle } from '../../Text/TextStyles/styles';
import InputGroups from '../../InputGroups';
import styled, { css } from 'styled-components';
import ConnectAndBetButton from '../../GameConnectAndBet/ConnectAndBetButton';
import useGameConfigs from '../../../hooks/useGameConfigs';
import useGameDemo from '../../../hooks/useGameDdemo';
import { useDispatch, useSelector } from 'react-redux';
import { AUDIO_PLAY } from '../../../assets/static/static';
import { usePlayAudio } from '../../../hooks/usePlayAudio';
import { changeGameResult } from '../../../store/acions/gameResult';
import { IWheelWrapper, IWheelWrapperMemoType } from '../../../interface/components-ts/wheel-ts/IWheel';
import { IState } from '../../../interface/store-ts/actions/lightMode';
import { IRealMode } from '../../../interface/store-ts/actions/realMode';

const WheelWrapper = ({
    buttonData,
    result,
    lineData,
    setGameType,
    rotate,
    value,
    setValue,
    updateLineData,
    gameType,
    balance
}:IWheelWrapper) => {

    const dispatch = useDispatch();

    const [influenceBalance, setInfluenceBalance] = useState(false);
    const [buttonName, setButtonName] = useState('');
    const [winOrLusSound, setWinOrLusSound] = useState<boolean | null>(null);

    const { wheelRun, setWheelRun, winner, play }: IWheelWrapperMemoType = useGameDemo();
    const { minBet, maxBet } = useGameConfigs('wheel');
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const { setSoundName, setStopSound, stopSound } = usePlayAudio();

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);


    const winOrLus = useCallback(() =>
        (winner.color === gameType.type) || (winner.color === 'w'),
    [winner]);

    useEffect(() => {

        if (winner !== null) {

            setWinOrLusSound(winOrLus());
            dispatch(changeGameResult('wheel', winOrLus()));

        }

    }, [winOrLus]);

    useEffect(() => {

        if (winner !== null) {

            const winOrLus = (winOrLusSound && AUDIO_PLAY.audioWheelWin) || AUDIO_PLAY.audioWheelLose;

            setStopSound(!stopSound);
            setSoundName(winOrLus);

        }

    }, [winOrLusSound]);

    const runGame = () => {

        if (!realMode) {

            setWheelRun(false);
            play('wheel');
            updateLineData(gameType.type);
            setWinOrLusSound(null);
            setSoundName(AUDIO_PLAY.audioWheelPlay);

        }

    };

    useEffect(() => {

        setButtonName(((gameType.win && `BET ${gameType.win}`) || 'BET'));

    }, [gameType.win]);

    return <Content>
        <WheelWrapperRow>
            <GameBlock>
                <ButtonsPart>
                    {buttonData.map((item, idx) => (
                        <WheelButton
                            item={item}
                            key={idx}
                            type={item.type}
                            onClick={() => {

                                !rotate && setGameType({ type: item.type, win: item.XWin });
                            
                            }}>
                            {item.XWin}
                        </WheelButton>
                    ))}
                </ButtonsPart>
                <WheelPart>
                    <WheelPartImage rotate={rotate ? 1 : 0} result={result ? 1 : 0} stop={winner?.number}>
                        <Image src={Wheel} alt="no image" className="wheel-image"/>
                    </WheelPartImage>
                    <WheelPartPointer>
                        <Image src={Pointer} alt="no image"/>
                    </WheelPartPointer>
                </WheelPart>
                <WinPart>
                    {lineData.map((item, idx) => (
                        <LineWrapper key={idx}>
                            <Line background={item.background} height={item.size - 10} width={item.size}>
                                {item.XWin}
                            </Line>
                        </LineWrapper>
                    ))}
                </WinPart>
            </GameBlock>
        </WheelWrapperRow>
        <BetControl margin="0 auto">
            <TextStyle
                fontSize="12px"
                margin="0 0 16px 0"
                color={(lightMode && '#736F6F') || '#BDBDBD'}

            >
                Bet Amount
            </TextStyle>
            <InputGroups
                value={value}
                setValue={setValue}
                disable={!realMode}
                minValue={minBet}
                maxValue={maxBet}
                balance={balance}
                borderRadius="4px"
                step={0.1}
                type="MultiplicationButtons"
                maxWidth="128px"
                setInfluenceBalance={setInfluenceBalance}
            />
        </BetControl>
        <ConnectAndBetButton
            runGame={(gameType.type !== undefined && wheelRun) && runGame}
            influenceBalance={influenceBalance}
            buttonName={buttonName}
            disable={Object.keys(gameType).length <= 0}
        />

    </Content>;

};


const Content = styled.div`
  margin: 50px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 586px) {
    max-width: 343px;
    padding: 0 16px 0;
    margin: 0;
  }
`;
const WheelWrapperRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  @media (max-width: 1300px) {
    padding: 0 30px;
  }
  @media (max-width: 586px) {
    flex-direction: column;
    padding: 0;
  }
`;

const GameBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 968px) {
    padding: 0 24px;
  }
  @media (max-width: 586px) {
    padding: 0 0 0 0;
    flex-direction: column;
    width: 100%;
  }
`;

const ButtonsPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  background: ${props => props.theme.bgColors.color17};
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 28px 10px;
  }

  @media (max-width: 586px) {
    width: calc(100% + 30px);
    padding: 7px 15px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 0;
    order: 3;
  }
`;

const WheelPart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 444px;
  height: 209px;
  background: ${props => props.theme.buttonColors.mix18};

  @media (max-width: 1370px) {
    width: 400px;
  }
  @media (max-width: 786px) {
    width: 275px;
  }

  @media (max-width: 586px) {
    width: 100%;
    order: 2;
    background: transparent;
    margin-bottom: 50px;
  }
`;

const WinPart = styled.div`
  max-width: 157px;
  width: 157px;
  height: 257px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  background: ${props => props.theme.bgColors.color17};
  border-radius: 20px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 768px) {
    width: 113px;
  }
  @media (max-width: 586px) {
    max-width: 100%;
    width: 90%;
    order: 1;
    padding: 9px 16px;
    height: 66px;
    margin-bottom: 50px;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;
const WheelPartImage: any = styled.div`
  width: 330px;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ rotate }:any) => rotate && css`
    -webkit-animation: animationRotate 3s linear infinite;
    -moz-animation: animationRotate 3s linear infinite;
    animation: animationRotate 1s linear infinite;

    @keyframes animationRotate {
      100% {
        transform: rotate(360deg);
      }
    }`};

  ${({ result }:any) => result && css`
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    animation: rotate 1s ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: ${({ stop }:any) => `rotate(${stop}deg);`}
      }
    }`};
  @media (max-width: 786px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 586px) {
    width: 250px;
    height: 250px;
  }

`;

const WheelPartPointer = styled.div`
  position: absolute;
  left: 14.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1370px) {
    left: 10%;
  }
  @media (max-width: 786px) {
    left: 6%;
  }
  @media (max-width: 586px) {
    left: 7%;
  }
`;

const LineWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 586px) {
    display: flex;
    align-items: flex-end;
    align-self: stretch;
    margin-bottom: 0;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
const Line :any = styled.div`
  align-self: flex-end;
  width: ${({ width }:any) => (width && `${width}px`) || '6px'};
  height: 6px;
  border-radius: 100px;
  background: ${({ background }:any) => background};
  @media (max-width: 586px) {
    height: ${({ height }:any) => (height && `${height}px`) || '6px'};
    width: 6px;
  }
`;
const BetControl:any = styled.div`
  margin: 45px auto 48px;
  width: max-content;
  text-align: start;
  @media (max-width: 586px) {
    margin: 60px auto 32px;
  }
`;

export default WheelWrapper;