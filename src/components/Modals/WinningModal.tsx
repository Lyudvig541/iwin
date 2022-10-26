import Image from 'next/image';
import WinningImg from '../../assets/images/winning.png';
import React from 'react';
import styled from 'styled-components';
import { IWinningModals } from '../../interface/components-ts/modals-ts/IMOdals';

const WinningModal = ({
    open,
    coefficient,
    amount,
    height,
    width,
    widthM,
    heightM,
    pt
}: IWinningModals) => (
    <ModalContent
        open={open}
        height={height}
        width={width}
        widthM={widthM}
        heightM={heightM}
        pt={pt}
    >
        <BlockImage>
            <Image src={WinningImg} alt={'win'}/>
        </BlockImage>
        <Block>
            <CoefficientPart>{coefficient} X</CoefficientPart>
            <AmountPart>{amount} ETH</AmountPart>
        </Block>
    </ModalContent>
);

const ModalContent: any = styled.div`
  margin: auto 0;
  z-index: 10000;
  display: ${({ open }: any) => open ? 'block' : 'none'};
  position: absolute;
  padding-top: ${({ pt }: any) => pt || '96px'};;
  height: ${({ height }: any) => height || '482px'};
  width: ${({ width }: any) => width || '473px'};
  background: ${props => props.theme.bgColors.color39};
  @media (max-width: 500px) {
    max-width: ${({ widthM }: any) => widthM || '343px'};
    padding-top: 35px;
    height: ${({ height }: any) => height || '320px'};
    padding-right: 11px;
  }
`;

const BlockImage: any = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 169px;
`;
const Block: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CoefficientPart: any = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  height: 48px;
  width: 127px;
  background: ${props => props.theme.bgColors.color40};
  border-radius: 50px 0 0 50px;
  justify-content: center;
  color: ${props => props.theme.textColors.white};
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 23px;
    width: 87px;
    height: 32px;
  }
`;
const AmountPart: any = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18.4538px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  width: 233px;
  height: 48px;
  background: ${props => props.theme.bgColors.color2};
  border-radius: 0 50px 50px 0;
  color: ${props => props.theme.textColors.color1};
  @media (max-width: 500px) {
    font-size: 12.8298px;
    line-height: 17px;
    width: 160px;
    height: 32px;
  }
`;

export default WinningModal;