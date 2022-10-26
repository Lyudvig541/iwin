import React from 'react';
import * as LandingStyles from './LandingStyles/styles';
import styles from '../../../styles/pages/Home.module.css';
import WhyIWin from './components/WhyIWin';
import GamesBlock from './components/GamesBlock';
import BonusBlock from './components/BonusBlock';
import InfoBlock from '../InfoBloc';
import SwiperSlider from './components/Slider/Slider';
import { useSelector } from 'react-redux';
import { IState } from '../../interface/store-ts/actions/lightMode';


const Landing = () => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    return (
        <div className={lightMode ? styles.LandingPageBackgroundLight : styles.LandingPageBackground}>
            <LandingStyles.LandingTitle lightMode={lightMode}>THE WIN IS IN YOUR HANDS!</LandingStyles.LandingTitle>
            <LandingStyles.LandingText lightMode={lightMode}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin fames
        mauris bibendum pharetra nulla purus sed velit. </LandingStyles.LandingText>
            <SwiperSlider />
            <WhyIWin/>
            <GamesBlock />
            <BonusBlock/>
            <InfoBlock/>
        </div>
    );

};

export default Landing;