import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import Image from 'next/image';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useChainId } from '../Web3ReactManager/switchWallet';
import Web3Context from '../Web3ReactManager/web3Context';
import Testnet from '../../assets/icons/tether.png';
import { triggerModal } from '../../store/acions/modal';
import { IRealMode } from '../../interface/store-ts/actions/realMode';
import { IConnectAndBetButton } from '../../interface/components-ts/connectAndBetButton-ts/IConnectAndBetButton';


const ConnectAndBetButton = ({
    runGame,
    influenceBalance,
    buttonName,
    icon='',
    iconName='',
    disable = false
}: IConnectAndBetButton) => {

    const context = useContext(Web3Context);
    const [selectedCoin] = useState({
        coin: 'Testnet',
        code: 'BNBT',
        chainId: 97,
        icon: Testnet
    });
    const { realMode } = useSelector((state: IRealMode) => state.realMode);
    const dispatch = useDispatch();
    const { active, account } = useWeb3React();
    const [realModeConnect, setRealModeConnect] = useState(true);
    const { isSupportedChain, switchChain } = useChainId(context.chainId, selectedCoin.chainId);

    useEffect(() => {

        const isRealMode = !realMode || (active && account !== undefined && isSupportedChain);

        setRealModeConnect(isRealMode);

    }, [account, active, isSupportedChain, realMode]);


    const connectWalletAndRunGame = () => {

        if (realModeConnect) {

            runGame();

        }else {

            if(isSupportedChain) {

                dispatch(triggerModal('connectWallet', true));

            }else {

                switchChain();

            }

        }


    };

    const renderButton = () => {

        const demoMode =!realMode && buttonName;
        const realModeName = (isSupportedChain && 'CONNECT WALLET') || 'WRONG NETWORK';

        return !active ? (demoMode || realModeName) : buttonName;

    };

    return <Button
        onClick={() => {

            if (!disable) connectWalletAndRunGame();

        }}
        secondary
        padding={'12px 54.5px'}
        disable={disable}
    >
        {influenceBalance
            ? <DiceButtonText>Influence Balance</DiceButtonText>
            : (<>
                {(!(icon === '' && iconName === '') && <Image
                    src={icon}
                    alt={iconName}
                />) || '' }
                <DiceButtonText>
                    {renderButton()}
                </DiceButtonText>
            </>)

        }
    </Button>;

};


export default ConnectAndBetButton;

const DiceButtonText = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.white};
  padding-left: 10px;
`;