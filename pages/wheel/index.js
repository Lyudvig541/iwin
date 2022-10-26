import React, { useMemo } from 'react';
import WheelGame from '../../src/components/WheelGame';
import RulesModal from '../../src/components/Modals/RulesModal';
import { wheelsData, roundData } from '../../src/assets/static-data';
import { dropDownData } from '../../src/assets/static/static';

export default function Wheels() {

    const { buttonData, data } = useMemo(() => wheelsData, []);

    return (
        <>
            <RulesModal/>
            <WheelGame
                buttonData={buttonData}
                data={data}
                scoreboardData={roundData}
                tableData={dropDownData}
            />
        </>
    );

}
