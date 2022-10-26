import React from 'react';
import styled from 'styled-components';
import { scores } from '../../../assets/static/static';
import { IScoreboardItems } from '../../../interface/components-ts/wheel-ts/IWheel';

const ScoredItem = styled.div`
  height: 32px;
  width: 100%;
  background: ${props => props.theme.bgColors.color12};
  border-radius: 100px;
  padding: 0 24px 0 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CircleItem:any = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ background }:any) => background};
  border-radius: 50%;
  
`;

const Title = styled.div`
  width: 30%;
  text-transform: uppercase;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color3};
  
  @media (max-width: 946px) {
    width: 20%;
    justify-content: flex-start;
    margin-right: 25px;
    margin-left: 16px;
  }
`;

const MultipleItem:any = styled.div`
  flex: 0 0 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }:any) => background};
  
  @media(max-width: 946px) {
    flex: 0 0 67px;
  }
`;

const MultipleChildFirst:any = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }:any) => background};
`;

const MultipleChildLast:any = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};
  background: ${({ background }: any) => background};
`;

const CountColors = styled.div`
  flex-grow: 1;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color1};
`;

const ScoreboardItems = ({ item, idx }: IScoreboardItems) => (
    <ScoredItem>
        <CircleItem background={item.type === scores[idx].type && scores[idx].circle}/>
        <Title>{item.type}</Title>
        <MultipleItem background={item.type === scores[idx].type && scores[idx].background}>
            <MultipleChildFirst background={item.type === scores[idx].type && scores[idx].background}>
                <MultipleChildLast background={item.type === scores[idx].type && scores[idx].background}>
                    {item.XWin}
                </MultipleChildLast>
            </MultipleChildFirst>
        </MultipleItem>
        <CountColors>{item.countColor}</CountColors>
    </ScoredItem>
);

export default ScoreboardItems;