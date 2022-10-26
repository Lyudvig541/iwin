import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { isRealMode } from '../../store/acions/realMode';
import { ICheckbox } from '../../interface/components-ts/chackbox-ts/ICheckbox';
import { IRealMode } from '../../interface/store-ts/actions/realMode';


const SwitchedBlock = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
`;

const SwitchInput = styled.input`
  position: absolute;
  margin: 8px 0 0 16px;

  & + label {
    position: ${({ position }: {position: string }) => position || 'relative'};
    width: 100%;
    height: 100%;
  }

  & + label:before {
    content: "";
    position: absolute;
    display: block;
    padding: 2px;
    left: 0;
    top: 0;
    width: 42px;
    height: 18px;
    border-radius: 16px;
    background: ${props => props.theme.bgColors.white};
    border: 1px solid ${props => props.theme.buttonColors.borderColor5};
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }

  & + label:after {
    cursor: pointer;
    content: "";
    position: absolute;
    display: block;
    margin: 2px 0 0 2px;
    width: 18px;
    height: 18px;
    border-radius: 16px;
    background: ${props => props.theme.textColors.color3};
    border: 1px solid ${props => props.theme.buttonColors.borderColor5};
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  & + label:hover:after {
    box-shadow: 0 0 5px ${props => props.theme.textColors.color5};
  }

  &:checked + label:after {
    margin: 2px 0 0 26px;
    background:  ${props => props.theme.bgColors.white};
  }

  &:checked + label:before {
    background: ${props => props.theme.bgColors.color18};
    padding: 2px;
  }
`;


const Checkbox = ({ position, param }: ICheckbox) => {

    const dispatch = useDispatch();
    const { realMode } = useSelector((state: IRealMode) => state.realMode);

    const onChangeCheckbox = () => {

        dispatch(isRealMode({ gameName: param, bool: !realMode }));

    };

    useEffect(() => {

        if (realMode === null) {

            dispatch(isRealMode({ gameName: param, bool: true }));
        
        }

    }, [param, dispatch]);

    return (
        <SwitchedBlock>
            <SwitchInput
                type="checkbox"
                className="ios8-switch"
                id="checkbox-1"
                position={position}
                checked={realMode}
                hidden
                onChange={onChangeCheckbox}
            />
            <label htmlFor="checkbox-1"/>
        </SwitchedBlock>
    );

};

export default Checkbox;
