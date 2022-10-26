import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as BetControlStyles from '../styles/betConfigStyle';
import BananaCount from '../../../assets/images/banana-count.png';
import Image from 'next/image';
import { IWState } from '../../../interface/components-ts/wall-ts/IWall';
import arrowDownLight from '../../../assets/icons/arrow-down-no-color.png';
import arrowDown from '../../../assets/icons/arrow-drop-down.png';
import { TitleArrow } from '../../NavBar/components';
import { changeBombCount } from '../../../store/acions/wall';
import { useShowModal } from '../../../hooks/useShowModal';


const SelectCoefficient = ({ lightMode }: { lightMode: boolean }) => {
    
    const dispatch = useDispatch();
    const { isWin, bombsCountButton } = useSelector((state: IWState) => state.wall);
    const [show, setShow, dropDownRef] = useShowModal();
    const [option, setOption] = useState(bombsCountButton[2].text);

    const getOption = ({ id, value }: { id: number, value: string }) => {

        dispatch(changeBombCount(id));
        setOption(value);

    };

    return <BetControlStyles.InputWithLabel>
        <BetControlStyles.Label>Banana</BetControlStyles.Label>
        <BetControlStyles.BombsCount>
            <BetControlStyles.Bomb>
                <Image
                    src={BananaCount}
                    alt={'banana'}
                    width={'48px'}
                    height={'48px'}
                />
            </BetControlStyles.Bomb>
            <BetControlStyles.BananaCount>
                <BetControlStyles.CountText>
                    <BetControlStyles.SelectBlock op={+show} ref={dropDownRef}>
                        {bombsCountButton.map(({ text, id }) =>
                            <BetControlStyles.OptionBlock
                                key={id}
                                onClick={ () => getOption({ id, value: text }) }
                            >
                                {text}
                            </BetControlStyles.OptionBlock>
                        )}
                    </BetControlStyles.SelectBlock>
                    <BetControlStyles.ArrowBlock>
                        <BetControlStyles.GetiengOption>{option}</BetControlStyles.GetiengOption>
                        <BetControlStyles.Arrow
                            onClick={() => !isWin && setShow(!show)}
                        >
                            <TitleArrow
                                show={show}
                                lightMode={lightMode}
                            >
                                <Image
                                    src={lightMode ? arrowDownLight : arrowDown}
                                    alt="..."
                                    sizes="(max-width: 300px) 100"
                                />
                            </TitleArrow>
                        </BetControlStyles.Arrow>
                    </BetControlStyles.ArrowBlock>
                </BetControlStyles.CountText>
            </BetControlStyles.BananaCount>
        </BetControlStyles.BombsCount>
    </BetControlStyles.InputWithLabel>;

};

export default SelectCoefficient;