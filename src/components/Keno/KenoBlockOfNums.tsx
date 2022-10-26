import { useDispatch } from 'react-redux';
import * as Keno from './styles/gameStyle';
import React, { useState } from 'react';
import { getUserCheckNumbers } from '../../store/acions/keno';
import { IKenoNumberBlock } from '../../interface/components-ts/keno-ts/IKeno';

const BlockOfNums = ({ field, setCheckCount, startGame, checkCount }: IKenoNumberBlock) => {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    
    const clickedNumber = (count : number, fieldNumber : number) => {

        dispatch(getUserCheckNumbers(fieldNumber));

        if(!checked && checkCount < 10) {

            setCheckCount(++count);
            setChecked(true);

        }else if (checked) {

            setChecked(false);

            setCheckCount(--count);

        }
    
    };

    return (
        <Keno.GameLines
            key={field.id}
            onClick={() => clickedNumber(checkCount, field.number) }
            win={field.win}
            check={field.check}
            disabled={startGame}
        >
            {field.number}
        </Keno.GameLines>
    );

};

export default BlockOfNums;