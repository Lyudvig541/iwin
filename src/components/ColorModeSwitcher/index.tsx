import React from 'react';
import Image from 'next/image';
import Dark from '../../assets/icons/Dark.png';
import Light from '../../assets/icons/Light.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeLightMode } from '../../store/acions/lightMode';
import { IParams, IState } from '../../interface/store-ts/actions/lightMode';

const ColorModeSwitcherC = ({ changeMode }: any) => {

    const dispatch = useDispatch();
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    const toggleColor = () => {

        const key: IParams = ((!lightMode && 'light') || 'dark');

        dispatch(changeLightMode(key));
        changeMode();

    };

    return (
        <div>
            <label className="switch">
                {(!lightMode && <span className="lightIcon">
                    <Image
                        src={Light} 
                        alt="no image"
                        sizes="(max-width: 500px) 100"
                    />
                </span>) ||
                    <span className="darkIcon">
                        <Image
                            src={Dark} 
                            alt="no image"
                            sizes="(max-width: 500px) 100"
                        />
                    </span>
                }
                <input type="checkbox" checked={lightMode} onChange={toggleColor}/>
                <span className="slider round"/>
            </label>
        </div>
    );

};


export default ColorModeSwitcherC;