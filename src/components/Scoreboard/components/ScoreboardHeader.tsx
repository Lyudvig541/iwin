import React from 'react';
import Image from 'next/image';
import ScoreboardIcon from '../../../assets/icons/Frame.svg';
import DropDown from '../../DropDown';
import styled from 'styled-components';
import { IDataScorbord } from '../../../interface/components-ts/dice-ts/IDice';

const ScoreboardHeader = ({ data, children, scoreboardData }: IDataScorbord) => (<div>
    <HeaderPart>
        <RoundsPartLeftBlock>
            <Icon>
                <Image src={ScoreboardIcon} alt="..."/>
            </Icon>
            <Title>
                scoreboard
            </Title>
        </RoundsPartLeftBlock>
        <RoundsPartRightBlock>
            <DropDown
                data={data}
                titleNumber={'100 ROUNDS'}
                titleMargin="0 10px 0 0"
                /* eslint-disable-next-line react/no-children-prop */
                children={children}
                titleColor="#E66E60"
                scoreboardData={scoreboardData}
            />
        </RoundsPartRightBlock>
    </HeaderPart>
    <Line/>
</div>);

export default ScoreboardHeader;

const HeaderPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RoundsPartLeftBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};

`;

const RoundsPartRightBlock = styled.div`
  width: 35%;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background: ${props => props.theme.bgColors.color3};
`;