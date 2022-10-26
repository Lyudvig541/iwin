import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../Button/Button';

//images
import ErrorImage from '../../assets/images/illustration.png';
import OopsImage from '../../assets/images/groupOops.png';


const ErrorPageBlock = () => {

    const router = useRouter();

    return <ErrorPageBackground>
        <ErrorContainer>
            <ErrorImageBlock>
                <ErrorImg>
                    <Image src={ErrorImage} alt={'error image'}/>
                </ErrorImg>
            </ErrorImageBlock>

            <ErrorTitleAndDescription>
                <ErrorTitle>
                    <ErrorOopsImg><Image src={OopsImage} alt={'oops image'}/></ErrorOopsImg>
                    Oops!
                </ErrorTitle>
                <ErrorDescription>An unknown error occurred. Please refresh the page, or visit from another browser or
                    device.
                </ErrorDescription>
                <Button
                    primary
                    onClick={() => router.push('/')}
                    padding = {'15.6px 64px;'}
                >
                    go home
                </Button>
            </ErrorTitleAndDescription>
        </ErrorContainer>
    </ErrorPageBackground>
    ;

};


export default ErrorPageBlock;

const ErrorPageBackground = styled.div`
  background-color: ${props => props.theme.bgColors.color2};
`;
const ErrorContainer = styled.div`
  max-width: 485px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorImageBlock = styled.div`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  background: ${props => props.theme.buttonColors.mix21};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 101px 0 25px;
`;
const ErrorImg = styled.div`
  height: 335px;
  width: 300px;
`;
const ErrorTitleAndDescription = styled.div`
  max-width: 485px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 211px;
`;

const ErrorTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 87px;
  color: ${props => props.theme.textColors.color1};
  margin: 0;
  position: relative;
`;

const ErrorOopsImg = styled.span`
  width: 345px;
  position: absolute;
  bottom: 25px;
  left: -70px;
`;

const ErrorDescription = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.01em;
  margin: 24px 0 48px;
  color: ${props => props.theme.textColors.color8};
`;