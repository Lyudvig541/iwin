import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderList } from '../../../../assets/static/static';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Button from '../../../Button/Button';
import SwiperController from './Cntroller';

import LeftArrow from '../../../../assets/icons/left_icon.png';
import LeftArrowLight from '../../../../assets/icons/leftLightIcon.svg';
import RightArrow from '../../../../assets/icons/right_icon.png';
import RightArrowLight from '../../../../assets/icons/rightLightIcon.svg';
import { useSelector } from 'react-redux';
import { IState } from '../../../../interface/store-ts/actions/lightMode';

const SwiperSlider = () => {

    const [activeIndex, setActiveIndex] = useState<number>();
    const [slidePrev, setPrevCall] = useState<boolean | null>(null);
    const [slideNext, setNextCall] = useState<boolean | null>(null);
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);
    const router = useRouter();

    return (
        <>
            <SwiperContainer>
                <Wrapper>
                    <Swiper
                        onProgress={() => {}}
                        containerModifierClass={'custom-swiper-coins-'}
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        onTransitionStart={(swiper) => {

                            setActiveIndex(swiper.realIndex);

                        }}
                        onTransitionEnd={(swiper) => {

                            setActiveIndex(swiper.realIndex);

                        }}
                    >
                        <div style={{ display: 'none' }}>
                            <SwiperController slideNext={slideNext} slidePrev={slidePrev} />
                        </div>
                        {sliderList.map((item, i) => <SwiperSlide key={i}>
                            <SliderListContainer
                                className={activeIndex !== i ? 'activeList' : ''} key={item.id}>
                                <SliderList className={activeIndex === i ? 'activeListBlock' : ''}
                                    background={item.background}>
                                    <SliderListImage>
                                        <Image
                                            src={item.img}
                                            alt={item.alt}
                                            sizes="(max-width: 500px) 100"
                                        />
                                    </SliderListImage>
                                    <SliderListTitle>{item.title}</SliderListTitle>

                                </SliderList>
                                {(activeIndex !== i &&
                                        <Button 
                                            primary 
                                            padding={'15.4px 62px'} 
                                            onClick={() => {

                                                router.push(item.route);

                                            }}>play now</Button>) ||
                                      (<Button 
                                          secondary 
                                          padding={'17.5px 64px'} 
                                          onClick={() => {

                                              router.push(item.route);

                                          }}>play now</Button>)}
                            </SliderListContainer>
                        </SwiperSlide>
                        )}
                    </Swiper>
                </Wrapper>
                <ArrowButtonGroup>
                    <ArrowLeftAndRight LeftArrow={true}
                        onClick={() => setPrevCall(!slidePrev)}>
                        <Image src={(lightMode && LeftArrowLight) || LeftArrow} alt={'Left arrow'}/>
                    </ArrowLeftAndRight>

                    <ArrowLeftAndRight RightArrow={true}
                        onClick={() => setNextCall(!slideNext)}>
                        <Image src={(lightMode && RightArrowLight) || RightArrow} alt={'Right arrow'}/>
                    </ArrowLeftAndRight>
                </ArrowButtonGroup>
            </SwiperContainer>
        </>
    );

};

const SwiperContainer = styled.div`
  max-width: 1452px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  @media (max-width: 1250px) {
    flex-wrap: wrap-reverse;
  }
`;

const Wrapper = styled.div`
  width: 1195px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 156px;
  @media (max-width: 586px) {
    width: 812px;
  }
`;

const ArrowButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 75px;
  @media (max-width: 1250px) {
    position: absolute;
    bottom: -95px;
  }
`;

const ArrowLeftAndRight:any = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.bgColors.color33};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: ${({ RightArrow }:any) => RightArrow ? 0 : ' '};
  left: ${({ LeftArrow }:any) => LeftArrow ? 0 : ''};
  z-index: 1;
  margin: 0 24px;

  :hover {
    opacity: .7;
  }

  @media (max-width: 1250px) {
    position: relative;
  }
`;
const SliderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderList:any = styled.div`
  width: 345px;
  height: 187px;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 33px 24px;

  background: ${({ background }: any) => background};
  border-radius: 20px;
  @media (max-width: 586px) {
    width: 259px;
    height: 140px;
    margin: 0 8px 42px;
  }
`;
const SliderListImage = styled.div`
  position: absolute;
  max-width: 300px;
  height: 160px;
  top: -90px;
  @media (max-width: 586px) {
    max-width: 210px;
  }
`;
const SliderListTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.textColors.white};
  text-transform: uppercase;
  display: flex;
  align-items: end;
  margin-bottom: 24px;
  @media (max-width: 586px) {
    font-size: 20px;
  }
`;

export default SwiperSlider;