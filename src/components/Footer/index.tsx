import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Icon from '../../assets/images/Logo.png';
import DevelopedByEXIO from '../../assets/images/ExioPart.png';

const FooterRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  background: ${props => props.theme.bgColors.color2};
  
  @media(max-width: 946px) {
    height: auto;
  }
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1450px) {
    max-width: 1200px;
    padding: 0 35px;
  }
  
  @media(max-width: 1320px) {
    padding: 0 35px;
  }

  @media(max-width: 946px) {
    flex-direction: column;
    padding: 28px 35px 16px;
  }
`;

const IconPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13px;
`;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyRightText = styled.p`
  font-family: Noto Sans,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;
  color:  ${props => props.theme.textColors.color3};
`;

const ExioBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DevelopedBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DevelopedBlockText = styled.p`
  font-family: Inter,sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.textColors.color7};
  margin: 0 8px 0 0;
`;

const Footer = () => (
    <FooterRow>
        <FooterContainer>
            <IconPart>
                <IconBlock>
                    <Image src={Icon} alt="does not exist" />
                </IconBlock>
                <CopyRight>
                    <CopyRightText>
                        iWIN. 2021 &#169;
                    </CopyRightText>
                </CopyRight>
            </IconPart>
            <ExioBlock>
                <DevelopedBlock>
                    <DevelopedBlockText>Developed by</DevelopedBlockText>
                    <a href="https://exio.tech/" target="_blank" rel="noreferrer">
                        <Image src={DevelopedByEXIO} alt="does not exist" />
                    </a>
                </DevelopedBlock>
            </ExioBlock>
        </FooterContainer>
    </FooterRow>
);

export default Footer;