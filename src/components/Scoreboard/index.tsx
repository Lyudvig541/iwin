import React from 'react';
import styled from 'styled-components';
import DropDown from '../DropDown';
import Image from 'next/image';
import ScoreboardIcon from '../../assets/icons/Frame.svg';
import ScoreboardIconLight from '../../assets/icons/frameLight.svg';
import { IScoreboard } from '../../interface/components-ts/scroboard-ts/IScoreboard';
import { useSelector } from 'react-redux';
import { IState } from '../../interface/store-ts/actions/lightMode';

const ScoreboardBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0 6px;
  background: ${props => props.theme.bgColors.color1};
  box-shadow: 0 8px 6px ${props => props.theme.bgColors.color4};
  border-radius: 10px;
  width: 435px;

  @media (max-width: 1200px) {
    width: 438px;
  }
  @media (max-width: 946px) {
    width: 100%;
  }
`;

const HeaderPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 30px;
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

  @media (max-width: 946px) {
    width: 24px;
    height: 24px;
  }
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

  @media (max-width: 946px) {
    font-family: Noto Sans, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;
    color: ${props => props.theme.textColors.color1};
  }
`;

const RoundsPartRightBlock = styled.div``;

const Line = styled.div`
  height: 2px;
  width: 85.3%;
  background: ${props => props.theme.bgColors.color3};
  margin: 10px auto 16px;
`;

const BodyPart = styled.div`
  display: flex;
  flex-direction: column;
`;

const Scoreboard = ({ children, scoreboardData, onToggle, noOpen }: IScoreboard) => {

    const lightMode = useSelector((state: IState) => state.lightMode.lightMode);


    return (
        <ScoreboardBlock>
            <HeaderPart>
                <RoundsPartLeftBlock>
                    <Icon>
                        {lightMode ? <Image src={ScoreboardIconLight} alt="___"/>
                            : <Image src={ScoreboardIcon} alt="___"/>}
                    </Icon>
                    <Title>
                        scoreboard
                    </Title>
                </RoundsPartLeftBlock>
                <RoundsPartRightBlock>
                    {!noOpen && <DropDown
                        data={scoreboardData}
                        onChange={onToggle}
                    />}
                </RoundsPartRightBlock>
            </HeaderPart>
            <Line/>
            <BodyPart>
                {children}
            </BodyPart>
        </ScoreboardBlock>
    );

};

export default Scoreboard;