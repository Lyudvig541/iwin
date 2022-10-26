import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Web3Context from '../Web3ReactManager/web3Context';
import styles from '../../../styles/NavBar/NavBar.module.css';

import { INaw } from '../../interface/components-ts/navBar-ts/INavBar';
import ConnectWalletButton from './components/ConnectWalletButton';
import Button from '../Button/Button';
import ColorModeSwitcherC from '../ColorModeSwitcher';
import DropDown from './components';
import Link from 'next/link';
import Image from 'next/image';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import { useChainId } from '../Web3ReactManager/switchWallet';
import { getUserBalance } from '../Web3ReactManager/getBalance';
import { triggerModal } from '../../store/acions/modal';
import { useDispatch } from 'react-redux';
import { useShowModal } from '../../hooks/useShowModal';

import { data, networkData } from '../../assets/static/static';

import LogoIWin from '../../assets/images/i-win-logo.png';
import Wallet from '../../assets/icons/wallet.png';
import Mainnet from '../../assets/icons/Mainnet.png';

const NavBar = ({ setSelectedWallet, changeMode }: INaw) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const context = useContext(Web3Context);
    const innerRef = useRef<any>(null);
    const burgerMenu = useRef<any>();
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const { active, account } = useWeb3React();
    const [selectedNetwork, setSelectedNetwork] = useState({
        coin: 'Mainnet',
        chainId: 1,
        icon: Mainnet,
        code: 'ETH'
    });

    const [balance, setBalance] = useState(0);
    const { isSwitching, isSupportedChain, switchChain } = useChainId(context.chainId, selectedNetwork.chainId);
    const { deactivate } = useWeb3React();
    const [isAbsolute, setIsAbsolute] = useState(false);
    const [coinBlockSwitch, setCoinBlockSwitch, dropDownRef] = useShowModal();

    useEffect(() => {

        getUserBalance(context.account)
            .then(setBalance)
            .catch(() => {});

    }, [context.account, isSwitching, burgerMenuOpen]);

    const setCheckedInput = () => {

        innerRef.current.checked = false;
        setBurgerMenuOpen(false);

    };
    const checkedBurgerMenu = () => {

        if (burgerMenuOpen) {

            setBurgerMenuOpen(false);
            document.removeEventListener('mousedown', handleClickOutside);

        } else {

            document.addEventListener('mousedown', handleClickOutside);
            setBurgerMenuOpen(true);

        }

    };
    const handleClickOutside = (event: Event) => {

        if (burgerMenu.current && !burgerMenu.current.contains(event.target)) {

            innerRef.current.checked = false;
            document.removeEventListener('mousedown', handleClickOutside);
            setBurgerMenuOpen(false);

        }

    };
    const hrefLink = (link: string, type = 0) => {

        if (type) {

            setCheckedInput();

        }

        router.push(link);

    };

    const logout = () => {

        deactivate();
        setSelectedWallet({});

    };

    return (<HeaderBlock>
        <HeaderBlockContainer>
            <Header>
                {burgerMenuOpen && <GlobalStyle/>}
                <NavBarPart>
                    <Logo>
                        <Image
                            onClick={() => router.push('/')}
                            sizes="(max-width: 110px) 110"
                            src={LogoIWin}
                            alt={'logo'}
                        />
                    </Logo>
                    <NavItems>
                        <NavItem onClick={() => hrefLink('/')}>
                            <Links>HOME</Links>
                            <ActiveDiv active={router.pathname === '/'}/>
                        </NavItem>
                        <NavItem onClick={() => hrefLink('/dice')}
                            className={(router.pathname === '/dice' && styles.ActiveDice) || ''}>
                            <Links>DICE</Links>
                            <ActiveDiv active={router.pathname === '/dice'}/>
                        </NavItem>
                        <NavItem onClick={() => hrefLink('/flip')}
                            className={(router.pathname === '/flip' && styles.ActiveFlip) || ''}>
                            <Links>FLIP</Links>
                            <ActiveDiv active={router.pathname === '/flip'}/>
                        </NavItem>
                        <NavItem onClick={() => hrefLink('/wheel')}
                            className={(router.pathname === '/wheel' && styles.ActiveWheels) || ''}>
                            <Links>WHEEL</Links>
                            <ActiveDiv active={router.pathname === '/wheel'} />
                        </NavItem>
                        <NavItem onClick={() => hrefLink('/mines')}
                            className={(router.pathname === '/mines' && styles.ActiveMines) || ''}>
                            <Links>MINES</Links>
                            <ActiveDiv active={router.pathname === '/mines'}/>
                        </NavItem>
                        <NavItem onClick={() => hrefLink('/kong')}
                            className={(router.pathname === '/kong' && styles.ActiveWall) || ''}>
                            <Links>KONG</Links>
                            <ActiveDiv active={router.pathname === '/kong'}/>
                        </NavItem>
                        <NavItem onClick={() => hrefLink('/keno')}
                            className={(router.pathname === '/keno' && styles.ActiveWall) || ''}>
                            <Links>KENO</Links>
                            <ActiveDiv active={router.pathname === '/keno'}/>
                        </NavItem>
                    </NavItems>
                </NavBarPart>
                <ConnectWrapper>
                    <ConnectCoinBlock primary padding={'16px 20px'}>
                        <DropDown
                            onToggle={setSelectedNetwork}
                            activeId={selectedNetwork.chainId}
                            icon={selectedNetwork.icon}
                            width={'auto'}
                            data={networkData}
                            title={selectedNetwork.coin}
                        />
                    </ConnectCoinBlock>

                    <ConnectPart absolute={(isAbsolute && 1) || 0} ref={dropDownRef}>
                        <ConnectWalletButton
                            setSelectedNetwork={setSelectedNetwork}
                            onToggle={logout}
                            balance={balance}
                            selectedNetwork={selectedNetwork}
                            data={data}
                            icon={Wallet}
                            setIsAbsolute={setIsAbsolute}
                            coinBlockSwitch={coinBlockSwitch}
                            setCoinBlockSwitch={setCoinBlockSwitch}
                        />
                    </ConnectPart>
                    <ColorModeSwitcher>
                        <ColorModeSwitcherC changeMode={changeMode}/>
                    </ColorModeSwitcher>
                </ConnectWrapper>
                <BurgerMenu ref={burgerMenu}>
                    <MenuToggle>
                        <input type="checkbox" ref={innerRef} id={'burgerMenu'}
                            onChange={checkedBurgerMenu}
                        />
                        <FirstSpan/><span/><span/>
                        {burgerMenuOpen && <Menu>
                            <NavItem onClick={() => hrefLink('/dice', 1)}
                                className={router.pathname === '/dice' && styles.ActiveDice || ''}>
                                <Link href={'/dice'} passHref>
                                    <Links onClick={() => setCheckedInput()}
                                        active={router.pathname === '/dice'}>DICE</Links>
                                </Link>
                            </NavItem>
                            <NavItem onClick={() => hrefLink('/flip', 1)}
                                className={router.pathname === '/flip' && styles.ActiveFlip || ''}>
                                <Link href={'/flip'} passHref>
                                    <Links active={router.pathname === '/flip'}>FLIP</Links>
                                </Link>
                            </NavItem>
                            <NavItem onClick={() => hrefLink('/wheel', 1)}
                                className={router.pathname === '/wheel' && styles.ActiveWheels || ''}>
                                <Link href={'/wheel'} passHref>
                                    <Links active={router.pathname === '/wheel'}>WHEEL</Links>
                                </Link>
                            </NavItem>
                            <NavItem onClick={() => hrefLink('/mines', 1)}
                                className={router.pathname === '/mines' && styles.ActiveMines || ''}>
                                <Link href={'/mines'} passHref>
                                    <Links active={router.pathname === '/mines'}>MINES</Links>
                                </Link>
                            </NavItem>
                            <NavItem onClick={() => hrefLink('/kong', 1)}
                                className={router.pathname === '/kong' && styles.ActiveWall || ''}>
                                <Link href={'/kong'} passHref>
                                    <Links active={router.pathname === '/kong'}>KONG</Links>
                                </Link>
                            </NavItem>
                            <NavConnectButtonMobile>
                                {!active || !account ? <Button
                                    onClick={() => dispatch(triggerModal('connectWallet', true))}
                                    primary
                                    padding={'17px 15px'}
                                >{active && account ? (`${account.slice(0, 6)}...${account.slice(-4)}`) : 'CONNECT WALLET'}
                                </Button> : !isSupportedChain ? <Button
                                    onClick={switchChain}
                                    disabled={isSwitching}
                                    failure
                                    padding={'17px 15px'}
                                >WRONG NETWORK
                                </Button> : <Button
                                    primary
                                    padding={'17px 15px'}
                                    onClick={() => dispatch(triggerModal('connectWallet', true))}
                                >
                                    <Address>
                                        <Image src={Wallet} alt="..."/>
                                        {`${account.slice(0, 6)}...${account.slice(-4)}`}
                                    </Address>
                                </Button>}
                            </NavConnectButtonMobile>
                        </Menu>}
                    </MenuToggle>
                </BurgerMenu>
            </Header>
        </HeaderBlockContainer>
    </HeaderBlock>);

};

