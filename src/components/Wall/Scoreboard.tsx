import styled from 'styled-components';
import Image from 'next/image';
import { TextStyle } from '../Text/TextStyles/styles';
import Banana from '../../assets/images/bananan-score.png';
import Rocks from '../../assets/images/rocks-score.png';
import BananaBackground from '../../assets/images/banana-bg-score.png';
import RockBackground from '../../assets/images/rocks-bg-score.png';
import Scoreboard from '../Scoreboard';
import { useSelector } from 'react-redux';
import { IState } from '../../interface/store-ts/actions/lightMode';
import { ThemeNew } from '../../constants/themeNew';
import { IWallScoreboard } from '../../interface/components-ts/wall-ts/IWall';
import { IWallWinOrLose } from '../../interface/store-ts/redducers/wall';

const WallScoreboard = ({ noOpen }: IWallScoreboard) => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);
    const data = useSelector((state: { wall: IWallWinOrLose }) => state.wall.winOrLoseCount);

    return (
        <Scoreboard noOpen={noOpen}>
            <Body>
                <BananaPart>
                    <RockType>
                        <Image
                            src={Banana}
                            alt={'...'}
                        />
                    </RockType>
                    <Count>
                        <Background>
                            <Image
                                src={BananaBackground}
                                alt={'...'}
                            />
                        </Background>
                        <TextStyle
                            fontSize="32px"
                            lineHeight="44px"
                            margin="45px 0 0 0"
                            color={ThemeNew.lightMode.textColors.color16}
                            fontWeight="700"
                        >
                            {data.win}
                        </TextStyle>
                        <TextStyle
                            fontSize="12px"
                            lineHeight="18px"
                            margin="5px 0 10px 0"
                            fontWeight="700"
                            color={lightMode ? ThemeNew.lightMode.textColors.color1 :ThemeNew.darkMode.textColors.color1}
                        >
                        WIN
                        </TextStyle>
                    </Count>
                </BananaPart>
                <BananaPart>
                    <RockType>
                        <Image
                            src={Rocks}
                            alt={'...'}
                        />
                    </RockType>
                    <Count>
                        <Background>
                            <Image
                                src={RockBackground}
                                alt={'...'}
                            />
                        </Background>
                        <TextStyle
                            fontSize="32px"
                            lineHeight="44px"
                            color={lightMode ? ThemeNew.lightMode.textColors.color14 : ThemeNew.darkMode.textColors.color14}
                            fontWeight="700"
                            margin="45px 0 0 0"
                        >
                            {data.lose}
                        </TextStyle>
                        <TextStyle
                            fontSize="12px"
                            lineHeight="18px"
                            margin="5px 0 10px 0"
                            fontWeight="700"
                            color={lightMode ? ThemeNew.lightMode.textColors.color1 : ThemeNew.darkMode.textColors.color1}
                        >
                        LOSE
                        </TextStyle>
                    </Count>
                </BananaPart>
            </Body>
        </Scoreboard>
    );

};

export default WallScoreboard;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px 26px;
`;
const BananaPart = styled.div`
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
const RockType = styled.div`
  position: absolute;
  transform: translate(15%, -50%);
  z-index:2;
  @media (max-width: 768px) {
    transform: translate(20%, -45%);
    width: 80px; 
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
  @media (max-width: 768px) {
    & > span {
      height: 100% !important; 
    }
  }
`;