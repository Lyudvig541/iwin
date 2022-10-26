import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import style from '../../../../styles/pages/Home.module.css';
import X2Image from '../../../assets/images/X2bonus.png';
import Image from 'next/image';

const BonusBlock = () => (
    <Bonus>
        <div className={style.LandingBonusBlockBackground}>
            <BonusBlockWrapper>
                <MoreBonusBlock>
                    <X2ImageBlock>
                        <Image src={X2Image} alt={'no picture'} />
                    </X2ImageBlock>
                    <GetMoreBonusBlock>
                        <PartsWrapper>
                            <BonusBlockUpPart>Get More Bonus</BonusBlockUpPart>
                            <BonusBlockBottomPart>START PLAYING TODAY!</BonusBlockBottomPart>
                        </PartsWrapper>

                    </GetMoreBonusBlock>

                </MoreBonusBlock>
                <Button danger padding={'15.5px 61.7px'}>play now</Button>
            </BonusBlockWrapper>

        </div>
    </Bonus>
);

export default BonusBlock;


const Bonus = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  width: 100%;
`;

const BonusBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreBonusBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 635px;
  margin-bottom: 69px;
  
  @media(max-width: 586px) {
    width: auto;
  }
`;

const X2ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  position: relative;
  top: 10px;
  z-index: 1;
  
  @media(max-width: 586px) {
    max-width: 109px;
    top: 4px;
  }
`;

const GetMoreBonusBlock = styled.div`
    display: flex;
    align-self: end;
    flex-direction: column;
    align-items: center;
    background: #13052d4d;
    border-radius: 12px;
    transform: matrix(1, -0.02, 0.02, 1, 0, 0);
    width: 577px;
  
  @media(max-width: 586px) {
    width: 303px;
  }
`;

const PartsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: matrix(1, 0.08, -0.08, 1, 0, 0);
  border-radius: 12px;
  overflow: hidden;
`;

const BonusBlockUpPart = styled.div`
  width: 100%;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 900;
  font-size: 56px;
  line-height: 76px;
  text-align: center;
  color: #FFFFFF;
  background: #13052D;
  
  @media(max-width: 586px) {
    height: auto;
    font-style: normal;
    font-weight: 900;
    font-size: 29.4325px;
    line-height: 40px;
  }
`;

const BonusBlockBottomPart = styled.div`
  width: 100%;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 900;
  font-size: 39px;
  line-height: 53px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: linear-gradient(88.23deg, #6F39CC 1.5%, #8740FF 98.5%);
  
  @media(max-width: 586px) {
    height: auto;
    font-style: normal;
    font-weight: 900;
    font-size: 20.4976px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }
`;
