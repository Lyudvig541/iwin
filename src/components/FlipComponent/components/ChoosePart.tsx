import styled, { css } from 'styled-components';
import Image from 'next/image';
import Heads from '../../../assets/images/Heads.svg';
import BigHeads from '../../../assets/images/BigHeads.png';
import Tails from '../../../assets/images/Tails.svg';
import BigTails from '../../../assets/images/BigTails.png';
import { TextStyle } from '../../Text/TextStyles/styles';
import { IChoosePart } from '../../../interface/components-ts/flip-ts/IFlipPage';
import { useSelector } from 'react-redux';
import { IState } from '../../../interface/store-ts/actions/lightMode';

const ChoosePart = ({ active, changeCoin, isRolling, result, isClick, winClassName }:IChoosePart) => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    return <ChoosePartContent>
        <Coins>
            <ChooseBack active={active === 'heads'}>
                <ChooseBody active={active === 'heads'} onClick={() => changeCoin('heads')}>
                    <Coin>
                        <Image src={Heads} alt={'...'}/>
                    </Coin>
                    <BackgroundCoin active={active === 'heads'}/>
                    <Info active={active === 'heads'}>
                        <TextStyle 
                            margin="25px 0 0 0" 
                            lineHeight="22px" 
                            color={lightMode ?'#736F6F':'#BDBDBD'} 
                            fontSize="16px"
                        >HEADS</TextStyle>
                        <TextStyle 
                            margin="10px 0 0 0" 
                            lineHeight="19px" 
                            color={lightMode ?'#736F6F':'#BDBDBD'}
                        >9.3X</TextStyle>
                    </Info>
                </ChooseBody>
            </ChooseBack>
            <ChooseBack active={active === 'tails'}>
                <ChooseBody active={active === 'tails'} onClick={() => changeCoin('tails')}>
                    <Coin>
                        <Image src={Tails} alt={'...'}/>
                    </Coin>
                    <BackgroundCoin active={active === 'tails'}/>
                    <Info active={active === 'tails'}>
                        <TextStyle 
                            margin="25px 0 0 0" 
                            lineHeight="22px" 
                            fontSize="16px"
                            color={lightMode ?'#736F6F':'#BDBDBD'}
                        >TAILS</TextStyle>
                        <TextStyle 
                            margin="10px 0 0 0" 
                            lineHeight="19px" 
                            color={lightMode ?'#736F6F':'#BDBDBD'}
                        >9.3X</TextStyle>
                    </Info>
                </ChooseBody>
            </ChooseBack>
        </Coins>
        <Animation>
            <AnimationArea>
                <SelectedCoin isRolling={isRolling} winClassName={winClassName} stopAnimation={result} isClick={isClick}>
                    <AnimationTails>
                        <Image
                            src={BigTails}
                            alt={'...'}
                            sizes="(max-width: 300px) 100"
                        />
                    </AnimationTails>
                    <AnimationHeads>
                        <Image
                            src={BigHeads}
                            alt={'...'}
                            sizes="(max-width: 300px) 100"
                        />
                    </AnimationHeads>
                </SelectedCoin>
            </AnimationArea>
        </Animation>
    </ChoosePartContent>;

};

export default ChoosePart;

const AnimationArea = styled.div`
  display: flex;
  padding: 25px;
  border-radius: 50%;
  background: ${props => props.theme.buttonColors.mix17};
  box-shadow: inset 0 0 16px ${props => props.theme.bgColors.color10}, inset 0 40px 48px ${props => props.theme.bgColors.color21};
  width: fit-content;
  margin: 0 auto;
  @media (max-width: 870px) {
    padding: 12.15px;
    width: max-content;
    & div {
      width: 150px;
      height: max-content;
    }
  }
  @media (max-width: 586px) {
    padding: 12.15px;
    width: 40%;
    & div {
      width: 200px;
      height: max-content;
    }
  }
`;