const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 32px;

  @media screen and (max-width: 1320px) {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-end;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const HeaderBlock = styled.div`
  background-color: ${props => props.theme.bgColors.color2};
  width: 100%;
  height: 96px;
  z-index: 1000;
  @media (max-width: 586px) {
    position: fixed;
    height: 64px;
  }

`;

const HeaderBlockContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: 1800px) {
    margin: 0 20px;
  }
`;


const ColorModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 586px) {
    margin-right: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  @media (max-width: 1320px) {
    justify-content: space-between;
  }
  @media (max-width: 586px) {
    position: fixed;
    height: 64px;
  }
`;
const NavBarPart = styled.div`
  display: flex;
  align-items: center;
`;
const NavItems = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1320px) {
    display: none;
  }
`;
const NavItem = styled.div`
  width: 106px;
  position: relative;
  text-align: center;
  cursor: pointer;
  @media (max-width: 1320px) {
    width: 100%;
    height: 96px;
  }
`;
const ActiveDiv = styled.div<{active: boolean}>`
  display: ${({ active }: { active: boolean }) => (active && 'block')|| 'none'};
  width: 106px;
  height: 6px;
  background: ${props => props.theme.buttonColors.mix1};
  position: absolute;
  bottom: 0;
`;
const Links = styled.a<{
    active?: boolean,
    theme?:{ [key: string] : {
    [key: string]: string}
}
}>`
  color: ${props => props.theme.textColors.color1};
  font-weight: bold;
  font-size: 14px;
  line-height: 98px;
  @media (max-width: 1320px) {
    color: ${({ active, theme }: { 
        active?: boolean,
        theme: { [key: string] : {
            [key: string]: string}
        } }) => 
        ((active && theme.textColors.color1) || theme.textColors.color3)
};
    font-size: 16px;
  }
