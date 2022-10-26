import React from 'react';
import styled from 'styled-components';
import { IDropDownItems, IValue } from '../../interface/components-ts/dropDown-ts/IDropDown';

const DropDownItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textColors.color2};
  height: 48px;
  width: 162px;
  cursor: pointer;
  z-index: 1000;
  background: ${props => props.theme.bgColors.color1};;
  
  @media(max-width: 875px) {
    width: auto;
  }
  
  &:hover {
    background: ${props => props.theme.buttonColors.mix1};
    border-radius: 6px;
    
    & > p {
      color: ${props => props.theme.textColors.color1};
    }
  }
`;

const DropDownItemTitle:any = styled.p`
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color:  ${props => props.theme.textColors.color3};
  height: 48px;
`;


const DropDownItems = ({ onChange, value, setShow, title }: IDropDownItems) => {


    const onChangeTitle = (value: IValue):void => {

        onChange(value);
        setShow(false);

    };

    return (
        <DropDownItemBlock onClick={() => onChangeTitle(value)}>
            <DropDownItemTitle >
                {title}
            </DropDownItemTitle>
        </DropDownItemBlock>
    );

};

export default DropDownItems;
