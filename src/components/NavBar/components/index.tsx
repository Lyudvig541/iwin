import React from 'react';
import Image from 'next/image';
import DropDownItems from './DropDownItems';
import styled from 'styled-components';
import arrowDown from '../../../assets/icons/arrow-drop-down.png';
import arrowDownLight from '../../../assets/icons/arrow-down-light.png';
import Button from '../../Button/Button';
import { TextStyle } from '../../Text/TextStyles/styles';
import { useShowModal } from '../../../hooks/useShowModal';
import { INavBar } from '../../../interface/components-ts/navBar-ts/INavBar';
import { useSelector } from 'react-redux';
import { IState } from '../../../interface/store-ts/actions/lightMode';

const CustomDropDown = styled.div`
  z-index: 1;
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 875px) {
    width: auto;
  }
  &:hover {
    > div {
      > div {
        color: ${props => props.theme.bgColors.white};
      }
    }
`;

const DropDownTitle = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSelect: any = styled.div`
  margin: 0 8px 0 0;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  width: auto;
  text-decoration: none;
  color: ${({ titleColor, theme }: any) => titleColor || theme.textColors.color1};

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
`;

const SelectIconImg = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    
    & > span {
      width: 16px !important;
    }
`;

export const TitleArrow: any = styled.div`
  transform: ${({ show }: any) => show ? 'rotate(180deg)' : '0'};
  transition: all .1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
    width: ${(({ lightMode }: any) => lightMode ? '16px' : '10.67px') };
    height: ${(({ lightMode }: any) => lightMode ? '16px' :'5.33px') };
 & > span {
     width: ${(({ lightMode }: any) => lightMode ? '16px' : '10.67px') }!important;
     height: ${(({ lightMode }: any) => lightMode ? '16px' : '5.33px') }!important;
 }
    
  @media (max-width: 875px) {
    width: 12px;
  }
`;

const DropDownItemsBlock: any = styled.div`
  display: ${({ show }: any) => show ? 'flex' : 'none'};
  width: max-content;
  top: 250%;
  right: -25px;
  position: absolute;
  flex-direction: column;
  padding: ${({ padding }: any) => padding || '20px 14px'};
  background-color: ${props => props.theme.bgColors.color1};
  box-shadow: 0 8px 6px ${props => props.theme.bgColors.color4};
  border-radius: 10px;
`;
const DropDownItemContent: any = styled.div`
  display: flex;
  align-items: center;
  width: 232px;
  padding: ${({ padding }: any) => padding || '0 0 0 0'};
`;

const IconPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 16px;
  height: 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
  color: ${props => props.theme.bgColors.white};
`;


const DropDown = ({ titleColor, title, activeId, onToggle, icon, data }: INavBar) => {

    const [ show, setShow, dropDownRef ] = useShowModal();
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    return (
        <>
            <CustomDropDown ref={dropDownRef}>
                <DropDownTitle onClick={(e) => {

                    e.preventDefault();
                    setShow(!show);

                }}>
                    <TitleSelect titleColor={titleColor}>
                        <SelectIconImg>
                            <Image
                                sizes="(max-width: 300px) 100"
                                src={icon} 
                                alt="..."
                            />
                        </SelectIconImg>
                        <TextStyle
                            margin={'0 0 0 8px'}
                            color={!lightMode ?'#736F6F':'rgba(230, 110, 96, 1)'}
                        >{title}</TextStyle>
                    </TitleSelect>
                    <TitleArrow
                        show={show}
                        lightMode={lightMode}
                    >
                        <Image
                            src={lightMode ? arrowDownLight : arrowDown}
                            alt="..."
                            sizes="(max-width: 300px) 100"
                        />
                    </TitleArrow>
                </DropDownTitle>
                <DropDownItemsBlock show={show} padding={'16px 8px'}>
                    {data?.map((item, idx) => (
                        <DropDownItems
                            data={item}
                            key={idx}
                            active={activeId === item.chainId}
                            onChange={onToggle}
                            setShow={setShow}
                            margin={idx === data.length - 1 ? '0 0 0 0' : '0 0 10px 0'}
                        >
                            <Button coinInfo>
                                <DropDownItemContent active={activeId === item.chainId} padding="15px 14px 16px 19px">
                                    <IconPart>
                                        <Image
                                            src={item.icon}
                                            alt={item.code} 
                                        />
                                    </IconPart>
                                    <Title>
                                        {item.coin}
                                    </Title>
                                </DropDownItemContent>
                            </Button>
                        </DropDownItems>
                    ))}
                </DropDownItemsBlock>
            </CustomDropDown>
        </>
    );

};


export default DropDown;
