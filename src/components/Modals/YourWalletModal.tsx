import Modal from './index';
import Wallet from '../../assets/icons/Vector.png';
import styled from 'styled-components';
import Image from 'next/image';
import CopyIcon from '../../assets/icons/CopyIcon.png';
import LinkToEth from '../../assets/icons/LinkToEtherscan.png';
import LogOutIcon from '../../assets/icons/LogOutIcon.png';
import Arrow from '../../assets/icons/arrow-drop-down.png';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { coinData } from '../../assets/static-data';
import Web3Context from '../Web3ReactManager/web3Context';
import { useWeb3React } from '@web3-react/core';
import { getUserBalance } from '../Web3ReactManager/getBalance';
import { IWalletModalA } from '../../interface/components-ts/walletModal-ts/WalletModal';

const YourWalletModal = ({ open, onClose }: IWalletModalA) => {

    const [openCurrency, setOpenCurrency] = useState(false);
    const [copied, setCopied] = useState(false);
    const [currentCurrency, setCurrentCurrency] = useState(coinData[0]);
    const context = useContext(Web3Context);
    const { deactivate } = useWeb3React();
    const [balance, setBalance] = useState(0);

    const copyAddress = () => {

        navigator.clipboard.writeText(context.account);
        setCopied(true);
        setTimeout(() => {

            setCopied(false);

        }, 2000);

    };

    const changeCoin = async (item: any) => {

        setCurrentCurrency(item);
        setBalance(await getUserBalance(context.account));

    };

    const logout = () => {

        deactivate();
        onClose(false);

    };

    return <Modal
        open={open}
        icon={Wallet}
        title={'YOUR Wallet'}
        onClose={onClose}
        borderRadius={'10px'}
        openFrom={'bottom'}
    >
        <MainBlock>
            <MainBlockContainer>
                <AddressPart>
                    <AddressTitle>
                        <span>
                            Your Address
                        </span>
                        <CopiedText>
                            {copied && context.account && `Copied: ${context.account.slice(0, 6)}...${context.account.slice(0, 6).slice(-4)}`}
                        </CopiedText>
                    </AddressTitle>
                    <AddressCopy>
                        <Address>
                            {context.account && `${context.account.slice(0, 6)}...${context.account.slice(0, 6).slice(-4)}`}
                        </Address>
                        <CopyIconBlock>
                            <Image onClick={copyAddress} src={CopyIcon} alt={'no picture'}/>
                        </CopyIconBlock>
                    </AddressCopy>
                    <AddressLink>
                        <AddressLinkText>View on Etherscan</AddressLinkText>
                        <AddressLinkIcon>
                            <Image src={LinkToEth} alt={'co img'}/>
                        </AddressLinkIcon>
                    </AddressLink>
                </AddressPart>
                <BalancePart>
                    <BalanceTitle>Balance</BalanceTitle>
                    <Balance>{balance.toFixed(5)} {currentCurrency.label}</Balance>
                </BalancePart>
                <CurrencyPart>
                    <CurrencyTitle>Currency</CurrencyTitle>
                    <AllCurrency active={openCurrency}>
                        {coinData.map((item) => <Coins
                            key={item.label}
                            onClick={() => changeCoin(item)}
                            active={currentCurrency.label === item.label}
                        >
                            <CoinIcon>
                                <Image src={item.icon} alt={'...'}/>
                            </CoinIcon>
                            <CoinName>
                                {item.label}
                            </CoinName>
                        </Coins>)}
                    </AllCurrency>
                    <CurrencyBlock onClick={() => setOpenCurrency(!openCurrency)}>
                        <CurrencyType>
                            <CurrencyIcon> <Image src={currentCurrency.icon} alt={'...'}/></CurrencyIcon>
                            <CurrencyLabel>{currentCurrency.label}</CurrencyLabel>
                        </CurrencyType>
                        {/*DropDown part */}
                        <ArrowIcon rotate={openCurrency ? 1 : 0}><Image src={Arrow} alt={'...'}/></ArrowIcon>
                    </CurrencyBlock>
                </CurrencyPart>
                <ButtonPart>
                    <Button primary padding="3px 48px" onClick={logout}>
                        <ImageWrapper>
                            <Image src={LogOutIcon} alt={'no img'}/>
                        </ImageWrapper>
                        <ButtonText>Log Out</ButtonText>
                    </Button>
                </ButtonPart>
            </MainBlockContainer>
        </MainBlock>
    </Modal>;

};


const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 72px;
  margin-top: 16px;
  @media (max-width: 470px) {
    padding: 0 24px;
  }
`;

const MainBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 327px;
  position: relative;
`;


// address part start
const AddressPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  @media (max-width: 470px) {
    margin-bottom: 21px;
  }
`;

const AddressTitle = styled.p`
  margin: 9px 0 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  letter-spacing: 0.3px;
  color: #BDBDBD;
  justify-content: space-between;
`;

const CopiedText = styled.span`
  font-size: 12px;
  line-height: 20px;
  display: flex;
  letter-spacing: 0.3px;
  color: ${props => props.theme.bgColors.color18};
`;

const AddressCopy = styled.div`
  padding: 16px 16px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  margin-bottom: 16px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: ${props => props.theme.textColors.color1};
`;

const CopyIconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    cursor: pointer;
  }
`;

const AddressLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddressLinkText = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  text-decoration-line: underline;
  color: #BDBDBD;
  cursor: pointer;
`;

const AddressLinkIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;


const BalancePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 470px) {
    margin-bottom: 24px;
  }
`;

const BalanceTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  letter-spacing: 0.3px;
  color: #BDBDBD;
  margin-bottom: 16px;
`;

const Balance = styled.div`
  padding: 12px 0 12px 16px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.textColors.color1};
  background: rgba(19, 5, 45, 0.32);
  border-radius: 100px;
`;

const CurrencyPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
  @media (max-width: 470px) {
    margin-bottom: 44px;
  }
`;

const CurrencyTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  letter-spacing: 0.3px;
  color: #BDBDBD;
  margin-bottom: 12px;
`;

const CurrencyBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 16px;
  background: rgba(19, 5, 45, 0.32);
  border-radius: 100px;
  cursor: pointer;
`;
const AllCurrency: any = styled.div`
  display: ${({ active }: any) => active && 'flex' || 'none'};
  position: absolute;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 13px 8px;
  background: #13052D;
  border-radius: 16px;
  bottom: 158px;
  gap: 16px;
`;
const CoinIcon = styled.div`
  width: 16px;
  text-align: center;
`;


const Coins: any = styled.div`
  width: 100%;
  display: flex;
  align-self: start;
  padding: 13px 11px;
  cursor: pointer;
  border-radius: 100px;
  gap: 12px;
  background: ${({ active, props }: any) => active && props.theme.buttonColors.mix1};
  &:hover {
    background: ${props => props.theme.buttonColors.mix1};
  }
`;
const CoinName = styled.span`
  color: ${props => props.theme.textColors.color1};
`;

const CurrencyType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
const ArrowIcon: any = styled.div`
  transform: ${({ rotate }: any) => rotate ? 'rotate(180deg)' : '0'};
  transition: all .1s ease;
`;

const CurrencyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16px;
`;

const CurrencyLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 44px;
  color: ${props => props.theme.textColors.color1};
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 470px) {
    margin-bottom: 16px;
  }
`;

const ButtonText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.44px;
  color: ${props => props.theme.textColors.color1};
`;


export default YourWalletModal;