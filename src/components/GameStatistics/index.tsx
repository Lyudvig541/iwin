import styled from 'styled-components';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { IGameStatistics, ReduxState } from '../../interface/components-ts/game-ts/IGame';
import { IState } from '../../interface/store-ts/actions/lightMode';

import lastGameLight from '../../assets/icons/diceLight.svg';
import lastGame from '../../assets/icons/DicesIcon.svg';

const GameStatistics = ({ tableRef, data, setActive, game }:IGameStatistics) => {

    const { [game]:{ wins, loses } } = useSelector((state:ReduxState) => state.gameResult);
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    return (
        <LastGameContent>
            <LastGameContainer>
                <LastGameHeader>
                    <GameHeaderImgBlock>
                        {lightMode &&
                          <Image src={lastGameLight} alt={'lastGameIcon'}/> ||
                          <Image src={lastGame} alt={'lastGameIcon'}/>}
                    </GameHeaderImgBlock>
                    <HeaderTitle>MY LAST GAMES</HeaderTitle>
                </LastGameHeader>
                <GreyLine/>
                <LastGameBody>
                    <WinSide>
                        <WinCircle>
                            <TitleWin>WINS<Score>{wins}</Score></TitleWin>
                        </WinCircle>
                    </WinSide>
                    <LoseSide>
                        <LoseCircle>
                            <TitleLose>LOSES<Score>{loses}</Score></TitleLose>
                        </LoseCircle>
                    </LoseSide>
                </LastGameBody>
                <LastGameFooter>
                    <FooterButton onClick={() => data.viewAll(tableRef, setActive)}>View All</FooterButton>
                </LastGameFooter>
            </LastGameContainer>
        </LastGameContent>
    );

};

export default GameStatistics;

const LastGameContent = styled.div`
  max-width: 435px;
  background: ${props => props.theme.bgColors.color1};
  box-shadow: 0 8px 6px ${props => props.theme.bgColors.color4};
  border-radius: 10px;
  margin: ${({ margin }: any) => margin || '0 0 0 0 '};
  @media (max-width: 1500px) {
    max-width: 438px;
  }
  @media (max-width: 946px) {
    max-width: 400px;
  }
  @media (max-width: 785px) {
    width: 100%;
    margin-bottom: 48px;
  }
  @media (max-width: 586px) {
    max-width: 100%;
    align-items: stretch;
  }
`;
const LastGameContainer = styled.div`
  padding: 16px 32px 20px 32px;
`;

const GameHeaderImgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 19px;
`;

const LastGameHeader = styled.div`
  display: flex;
`;
const HeaderTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};
`;
const GreyLine = styled.div`
  border: 1px solid ${props => props.theme.bgColors.color3};
  margin: 16px 0 32px;
`;
const LastGameBody = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 24px 0;
`;
const WinSide = styled.div`
  background: ${props => props.theme.buttonColors.mix14};
  border-radius: 16px 0 0 16px;
`;
const LoseSide = styled.div`
  background: ${props => props.theme.buttonColors.mix15};
  border-radius: 0 16px 16px 0;
`;
const WinCircle = styled.div`
  margin: 16px 41px 16px 41px;
  background: ${props => props.theme.buttonColors.buttonColor9};
  border: 2px solid ${props => props.theme.buttonColors.borderColor4};
  box-sizing: border-box;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  padding: 30px 26px 10px 27px;
  @media (max-width: 920px) {
    margin: 16px 18px 16px 18px;
  }
`;
const LoseCircle = styled.div`
  margin: 16px 41px 16px 41px;
  background: ${props => props.theme.bgColors.color14};
  border: 2px solid ${props => props.theme.buttonColors.buttonColor7};
  box-sizing: border-box;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  padding: 30px 20px 10px 21px;
  @media (max-width: 920px) {
    margin: 16px 18px 16px 18px;
  }
`;
const TitleWin = styled.div`
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${ props => props.theme.buttonColors.borderColor4}
`;
const TitleLose = styled.div`
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.32em;
  text-transform: uppercase; 
  color: ${ props => props.theme.buttonColors.buttonColor7}

`;
const Score = styled.div`
  font-family: Inter, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.color1};
  padding-top: 10px;
`;
const LastGameFooter = styled.div`
  text-align: center;
`;
const FooterButton:any = styled.button`
  font-size: 16px;
  height: 23px;
  text-decoration-line: underline;
  color: ${props => props.theme.textColors.color3};
  border: none;
  background: inherit;
  cursor: pointer;
`;
