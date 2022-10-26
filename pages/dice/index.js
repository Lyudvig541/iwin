import DicePage from '../../src/components/Dice';
import RulesModal from '../../src/components/Modals/RulesModal';
import { useMemo } from 'react';
import { diceData, roundData } from '../../src/assets/static-data';

export default function Dice({ toggleWalletModal }) {

    const { dataStatisticScoreboard, dataStatisticWin } = useMemo(() => diceData, []);

    return (
        <>
            <RulesModal />
            <DicePage
                scoreboardData={roundData}
                data={dataStatisticScoreboard}
                dataStatistic={dataStatisticWin}
                toggleWalletModal={toggleWalletModal}
            />
        </>
    );

}
