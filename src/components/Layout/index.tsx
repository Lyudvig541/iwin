import { useState } from 'react';
import NavBar from '../NavBar';
import WalletModal from '../WalletModal';
import Footer from '../Footer';
import styled from 'styled-components';
import styles from '../../../styles/pages/Pages.module.css';
import YourWalletModal from '../Modals/YourWalletModal';
import { useSelector } from 'react-redux';
import { IState } from '../../interface/store-ts/actions/lightMode';

const Layout = ({ children, changeMode }: any) => {

    const [yourWalletModalOpen, toggleYourWalletModal] = useState(false);
    const [ selectedWallet, setSelectedWallet ] = useState({});
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    return <div>
        {<WalletModal navBar={true} selectedWallet={selectedWallet} setSelectedWallet={setSelectedWallet}/>}
        {yourWalletModalOpen && <YourWalletModal open={yourWalletModalOpen} onClose={toggleYourWalletModal} navBar={true}/>}
        <NavBar changeMode={changeMode} toggleYourWalletModal={toggleYourWalletModal} setSelectedWallet={setSelectedWallet}/>
        <Content className={lightMode ? styles.ComponentBackgroundLightMode : styles.ComponentBackground}>
            {children}
        </Content>
        <Footer/>
    </div>;

};

export default Layout;


const Content: any = styled.div`
  overflow-x: hidden;
  justify-content: center;
`;
