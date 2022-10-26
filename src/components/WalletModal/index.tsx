import Modal from '../Modals';
import { injected } from '../../connectors';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import LoadingIcon from '../../assets/icons/loading.png';
import ConnectItem from './components/ConnectItem';
import styled from 'styled-components';
import Image from 'next/image';
import { wallets } from '../../assets/static-data';
import { useSelector } from 'react-redux';
import { IConnectionState, IWalletModal } from '../../interface/components-ts/walletModal-ts/WalletModal';

const WalletModal = ({ selectedWallet, setSelectedWallet }:IWalletModal) => {

    const { activate, active, account } = useWeb3React();
    const { connectWallet } = useSelector((state: IConnectionState) => state.modal);
    const [ windowEth, setWindowEth ] = useState(false);
    const [ pending, setPending ] = useState(false);

    useEffect(() => {

        //@ts-ignore
        const eth = !!window.ethereum;

        setWindowEth(eth);

    }, []);

    useEffect(() => {

        if (account) {

            setPending(false);

        }

    }, [active, account]);

    async function connect(wallet: any) {

        try {

            setSelectedWallet(wallet);
            setPending(true);
            await activate(injected);

        } catch (ex) {

            setPending(false);

        }

        if (active && account) {

            setPending(false);

        }

    }

    const setBack = () => {

        setPending(false);
        setSelectedWallet({});

    };

    return (<Modal
        back={pending}
        setBack={setBack}
        open={connectWallet}
        padding={'16px 12px 48px'}
        borderRadius={'10px'}
        title={'CONNECT WALLET'}
        modalKey={'connectWallet'}
    >
        {windowEth ? <ModalBody>
            {!pending ? <>
                {wallets.map((item, index) => <ConnectItem
                    key={index}
                    icon={item.icon}
                    onClick={() => connect(item)}
                    text={item.label}
                    done={selectedWallet.label === item.label}
                    // setSelectedWallet={setSelectedWallet}
                />)}
            </> : <LoadingBody>
                <Loading>
                    <LoadingIconRotate>
                        <Image src={LoadingIcon} alt={'...'}/>
                    </LoadingIconRotate>
                    <span>Initializing...</span>
                </Loading>
                <SelectedWalletInfo>
                    <SelectedWalletText>
                        <SelectedWalletName>
                            {selectedWallet.label || 'MetaMask'}
                        </SelectedWalletName>
                        <SelectedWalletName description>
                            {selectedWallet.description || 'Easy-to-use browser extension'}
                        </SelectedWalletName>
                    </SelectedWalletText>
                    <SelectedWalletIcon>
                        <Icon>
                            <Image src={selectedWallet.icon || LoadingIcon} alt={'...'}/>
                        </Icon>
                    </SelectedWalletIcon>
                </SelectedWalletInfo>
            </LoadingBody>}

        </ModalBody> : <p>no ethereum detected please install extension or change browser</p>}
    </Modal>);

};

WalletModal.defaultProps = {};

const ModalBody = styled.div`
  padding: 0 30px;
`;
const LoadingBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  width: 418px;
  padding: 20px;
  background: rgba(19, 5, 45, 0.64);
  border-radius: 100px;
  margin-top: 36px;
  border: 2px solid #DF4C74;

  span {
    color: ${props => props.theme.textColors.color1};
  }

  @media (max-width: 500px) {
    width: 293px;
  }
`;

const LoadingIconRotate = styled.div`
  display: flex;
  animation: Rotate .7s infinite linear;
  @keyframes Rotate {
    100% {
      transform: rotate(380deg);
    }
  }
`;
const SelectedWalletInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 47px;
  width: 328px;
  background: ${props => props.theme.buttonColors.mix17};
  padding: 16px;
  border-radius: 16px;
`;

const SelectedWalletText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  @media (max-width: 500px) {
    width: 293px;
  }
`;
const SelectedWalletName: any = styled.div`
  display: flex;
  white-space: nowrap;
  color: ${({ description, theme }: any) => description ? theme.textColors.color3 : theme.textColors.color1};
`;


const SelectedWalletIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${props => props.theme.bgColors.color1};
  border-radius: 8px;
`;

const Icon = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default WalletModal;