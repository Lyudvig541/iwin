import styled from 'styled-components';
import bg from '../../../assets/images/backgroundLeading.png';
import bgLight from '../../../assets/images/bgLight.png';
import storage from '../../../utils/storage';

const lightMode: any = storage.get('lightMode');

const LandingPage: any = styled.div`
  background-image: url(${() => (lightMode && bgLight) || bg});
  background-color: ${props => props.theme.bgColors.color2};
`;

const LandingContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

const LandingSliderContainer = styled.div`
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const LandingTitle: any = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 76px;
  text-align: center;
  color: ${props => props.theme.textColors.color1};
  margin: 0;
  padding: 102px 0 24px;
  @media (max-width: 980px){
    font-size: 48px;
    line-height: 65px;
  }
  @media (max-width: 586px){
    padding: 162px 0 24px;

  }
  @media (max-width: 420px){
    font-size: 42px;
    line-height: 57px;
    padding: 136px 0 24px;
  }
`;

const LandingText: any = styled.p`
  max-width: 588px;
  width: 100%;
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColors.color3}; 
  @media (max-width: 420px){
    width: 286px;
  }
`;

export {
    LandingSliderContainer,
    LandingPage,
    LandingContainer,
    LandingTitle,
    LandingText
};