import React, { useState } from 'react';
import styled, { css }from 'styled-components';
import { columns } from '../../../assets/static/static';
import Scoreboard from '../../Scoreboard';
import { IDataScorbord } from '../../../interface/components-ts/dice-ts/IDice';


const DiceScoreboard = ({ scoreboardData, data }: IDataScorbord) => {

    const [active, setActive] = useState(0);

    return (
        <Scoreboard scoreboardData={scoreboardData}>
            <TitleRow margin={'24px 0 0 0'}>
                {columns.map((item, key) =>
                    <ClickableCol
                        active={active === key}
                        key={key}
                        onClick={() => {

                            setActive(key);

                        }
                        }>{item}</ClickableCol>)}
            </TitleRow>
            {data.map((item, key) => <Row pair={key % 2 === 0 ? 1 : 0} key={key}>
                <Col>{item.prediction}</Col>
                <Col color={'true'} >{item.count}</Col>
                <Col>{item.percent}%</Col>
            </Row>)}
        </Scoreboard>
    );

};

export default DiceScoreboard;

const Row: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 44px;
  padding: 0 37px;
  ${({ pair }: any) => pair && `background: 
  ${(props: any) => props.theme.bgColors.color12}`}
`;
const TitleRow:any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 37px;
  padding: 0 39px;
`;
const ClickableCol: any = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.textColors.color1};
  ${({ active }: any) => active && css`
    color: ${props => props.theme.textColors.color1};
    &:before {
      display: flex;
      content: '';
      width: 8px;
      height: 8px;
      background: ${props => props.theme.buttonColors.mix1};
      border-radius: 50%;
      margin-right: 14px;
    }`}
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: ${({ color, theme }) => color ? theme.bgColors.color20 : theme.textColors.color1};
  padding: 12px 0;
`;