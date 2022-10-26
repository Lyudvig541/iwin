import styled from 'styled-components';
import Image from 'next/image';
import { TextStyle } from '../../Text/TextStyles/styles';
import Diamond from '../../../assets/images/diamond-scoreboard.png';
import Bombs from '../../../assets/images/bomb-scoreboard.png';
import DiamondBackground from '../../../assets/images/diamond-bg-score.png';
import RockBackground from '../../../assets/images/bomb-bg-score.png';
import Scoreboard from '../../Scoreboard';
import { useSelector } from 'react-redux';
import { IState } from '../../../interface/store-ts/actions/lightMode';
import { ThemeNew } from '../../../constants/themeNew';
import { IMinesState } from '../../../interface/store-ts/redducers/mines';
import { IWallScoreboard } from '../../../interface/components-ts/wall-ts/IWall';


const MinesScoreboard = ({ noOpen }: IWallScoreboard) => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);
    const data = useSelector((state: { mines: IMinesState }) => state.mines.minesCount);

    return (
        <Scoreboard noOpen={noOpen}>
            <Body>
                <DiamondPart>
                    <RockType>
                        <Image
                            width={'70px'}
                            src={Diamond}
                            alt={'...'}
                        />
                    </RockType>
                    <Count>
                        <Background>
                            <Image
                                src={DiamondBackground}
                                alt={'...'}
                            />
                        </Background>
                        <TextStyle
                            fontSize="32px"
                            lineHeight="44px"
                            margin="45px 0 0 0"
                            color={ThemeNew.lightMode.textColors.color13}
                            fontWeight="700"
                        >
                            {data.diamond}
                        </TextStyle>
                        <TextStyle
                            fontSize="12px"
                            lineHeight="18px"
                            margin="5px 0 10px 0"
                            fontWeight="700"
                            color={lightMode ? ThemeNew.lightMode.textColors.color1 :ThemeNew.darkMode.textColors.color1}
                        >
                        DIAMONDS
                        </TextStyle>
                    </Count>
                </DiamondPart>
                <DiamondPart>
                    <RockType>
                        <Image
                            width={'70px'}
                            src={Bombs}
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
                            {data.mines}
                        </TextStyle>
                        <TextStyle
                            fontSize="12px"
                            lineHeight="18px"
                            margin="5px 0 10px 0"
                            fontWeight="700"
                            color={lightMode ? ThemeNew.lightMode.textColors.color1 : ThemeNew.darkMode.textColors.color1}
                        >
                        BOMBS
                        </TextStyle>
                    </Count>
                </DiamondPart>
            </Body>
        </Scoreboard>
    );

};

export default MinesScoreboard;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px 26px;
`;
const DiamondPart = styled.div`
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
  transform: translate(45%, -50%);
  z-index:2;
  @media (max-width: 768px) {
    transform: translate(20%, -60%);
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