import styled from 'styled-components';
import Image from 'next/image';
import { TextStyle } from '../../Text/TextStyles/styles';
import Heads from '../../../assets/images/Heads.svg';
import Tails from '../../../assets/images/Tails.svg';
import HeadsBackground from '../../../assets/images/HeadsBackground.png';
import TailsBackground from '../../../assets/images/TailsBackground.png';
import Scoreboard from '../../Scoreboard';
import { IFlipScoreboard } from '../../../interface/components-ts/flip-ts/IFlipPage';
import { useSelector } from 'react-redux';
import { IState } from '../../../interface/store-ts/actions/lightMode';


const FlipScoreboard = ({ scoreboardData }: IFlipScoreboard) => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    return (
        <Scoreboard scoreboardData={scoreboardData}>
            <Body>
                <CoinWins>
                    <Coin>
                        <Image
                            src={Heads}
                            alt={'...'}
                        />
                    </Coin>
                    <Count isHeads={true}>
                        <Background>
                            <Image
                                sizes="(max-width: 300px) 100"
                                src={HeadsBackground}
                                alt={'...'}
                            />
                        </Background>
                        <TextStyle
                            fontSize="32px"
                            lineHeight="44px"
                            color="#98CA32"
                            weight="bold"
                            margin="45px 0 0 0"
                        >
                          62
                        </TextStyle>
                        <TextStyle
                            fontSize="12px"
                            lineHeight="18px"
                            margin="5px 0 10px 0"
                            color={lightMode ?'#736F6F':'#BDBDBD'}
                        >
                          HEADS
                        </TextStyle>
                    </Count>
                </CoinWins>
                <CoinWins>
                    <Coin>
                        <Image
                            src={Tails}
                            alt={'...'}
                        />
                    </Coin>
                    <Count isHeads={false}>
                        <Background>
                            <Image
                                sizes="(max-width: 300px) 100"
                                src={TailsBackground}
                                alt={'...'}
                            />
                        </Background>
                        <TextStyle
                            fontSize="32px"
                            lineHeight="44px"
                            color="#CA3232"
                            weight="bold"
                            margin="45px 0 0 0"
                        >
                          16
                        </TextStyle>
                        <TextStyle
                            fontSize="12px"
                            lineHeight="18px"
                            margin="5px 0 10px 0"
                            color={lightMode ?'#736F6F':'#BDBDBD'}
                        >
                          TAILS
                        </TextStyle>
                    </Count>
                </CoinWins>
            </Body>
        </Scoreboard>
    );

};

export default FlipScoreboard;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px 26px;
`;
const CoinWins = styled.div`
  margin: 65px 0 0 0;
  width: 170px;
  position: relative;
  display: flex;
  justify-content: space-between;
  background:${(props: any) => props.bgColors?.color24};
  border-radius: 20px;
  padding: 0 18px;
  @media (max-width: 768px) {
    width: 132px;
    padding: 0 10px;
    margin: 60px 0 0 0;
  }
`;
const Coin = styled.div`
  position: absolute;
  transform: translate(35%, -45%);
  z-index:2;
  @media (max-width: 768px) {
    transform: translate(45%, -45%);
    width: 60px; 
    height: 60px;
  }
`;
const Count: any = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;
const Background = styled.div`
  position: absolute;
  z-index:1;
  height: 100%;
  width: 134px;
  @media (max-width: 768px) {
    & > span {
      height: 100% !important; 
    }
  }
`;