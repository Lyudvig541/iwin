import React, { useState } from 'react';

import Image from 'next/image';
import DropDownItems from './DropDownItems';
import styled from 'styled-components';

import arrowDown from '../../assets/icons/down.svg';
import arrowDownLight from '../../assets/icons/downLight.svg';

import { useShowModal } from '../../hooks/useShowModal';
import { useSelector } from 'react-redux';

import { IDropDown } from '../../interface/components-ts/dropDown-ts/IDropDown';
import { IState } from '../../interface/store-ts/actions/lightMode';

const CustomDropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 1158px) {
    width: auto;

  }
  @media (max-width: 875px) {
    width: auto;
  }
`;

const DropDownTitle = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSelect: any = styled.div`
  margin: ${({ titleMargin }: any) => titleMargin || '0 10px 0 0'};
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  cursor: pointer;
  ${({ active }: any) => active ? `color: ${(props: any) => props.theme.buttonColors.buttonColor1}` : `
  background: -webkit-linear-gradient(left,  ${(props: any) => props.theme.buttonColors.buttonColor1} , ${(props: any) => props.theme.buttonColors.buttonColor2});
  background: -o-linear-gradient(right,  ${(props: any) => props.theme.buttonColors.buttonColor1} , ${(props: any) => props.theme.buttonColors.buttonColor2});
  background: -moz-linear-gradient(right,  ${(props: any) => props.theme.buttonColors.buttonColor1} , ${(props: any) => props.theme.buttonColors.buttonColor2});
  background: linear-gradient(to right, ${(props: any) => props.theme.buttonColors.buttonColor1} , ${(props: any) => props.theme.buttonColors.buttonColor2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `};

  @media (max-width: 875px) {
    font-family: Noto Sans, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.3px;
  }
  @media (max-width: 780px) {
    font-family: Noto Sans, serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.3px;
  }
`;

const TitleArrow:any = styled.div`
  transform: ${({ show }:{show: boolean }) => show ? 'rotate(180deg)' : '0'};
  transition: all .1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 875px) {
    width: 12px;
  }
`;

const DropDownItemsBlock = styled.div`
  display: ${({ show }: {show: boolean }) => show ? 'flex' : 'none'};
  width: 100%;
  top: 100%;
  position: absolute;
  right: 10%;
  flex-direction: column;
  padding: 8px;
  background-color: ${props => props.theme.bgColors.color1};
  box-shadow: 0 8px 6px ${props => props.theme.bgColors.color4};
  border-radius: 10px;
`;

const DropDown = ({ data, onChange = () => {}, type, titleNumber }: IDropDown) => {

    const lightMode = useSelector((state: IState) => state.lightMode.lightMode);
    const [title, setTitle] = useState(titleNumber || <small>use default value</small>);
    const [show, setShow] = useShowModal();

    const itemData = (item: { label: number, value: number }): void => {

        setTitle(item.label);
        onChange(item.label);

    };

    return (
        <>
            <CustomDropDown>
                <DropDownTitle>
                    <TitleSelect type={type} onClick={() => setShow(!show)}>{title}</TitleSelect>
                    <TitleArrow onClick={() => setShow(!show)} show={show}>
                        {lightMode ? <Image src={arrowDownLight} width={16} height={16} alt="..."/>
                            : <Image src={arrowDown} width={22} height={22} alt="..."/>}
                    </TitleArrow>
                </DropDownTitle>
                <DropDownItemsBlock show={show}>
                    {data && data.map((item, index) =>
                        <DropDownItems
                            title= {item.label}
                            value={item}
                            key={index}
                            onChange={itemData}
                            setShow={setShow}
                        />
                    )}
                </DropDownItemsBlock>
            </CustomDropDown>
        </>
    );

};


export default DropDown;
