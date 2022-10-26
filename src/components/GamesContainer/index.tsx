import styled from 'styled-components';
import ToolBar from '../ToolBar';
import { IGamesContainer } from '../../interface/components-ts/game-ts/IGame';

const GamesContainer = ({
    game,
    lastGame,
    scoreboard,
    table,
    gameRealMode
}: IGamesContainer) => <Container>
    <Game>
        <GameControl>
            <ToolBar
                gameRealMode={gameRealMode}
            />
            {game}
        </GameControl>
        {scoreboard && <Info>
            <LastGame>
                {lastGame}
            </LastGame>
            <Scoreboard>
                {scoreboard}
            </Scoreboard>
        </Info> || <InfoOneBlock>
            <LastGame>
                {lastGame}
            </LastGame>
        </InfoOneBlock>
        }
    </Game>
    <History>
        {table}
    </History>
</Container>;

export default GamesContainer;

const History = styled.div`
  width: auto;
  margin-top: 80px;
  @media (max-width: 972px){
    margin-top: 64px;
  }
  @media (max-width: 586px){
    margin-top: 80px;
  }
`;
const Game = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 586px) {
    justify-items: center;
    align-items: center;
  }
`;
const GameControl = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.bgColors?.color1};
  box-shadow: 0 8px 6px ${props => props.theme.bgColors?.color4};
  border-radius: 10px;
  padding: 32px 32px 40px;
  max-width: 917px;
  width: 100%;
  @media (max-width: 586px){
    width: 100%;
    padding: 26px 0 0;
    align-items: center;
    & > :first-child{
      order: 5;
    }
    & > :nth-of-type(2){
      order: 1;
    }
  }
`;
const InfoOneBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 48px;
  @media (max-width: 1420px) {
    margin-left: 18px;
  }
  @media (max-width: 1200px) {
    flex-direction: unset;
    justify-content: center;
    margin: 48px 0 0 0;
  }
  @media (max-width: 785px) {
    width: auto;
    flex-direction: column;
    margin: 48px 0 0;
    align-items: center;
  }
  @media (max-width: 586px) {
    width: 100%;
    flex-direction: column;
    margin: 48px 0 0;
    align-items: stretch;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 48px;
  @media (max-width: 1420px) {
    margin-left: 18px;
  }
  @media (max-width: 1200px) {
    flex-direction: unset;
    margin: 48px 0 0 0;
  }
  @media (max-width: 785px) {
    width: auto;
    flex-direction: column;
    margin: 48px 0 0;
    align-items: center;
  }
  @media (max-width: 586px) {
    width: 100%;
    flex-direction: column;
    margin: 48px 0 0;
    align-items: stretch;
  }
`;
const LastGame = styled.div``;
const Scoreboard = styled.div``;
const Container = styled.div`
  padding: 72px 20px 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    max-width: 908px;
    margin: 0 auto;
    padding: 64px 0 96px;
  }
  @media (max-width: 950px) {
    padding: 64px 20px 96px;
  }
  @media (max-width: 586px) {
    padding: 88px 16px 44px;
  }
  @media (max-width: 470px) {
    padding: 91px 16px 44px;
  }
`;