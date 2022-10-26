import React from 'react';
import * as BetControlStyles from '../styles/settingsStyle';
import Image from 'next/image';
import arrowDownLight from '../../../assets/icons/arrow-down-no-color.png';
import arrowDown from '../../../assets/icons/arrow-drop-down.png';
import { TitleArrow } from '../../NavBar/components';
import { useShowModal } from '../../../hooks/useShowModal';
import { IKenoSelect } from '../../../interface/components-ts/keno-ts/IKeno';

const Select = ({ 
    lightMode,
    text, 
    width, 
    isWin,
    data, 
    option, 
    setOption
}: IKenoSelect) => {
    
    const [show, setShow, dropDownRef] = useShowModal();
    
    const getOption = ({ text = 0 }) => {

        setOption(text);

    };

    return <BetControlStyles.InputWithLabel>
        <BetControlStyles.Label>{text}</BetControlStyles.Label>
        <BetControlStyles.Risk width={width}>
            <BetControlStyles.CountText>
                <BetControlStyles.SelectBlock
                    op={+show} 
                    ref={dropDownRef}
                >
                    {data.map(({ text, id }) =>
                        <BetControlStyles.OptionBlock
                            key={id}
                            // @ts-ignore
                            onClick={ () => getOption({ text }) }
                        >
                            {text}
                        </BetControlStyles.OptionBlock>
                    )}
                </BetControlStyles.SelectBlock>
                <BetControlStyles.ArrowBlock>
                    <BetControlStyles.GettingOption>{option}</BetControlStyles.GettingOption>
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
        </BetControlStyles.Risk>
    </BetControlStyles.InputWithLabel>;

};

export default Select;