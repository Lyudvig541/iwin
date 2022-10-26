import Scoreboard from '../../Scoreboard';
import ScoreboardItems from './ScoreboardItems';
import styled from 'styled-components';
import { IWheelScoreboard } from '../../../interface/components-ts/wheel-ts/IWheel';

const WheelScoreboard = ({ scoreboardData, data, onToggle }: IWheelScoreboard) =>
    <Scoreboard
        scoreboardData={scoreboardData}
        onToggle={onToggle}
    >
        <Body>
            {data && data.map((item, idx) => (
                <ScoreboardItems
                    item={item}
                    key={item.type}
                    idx={idx}
                />
            ))}
        </Body>
    </Scoreboard>;

export default WheelScoreboard;

const Body = styled.div`
padding: 9px 32px 10px;
`;