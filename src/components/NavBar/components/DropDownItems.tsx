import React from 'react';
import styled from 'styled-components';
import { IDropDownItems } from '../../../interface/components-ts/navBar-ts/INavBar';

const DropDownItemBlock: any = styled.div`
  margin: ${({ margin }: any) => margin};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textColors.color2};
  height: 48px;
  width: auto;
  ${({ active }: any) => !active && 'opacity: 0.5'};
  &:hover {
    
  }
    & > p {
      color: ${props => props.theme.textColors.color1};
    }
  }
`;

const DropDownItemTitle = styled.p`
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
  color: ${props => props.theme.textColors.color3};
  height: 48px;
`;


const DropDownItems = ({ data, active, onChange, setShow, children, margin }: IDropDownItems) => {

    const onChangeItems = () => {

        onChange(data);
        setShow(false);

    };

    return (
        <DropDownItemBlock active={active} onClick={onChangeItems} margin={margin}>
            {/* eslint-disable-next-line react/no-children-prop */}
            <DropDownItemTitle children={children}/>
        </DropDownItemBlock>
    );

};

export default DropDownItems;
