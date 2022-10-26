import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DoneIcon from '../../../assets/icons/done.png';
import { triggerModal } from '../../../store/acions/modal';
import { useDispatch } from 'react-redux';
import { IConnectItem } from '../../../interface/components-ts/walletModal-ts/WalletModal';


const ConnectItem = ({ onClick, icon, text, done }:IConnectItem) => {

    const dispatch = useDispatch();

    useEffect(() => {

        if(done) {

            dispatch(triggerModal('connectWallet', false));

        }

    }, [done]);


    return <Connector onClick={onClick} done={done ? 1 : 0}>
        <Wallet>
            <ConnectorImage text={text}>
                <Image
                    src={icon}
                    alt={'...'}
                />
            </ConnectorImage>
            <Text margin={'0 0 0 16px'}>
                {text}
            </Text>
        </Wallet>
        {done ? <DoneConnect>
            <ConnectorImage text={text}>
                <Image
                    src={DoneIcon}
                    alt={'...'}
                />
            </ConnectorImage>
            <Text margin={'0 0 0 16px'}>
                Done
            </Text>
        </DoneConnect> : null}
    </Connector>;

};

const Connector: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 25px;
  text-align: start;
  background: ${props => props.theme.bgColors.color12};
  margin-top: 25px;
  height: 64px;
  width: 417px;
  cursor: pointer;
  border-radius: 100px;
  ${({ done }: any) => done && 'border: 2px solid Theme.buttonColors.borderColor2'};

  &:hover {
    border: 2px solid ${props => props.theme.buttonColors.borderColor2};
  }

  @media (max-width: 500px) {
    padding: 20px 16px;
    width: 293px;
  }
`;
const Wallet = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 500px) {
    gap: 16px;
  }
`;
const ConnectorImage: any = styled.div`
  display: flex;
  @media (max-width: 500px) {
    width: 24px;
  }
`;
const DoneConnect = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 500px) {

  }
`;
const Text: any = styled.span`
  color: ${props => props.theme.textColors.color1};
  font-size: 14px;
  line-height: 14px;
`;

export default ConnectItem;