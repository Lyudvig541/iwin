import React, { useMemo } from 'react';
import * as GameStyle from './styles/caficentStyle';
import { ICoefficientPage } from '../../interface/components-ts/wall-ts/IWall';
import { WallPersentage } from './WallOpenPercent';

const Coefficient = ({ count, nextClickLine, startCount } :ICoefficientPage) => {

    const coefficient = useMemo(() => WallPersentage[startCount - 1], [startCount]);
    const coffArr = useMemo(() => [...coefficient], [startCount]);

    return <>
        <GameStyle.GameBlock>
            {coffArr.reverse().map((coefficient, id) =>
                <GameStyle.CoefficienBlock key={id}>
                    <GameStyle.GameRow
                        key={id}
                        background={(10 - id <= count - 1)}
                        opacity={(10 - id <= count - 1) && nextClickLine}
                    >
                        {`${coefficient}x`}
                    </GameStyle.GameRow>
                    <GameStyle.CoefficientLine
                        background={(10 - id <= count - 1)}
                        opacity={(10 - id <= count - 1) && nextClickLine}
                    />
                </GameStyle.CoefficienBlock>
            )}
        </GameStyle.GameBlock>
    </>;

};

export default Coefficient;