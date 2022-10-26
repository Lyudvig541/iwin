import React, { useContext, useEffect, useState } from 'react';
import Button from '../../Button/Button';
import { useChainId } from '../../Web3ReactManager/switchWallet';
import Web3Context from '../../Web3ReactManager/web3Context';
import { useWeb3React } from '@web3-react/core';
import { ConnectCoinBlock } from '../index';
import Image from 'next/image';
import Arrow from '../../../assets/icons/ArrowCoin.png';
import WalletIconSVG from '../../../assets/icons/WalletIcon.svg';
import ArrDown from '../../../assets/icons/arrowDown.svg';
import styled from 'styled-components';
import { Theme } from '../../../constants/theme';
import { useShowModal } from '../../../hooks/useShowModal';
import { networkData } from '../../../assets/static/static';
import { triggerModal } from '../../../store/acions/modal';
import { useDispatch } from 'react-redux';

import { IConnectWalletButton, IFuncParam } from '../../../interface/components-ts/navBar-ts/INavBar';

const ConnectWalletButton = ({
    data,
    icon,
    selectedNetwork,
    setSelectedNetwork,
    balance,
    onToggle,
    setIsAbsolute = () => {},
    coinBlockSwitch,
    setCoinBlockSwitch
}: IConnectWalletButton) => {

    
    const context = useContext(Web3Context);
    const { active, account } = useWeb3React();
    const dispatch = useDispatch();
    const { isSwitching, isSupportedChain, switchChain, cancel } = useChainId(context.chainId, selectedNetwork.chainId);
    const [ logoutState, setLogoutState ] = useShowModal();
    const [ selectedCoin, setSelectedCoin ] = useState(networkData[0]);


    const getCoinValue = (selectedValue: IFuncParam) => {

        setCoinBlockSwitch((prevData: any) => !prevData);
        setSelectedCoin(selectedValue);

    };

    useEffect(() => {

        networkData.map((item: any) => {

            if (item.chainId === context.chainId) {

                return setSelectedNetwork(item);

            }

        });

    }, [ context.chainId, cancel ]);

    useEffect(() => {

        active && account && !isSupportedChain && switchChain();

    }, [ selectedNetwork ]);

    const logOut = () => {

        setLogoutState(false);
        onToggle();

    };

    useEffect(() => {

        setIsAbsolute(active && account && isSupportedChain);

    }, [ isSupportedChain, active, account ]);

    return (<>
        <ConnectedButtonsType
            width={isSupportedChain && active && account ? 1 : 0}
        >
            {!active || !account ? (<Button
                onClick={() => dispatch(triggerModal('connectWallet', true))}
                primary
                padding={'15.5px 35.7px'}
            >
                {active && account
                    ? `${account.slice(0, 6)}...${account.slice(-4)}`
                    : 'CONNECT WALLET'}
            </Button>
            ) : !isSupportedChain ? (
                <Button onClick={switchChain} disabled={isSwitching} failure>
                    WRONG NETWORK
                </Button>
            ) : (
                <ConnectCoinBlock
                    onClick={() => {}}
                    primary
                    hover
                    maxWidth={!coinBlockSwitch ? '300px' : '986px'}
                    position={'absolute'}
                    background={coinBlockSwitch && Theme.bgColors.color30}
                >
                    {coinBlockSwitch &&
                        data.map((item) => (
                            <CoinsItem
                                key={item.coin + item.code}
                                onClick={() => getCoinValue(item)}
                            >
                                <CoinsIcon>
                                    <IconImage>
                                        <Image
                                            src={item.icon} 
                                            alt={'picture does not exist'} 
                                        />
                                    </IconImage>
                                    <IconText>{item.code}</IconText>
                                </CoinsIcon>
                                <CoinsValue>{`${item.balance}`}</CoinsValue>
                            </CoinsItem>
                        ))}

                    {!coinBlockSwitch && (
                        <CoinValueBlock onClick={() => setCoinBlockSwitch(true)}>
                            {balance.toFixed(2)} {selectedCoin.code}
                            <CoinValueArrow>
                                <Image src={Arrow} alt={'does not exist'} />
                            </CoinValueArrow>
                        </CoinValueBlock>
                    )}

                    <ConnectCoinBlock secondary padding={'17px 15px'} border={'none'} visited={logoutState}>

                        <WrapperBlock>
                            <WalletIcon>
                                <Image src={WalletIconSVG} alt={'no image'} />
                            </WalletIcon>
                            <ValuePart>
                                {`${account.slice(0, 6)}...${account.slice(-4)}`}
                            </ValuePart>
                            <ArrowIcon onClick={() => setLogoutState((prev: any) => !prev)}
                                transform={logoutState ? 1 : 0}>
                                <Image src={ArrDown} alt={'no image'} />
                            </ArrowIcon>

                            <LogOutBlock display={logoutState ? 1 : 0} onClick={logOut}>
                                <LogOutItems>
                                    <ItemIcon>
                                        <Image src={icon} alt={'no image'} />
                                    </ItemIcon>
                                    <ItemTitle>Log out</ItemTitle>
                                </LogOutItems>
                            </LogOutBlock>
                        </WrapperBlock>

                    </ConnectCoinBlock>

                </ConnectCoinBlock>)}

        </ConnectedButtonsType>

    </>);

};

const WrapperBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
`;

const WalletIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
`;

const ValuePart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.44px;
  color: ${props => props.theme.textColors.color3};
`;

const ArrowIcon: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  transition: all .1s ease;
  transform: ${({ transform }: any) => transform ? 'rotate(180deg)' : 'rotate(0)'};
`;

const LogOutBlock: any = styled.div`
  display: ${({ display }: any) => display ? 'flex' : 'none'};
  width: 187px;
  padding: 16px 8px;
  position: absolute;
  top: 46px;
  right: -18px;
  box-shadow: 0 8px 6px ${props => props.theme.bgColors.color4};
  border-radius: 16px;
  background: ${props => props.theme.bgColors.color1};
  align-items: center;
  justify-content: center;
  z-index: 999999;
`;

const LogOutItems = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  background: ${props => props.theme.bgColors.color11};
  border-radius: 100px;
`;

const ItemIcon = styled.div`
  margin-right: 20px;
`;

const ItemTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.44px;
  color: ${props => props.theme.textColors.color3};
`;

const ConnectedButtonsType: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }: any) => width ? '277px' : 'auto'};
  @media (max-width: 1320px) {
    display: none;
  }
`;

const CoinsItem = styled.div`
  min-width: 172px;
  transition: all ease 4s;
  padding: 17px 16px 17px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.bgColors.color31};
  border-radius: 100px;
  margin-right: 32px;
  cursor: pointer;
  color: ${props => props.theme.textColors.color3};
  
  &:hover {
    background: ${props => props.theme.buttonColors.mix1};
    >div{
      color: ${props => props.theme.bgColors.white};
      >span{
        color: ${props => props.theme.bgColors.white};
      }
    }
  }

  &:last-child {
    margin-right: 48px;
  }
`;

const CoinsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
`;

const IconImage = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const CoinsValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  letter-spacing: -0.44px;
  color: ${props => props.theme.textColors.color3};
`;

const CoinValueBlock = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  letter-spacing: -0.44px;
  color: ${props => props.theme.textColors.color3};

`;

const CoinValueArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6.67px;
`;

export default ConnectWalletButton;
