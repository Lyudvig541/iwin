import React, { useMemo } from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ThemeNew } from '../../../constants/themeNew';
import GameBlockDice from '../../../assets/images/DiceGameBlock.svg';
import GameBlockFlip from '../../../assets/images/FlipGameBlock.svg';
import GameBlockWheel from '../../../assets/images/WheelGameBlock.svg';
import { useSelector } from 'react-redux';
import { IState } from '../../../interface/store-ts/actions/lightMode';

const GamesBlock = () => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    const router = useRouter();
    const theme = useMemo(() => (lightMode && ThemeNew.lightMode) || ThemeNew.darkMode, [lightMode]);

    const list = useMemo(() => [
        {
            id: 1,
            img: GameBlockDice,
            background: theme.bgColors?.diceBg,
            name: 'DICE GAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            positionImg: true,
            display: true,
            route: '/dice'
        },
        {
            id: 2,
            img: GameBlockFlip,
            background: theme.bgColors?.flipBg,
            name: 'FLIP GAME',
            centerBlock: true,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            display: true,
            route: '/flip'
        },
        {
            id: 3,
            img: GameBlockWheel,
            background: theme.bgColors?.wheelBg,
            name: 'WHEEL GAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            positionImg: false,
            display: true,
            route: '/wheel'

        }
    ], [theme.bgColors?.diceBg, theme.bgColors?.flipBg, theme.bgColors?.wheelBg]);

    return <GamesBlockGeneral>
        {list.length && list?.map(item => <GamesBlockContainer key={item.id}>
            <GameChildBlock
                displayReverse={item.centerBlock}
                background={item.background}
            >
                <GamesBlockInfo alignItems={item.centerBlock}>
                    <GamesBlockName>{item.name}</GamesBlockName>
                    <GamesBlockText alignItems={item.centerBlock}>{item.text}</GamesBlockText>
                    <Button danger padding={'17.5px 63.68px'} onClick={() => {

                        router.push(item.route);

                    }}>play now</Button>
                </GamesBlockInfo>

                <GamesBlockImage displayReverse={item.centerBlock} positionImg={item.positionImg}>
                    <Image src={item.img} alt={'img'}/>
                </GamesBlockImage>
            </GameChildBlock>

            <GamesBlockInfo displayNone={item.display}>
                <GamesBlockName>{item.name}</GamesBlockName>
                <GamesBlockText alignItems={item.centerBlock}>{item.text}</GamesBlockText>
                <Button secondary padding={'17.5px 63.8px'}>play now</Button>
            </GamesBlockInfo>
        </GamesBlockContainer>)}
    </GamesBlockGeneral>;

};


export default GamesBlock;

const GamesBlockContainer = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;

`;
const GamesBlockGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameChildBlock: any = styled.div`
  display: flex;
  flex-direction: ${({ displayReverse }:any) => displayReverse ? 'row-reverse' : 'row'};
  align-items: center;
  margin-top: 56px;
  max-width: 1160px;
  width: 100%;
  position: relative;
  background: ${({ background }:any) => background};
  height: 374px;
  padding: 0 98px;
  border-radius: 20px;
  @media (max-width: 1080px) {
    height: 280px;
  }
  @media (max-width: 800px) {
    height: 220px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
  @media (max-width: 400px) {
    height: 162px;
    margin-top: 82px;
  }
`;
const GamesBlockInfo:any = styled.div`
  max-width: 458px;
  width: 100%;
  display: ${({ displayNone }: any) => !displayNone ? 'flex' : 'none'};
  flex-direction: column;
  align-items: ${({ alignItems }:any) => alignItems ? 'start' : 'end'};
  @media (max-width: 980px) {
    max-width: 400px;
  }
  @media (max-width: 780px) {
    max-width: 345px;
  }
  @media (max-width: 630px) {
    display: ${({ displayNone }: any) => displayNone ? 'flex' : 'none'};
    margin: 48px auto 0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const GamesBlockName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.textColors.color1};
`;
const GamesBlockText:any = styled.div`
  max-width: 458px;
  width: 100%;
  text-align: ${({ alignItems }:any) => alignItems ? 'start' : 'end'};
  margin: 16px 0 24px;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 1px;
  color: ${props => props.theme.textColors.color12};
  @media (max-width: 980px) {
    max-width: 400px;
    font-size: 18px;
  }
  @media (max-width: 630px) {
    text-align: center;
    font-size: 20px;
  }
`;

const GamesBlockImage:any = styled.div`
  position: absolute;
  width: fit-content;
  right: ${({ positionImg }:any) => positionImg ? '-25px' : '-94px'};
  top: ${({ positionImg }:any) => positionImg ? '-30px' : '-69px'};
  left: ${({ displayReverse }:any) => displayReverse ? '-120px' : ''};
  bottom: ${({ displayReverse }:any) => displayReverse ? '-30px' : ''};
  @media (max-width: 1080px) {
    width: 37%;
    right: 0;
    left: ${({ displayReverse }:any) => displayReverse ? '-20px' : ''};
    top: ${({ displayReverse }:any) => displayReverse ? '-40px' : '-30px'};

  }
  @media (max-width: 800px) {
    width: 280px;
    height: 200px;
  }
  @media (max-width: 420px) {
    width: 240px;
  }`;