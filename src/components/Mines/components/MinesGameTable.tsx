import { getMinesGameHistory } from '../../../actions/MinesGame';
import { useEffect, useState } from 'react';
import { getTokenBalance } from '../../../actions/User';
import { IMinesGameTable } from '../../../interface/components-ts/mines-ts/IMinesPage';

import Table from '../../Table';


const MinesGameTable = ({ headerTabs, tableRef, active, setActive }: IMinesGameTable) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        getTokenBalance('0xB2E2eB4eB487B0fd52D14ed6452f90ECA5c4EF4f');
        getMinesGameHistory().then(data => setData(data));


    }, []);

    return <Table 
        headerTabs={headerTabs} 
        data={data} 
        tableRef={tableRef} 
        active={active} 
        setActive={setActive} 
    />;

};

export default MinesGameTable;