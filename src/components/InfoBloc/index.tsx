import React, { useState } from 'react';
import * as InfoBlockStyled from './infoBlockStyled';
import Image from 'next/image';
import { InfoBlockData } from '../../assets/static/static';

import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';
import minusLight from '../../assets/icons/minusLight.svg';
import storage from '../../utils/storage';

const InfoBlock = ({ infoBlockTitle='FAQ' }) => {

    const [infoBlock, setToggleId] = useState(InfoBlockData);
    const lightMode = storage.get('lightMode');

    const handleToggle = (id: number) => {

        setToggleId(infoBlock.map((togId) => {

            togId.toggle = (id === togId.id && togId.toggle) ? false : id === togId.id;
            return togId ;

        }));
        
    };
    
    return (<>
        <InfoBlockStyled.InfoBlock>
            <InfoBlockStyled.InfoBlockTitle>{infoBlockTitle}</InfoBlockStyled.InfoBlockTitle>
            {infoBlock.map((item) => <React.Fragment key={item.id}>
                <InfoBlockStyled.InfoBlockHeader 
                    onClick={() => handleToggle(item.id)} 
                    toggle={item.toggle}
                >
                    <InfoBlockStyled.InfoBlockHeaderTitleAndIcon>
                        <InfoBlockStyled.InfoBlockHeaderTitle>
                            {item.title}
                        </InfoBlockStyled.InfoBlockHeaderTitle>
                        {<Image 
                            src={(!item.toggle && plus) || (lightMode ? minusLight : minus)}
                            alt="no image"
                        />}
                    </InfoBlockStyled.InfoBlockHeaderTitleAndIcon>
                </InfoBlockStyled.InfoBlockHeader>
                <InfoBlockStyled.InfoBlockContent
                    toggle={item.toggle}>
                    {item.text}
                </InfoBlockStyled.InfoBlockContent>
            </React.Fragment>
            )}
        </InfoBlockStyled.InfoBlock>
    </>);

};

export default InfoBlock;
