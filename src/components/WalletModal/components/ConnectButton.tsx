import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';
import { IWhalletModal } from '../../../interface/components-ts/modals-ts/IMOdals';

export default function WalletModal({ onClick, name, logo }: IWhalletModal) {

    return (
        <ButtonWrapper onClick={(e) => onClick(e)}>
            <Image src={logo} width={22} alt="does not exist" />
            <Name>{name}</Name>
        </ButtonWrapper>
    );

}

WalletModal.defaultProps = {};


const ButtonWrapper = styled.button`
  height: 64px;
  background-color: rgba(19, 5, 45, 0.64);
  border-radius: 8px;
`;


const Name = styled.div`
  
`;
