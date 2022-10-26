import { getFlipGameHistory } from '../../../actions/FlipGame';
import { useEffect, useState } from 'react';
import { getTokenBalance } from '../../../actions/User';
import { IFlipGameTable } from '../../../interface/components-ts/flip-ts/IFlipPage';

import Table from '../../Table';


const FlipGameTable = ({ headerTabs, tableRef, active, setActive }: IFlipGameTable) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        getTokenBalance('0xB2E2eB4eB487B0fd52D14ed6452f90ECA5c4EF4f');
        getFlipGameHistory().then(data => setData(data));


    }, []);

    return <Table
        headerTabs={headerTabs}
        data={data}
        tableRef={tableRef}
        active={active}
        setActive={setActive}
    />;

};

export default FlipGameTable;