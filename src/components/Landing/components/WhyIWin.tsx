import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import iWinImage from '../../../assets/images/Bluur.png';
import Button from '../../Button/Button';

const WhyIWin = () => <>
    <WhyIWinBlock>
        <WhyIWinBlockImage>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={iWinImage}/>
        </WhyIWinBlockImage>
        <WhyIWinInfoBlock>
            <WhyIWinInfoBlockTitle> Why iWin?</WhyIWinInfoBlockTitle>
            <WhyIWinInfoBlockText>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Sollicitudin <br/> fames mauris
                bibendum pharetra nulla <br/> purus sed velit.
            </WhyIWinInfoBlockText>
            <Button primary padding={'15.5px 35.7px'}>CONNECT WALLET</Button>
        </WhyIWinInfoBlock>
    </WhyIWinBlock>
</>;

export default WhyIWin;

const WhyIWinBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 208px 0;  
  @media (max-width: 630px){
    flex-direction: column-reverse;
    margin: 100px 0 0 0;
  }
`;
const WhyIWinBlockImage = styled.div`
  margin-right: 106px;
  @media (max-width: 980px){
    margin-right: 50px;
  }
  @media (max-width: 630px){
    margin-right: 0;
  }
  @media (max-width: 586px){
    margin-right: -60px;
    width: 615px;
  }
`;

const WhyIWinInfoBlock = styled.div`
  max-width: 570px;
  width: 100%;
  @media (max-width: 980px){
    max-width: 337px;
  }
  @media (max-width: 630px){
    max-width: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const WhyIWinInfoBlockTitle = styled.h2`
  margin: 0 0 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  color: ${props => props.theme.textColors.color1};
  @media (max-width: 980px){
    font-size: 48px;
    line-height: 65px;
  }
  @media (max-width: 630px) {
    margin: 20px 0;
  }
  @media (max-width: 586px) {
    margin: 120px 0 20px;
  }
  @media (max-width: 420px){
    font-size: 42px;
    line-height: 57px;
  }
`;

const WhyIWinInfoBlockText = styled.p`
  margin: 32px 0 40px 0;
  font-family: Inter,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 1px;
  color: ${props => props.theme.textColors.color1};
  @media (max-width: 980px){
    font-size: 16px;
  }
  @media (max-width: 420px){
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #BDBDBD;
    margin: 4px 0 34px 0;
  }
`;