const AnimationHeads = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
`;
const AnimationTails = styled.div`
  width: 200px;
  height: 200px;
  transform: rotateY(1 80deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
`;
const SelectedCoin:any = styled.div`
  position: relative;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  cursor: pointer;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & div {
    bottom: 0;
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 790px) {
    width: 200px;
    height: 200px;
  }
  ${({ isClick }:any) => isClick && css`
    -webkit-animation: clickeffect 3s infinite;
    -moz-animation: clickeffect 3s infinite;
    animation: clickeffect 3s linear infinite;
    animation-iteration-count: 1;
    @keyframes clickeffect {
      0% {
        transform: scale(1, 1) rotateY(0deg);
        -moz-transform: scale(1, 1) rotateY(0deg);
      }
      50% {
        transform: scale(1.5, 1.5) rotateY(900deg);
        -moz-transform: scale(1.5, 1.5) rotateY(900deg);
      }
      100% {
        transform: scale(1.5, 1.5) rotateY(1800deg);
        -moz-transform: scale(1.5, 1.5) rotateY(1800deg);
      }
    }`};
  ${({ isRolling }:any) => isRolling && css`
    -webkit-animation: zoomeffect 3s linear infinite;
    -moz-animation: zoomeffect 3s linear infinite;
    animation: zoomeffect 3s linear infinite;
    @keyframes zoomeffect {
      0% {
        transform: scale(1.5, 1.5) rotateY(180deg);
        -moz-transform: scale(1.5, 1.5) rotateY(180deg);
      }
      100% {
        transform: scale(1.5, 1.5) rotateY(1800deg);
        -moz-transform: scale(1.5, 1.5) rotateY(1800deg);
      }
    }
  `};
  ${({ stopAnimation, winClassName }:any) => stopAnimation && winClassName === 'heads' && css`
    animation: endEffectHeads 3s linear infinite;
    -webkit-animation: endEffectHeads 3s linear infinite;
    -moz-animation: endEffectHeads 3s linear infinite;
    -moz-animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    @keyframes endEffectHeads {
      0% {
        transform: scale(1.5, 1.5) rotateY(0deg);
        -moz-transform: scale(1.5, 1.5) rotateY(0deg);
      }
      50% {
        transform: scale(1.5, 1.5) rotateY(900deg);
        -moz-transform: scale(1.5, 1.5) rotateY(900deg);
      }
      100% {
        transform: scale(1, 1) rotateY(1980deg);
      }
    }
  `}
  ${({ stopAnimation, winClassName }:any) => stopAnimation && winClassName === 'tails' && css`
    animation: endEffectTails 3s linear infinite;
    -webkit-animation: endEffectTails 3s linear infinite;
    -moz-animation: endEffectTails 3s linear infinite;
    -moz-animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    @keyframes endEffectTails {
      0% {
        transform: scale(1.5, 1.5) rotateY(0deg);
        -moz-transform: scale(1.5, 1.5) rotateY(0deg);
      }
      50% {
        transform: scale(1.5, 1.5) rotateY(900deg);
        -moz-transform: scale(1.5, 1.5) rotateY(900deg);
      }
      100% {
        transform: scale(1, 1) rotateY(1800deg);
      }
    }
  `}
`;
const ChoosePartContent = styled.div`
  display: flex;
  width: 709px;
  background: ${props => props.theme.buttonColors.mix18};
  border-radius: 20px;
  padding: 20px;
  position: relative;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width: 650px;
  }
  @media (max-width: 1158px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 16px;
    display: block;
  }
  @media (max-width: 586px) {
    margin-bottom: 50px;
  }
  @media (max-width: 400px) {
    margin-bottom: 0;
  }
`;

const ChooseBack: any = styled.div`
  background: ${({ active, theme }: any) => active ? theme.buttonColors.mix19 : 'none'};
  cursor: ${({ active }: any) => active ? 'default' : 'pointer'};
  z-index: 2;
  display: flex;
  padding: 4px;
  border-radius: 16px;
`;

const ChooseBody: any = styled.div`
  background: ${({ active, theme }: any) => active ? theme.bgColors.color26 : theme.bgColors.color11};
  position: relative;
  border-radius: 16px;
  align-items: center;
  text-align: center;

  & img {
    z-index: 3;
  }

  @media (max-width: 768px) {
    & img {
      width: 80px !important;
      height: 80px !important;
    }
  }
  @media (max-width: 586px) {
    & img {
      width: 64px !important;
      height: 64px !important;
    }
  }
`;
const Coins = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 586px) {
    margin-bottom: 90px;
  }
`;
const BackgroundCoin:any = styled.div`
  display: ${({ active }:any) => active ? 'block' : 'none'};
  position: absolute;
  width: 80px;
  height: 40px;
  top: 55px;
  z-index: 1;
  background: ${props => props.theme.buttonColors.mix19};
  filter: blur(24px);
  left: 25%;
  @media (max-width: 768px) {
    top: 45px;
    width: 64px;
    height: 32px;
  }
`;
const Coin = styled.div`
  margin: 12px 40px;
  @media (max-width: 768px) {
    margin: 12px 34px;
  }
`;
const Info:any = styled.div`
  padding-bottom: 10px;
  width: 100%;
  background: ${({ active, theme }: any) => active ? theme.buttonColors.mix20 : 'transparent'};
  border-radius: 0 0 16px 16px;
`;
const Animation = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: -10px;
  left: 0;
  @media (max-width: 870px) {
    top: 9%;
  }
  @media (max-width: 586px) {
    top: 60%;
  }
  @media (max-width: 513px) {
    top: 65%;
  }
  @media (max-width: 420px) {
    top: 75%;
  }
`;