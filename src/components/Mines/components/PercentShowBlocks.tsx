import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import leftLight from '../../../assets/icons/leftLightIcon.svg';
import left from '../../../assets/icons/left.svg';
import rightLight from '../../../assets/icons/rightLightIcon.svg';
import right from '../../../assets/icons/right.svg';
import { useSelector } from 'react-redux';
import { IPercentShowBlocks } from '../../../interface/components-ts/mines-ts/IMinesPage';
import { IState } from '../../../interface/store-ts/actions/lightMode';
import PercentSmallBlocks from './PercentSmallBlocks';

const PercentShowBlocks = ({
    numberOfMines,
    coefficients,
    clickedCount
}: IPercentShowBlocks) => {

    const [countOfSlide, setCountOfSlide] = useState(0);
    const [gotToRight, setRight] = useState<number>();
    const lightMode = useSelector((state: IState) => state.lightMode.lightMode);

    const sliderRightImage = useMemo(() => (lightMode && rightLight) || right, [lightMode]);
    const sliderLeftImage = useMemo(() => (lightMode && leftLight) || left, [lightMode]);
    const coefficientsBlock = useMemo(() =>
        coefficients.map((mine) => (
            <PercentSmallBlocks
                key={mine.id}
                numberOfMines={numberOfMines}
                mineId={mine.id}
                clickedCount={clickedCount}
            />
        )),
    [clickedCount, coefficients, numberOfMines]);

    const prev = () => {

        if (countOfSlide) {

            let newCount = countOfSlide - 1;

            setCountOfSlide(newCount);
            setRight(newCount * 248);

        }

    };
    const next = () => {

        if (countOfSlide < coefficients.length / 4 - 1) {

            let newCount = countOfSlide + 1;

            setCountOfSlide(newCount);
            setRight(newCount * 248);

        }

    };

    useEffect(() => {

        if(clickedCount === 0) {

            setRight(0);
            setCountOfSlide(0);

        }

        if(clickedCount > 1 && clickedCount % 4 === 1) {

            setCountOfSlide(Math.floor(clickedCount / 4));
            !countOfSlide && setRight(248) || setRight((Math.floor(clickedCount / 4)) * 248);

        }

    }, [clickedCount, numberOfMines]);


    return (
        <PercentBlock>
            <PercentBlocksParent>
                {coefficients.length > 4 &&
                <SlideLeft onClick={prev}>
                    <Image src={sliderLeftImage} alt={'left'}/>
                </SlideLeft> || <SlideLeftHidden />}
                <Percent>
                    <PercentMain right={gotToRight}>
                        {coefficientsBlock}
                    </PercentMain>
                </Percent>
                {coefficients.length > 4 && <SlideRight onClick={next}>
                    <Image src={sliderRightImage} alt={'right'}/>
                </SlideRight>}
            </PercentBlocksParent>
        </PercentBlock>
    );

};


const PercentMain: any = styled.div`
  display: flex;
  gap: 6px;
  width: fit-content;
  position: relative;
  transition: 1s;
  right: ${({ right }: any) => `${right}px` || ''};
  
`;

const Percent = styled.div`
  width: 245px;
  overflow: hidden;
`;
const PercentBlock = styled.div`
  order: 2;
  position: relative;
  margin-top: 50px;
  margin-bottom: 60px;
  @media (max-width: 900px) {
    order: 1;
    margin: 25px 0;
  }
`;

const SlideRight: any = styled.div`
  background: ${({ active, theme }: any) => active ? theme.bgColors.color22 : theme.bgColors.color10};
  border-radius: 4px;
  border: none;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  align-items: center;
  position: absolute;
  right: 0;
`;
const SlideLeft: any = styled.div`
  background: ${({ active, theme }: any) => active ? theme.bgColors.color22 : theme.bgColors.color10};
  border-radius: 4px;
  border: none;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  align-items: center;
  left: 0;
`;
const SlideLeftHidden: any = styled.div`
  background: inherit;
  border-radius: 4px;
  display: flex;
  width: 24px;
  height: 24px;
  left: 0;
`;
const PercentBlocksParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export default PercentShowBlocks;