`;
const Logo = styled.a`
  cursor: pointer;
    width: 110px;
  margin-right: 64px;
  z-index: 10;
  @media (max-width: 1320px) {
    margin: 0 39px 0 36px;
  }
  @media (max-width: 785px) {
    margin: 0 39px 0 16px;
  }
  @media (max-width: 568px) {
    margin: 5px 0 0 20px;
    height: auto;
    & > span {
      width: 92px !important;
    }
  }
`;
const BurgerMenu = styled.div`
  display: none;
  z-index: 5;

  a {
    text-decoration: none;
    transition: color 0.3s ease;
  }

  input {
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    top: -7px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: ${props => props.theme.textColors.color1};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0 0;
  }

  span:nth-last-child(2) {
    transform-origin: 0 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -2px);
    background: ${props => props.theme.textColors.color1};
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-46deg) translate(4px, -2px);
  }

  @media (max-width: 1320px) {
    display: block;
  }
`;
const Menu = styled.ul`
  position: absolute;
  width: 375px;
  height: 100vh;
  right: -33px;
  margin: 0;
  top: 60px;
  padding: 17px 0 32px 0;
  background: ${props => props.theme.bgColors.color2};
  -webkit-animation: fadein 0.5s ease-in 1;
  @media (max-width: 785px) {
    right: -16px;
  }
  @media (max-width: 586px) {
    top: 39px;
  }
  @keyframes fadein {
    0% {
      right: -375px;
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
const MenuToggle = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  @media (max-width: 1320px) {
    margin: 0 32px 0 36px;
    input:checked ~ ul {
      transform: none;
    }
  }
  @media (max-width: 785px) {
    margin: 0 16px 0 36px;
  }
`;
const FirstSpan = styled.span`
  margin: 5px 0 0 0;
`;
const ConnectPart = styled.div<{
    absolute: number
}>`
  display: flex;
  position: relative;
  gap: 32px;
  align-items: center;

  @media (max-width: 1320px) {
    display: none;
  }

  @media (max-width: 586px) {
    display: none;
  }
`;
const NavConnectButtonMobile = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


export const ConnectCoinBlock = styled.div<{
    margin?: string,
    padding?: string,
    maxWidth?: string,
    position?: string,
    primary?: boolean,
    hover?: boolean,
    visited?: boolean,
    secondary?: boolean,
    background?: string | boolean,
    border?: string,
}>`
  background: ${props => props.theme.buttonColors.mix3};
  border: 2px solid ${props => props.theme.buttonColors.borderColor2};
  color: ${props => props.theme.textColors.color3};
  margin: ${({ margin }: {margin?: string }) => margin || '0 0 0 0'};
  padding: ${({ padding }: {padding?: string }) => padding || '0 0 0 0'};
  max-width: ${({ maxWidth }: {maxWidth?: string}) => maxWidth};
  position: ${({ position }: {position?: string}) => position || 'static'};
  z-index: 11111111;
  right: 0;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 586px) {
    display: none;
  }

${({ hover }: { hover?: boolean }) => !hover &&
    css`:hover {
  color: ${props => props.theme.textColors.color1};
  background: ${props => props.theme.buttonColors.mix1};
}`}
${({ hover }: { hover?: boolean }) => !hover &&
  css`: active {
  color: ${props => props.theme.textColors.color1};
  background: ${props => props.theme.buttonColors.mix2};
}`}
${({ visited }: { visited?: boolean }) => visited &&
  css` {
  color: ${props => props.theme.textColors.color1};
  background: ${props => props.theme.buttonColors.mix2};
}`}
`;

const Address = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

export default NavBar;