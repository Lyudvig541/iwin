import Table from '../../Table';
import { useEffect, useState } from 'react';
import { getTokenBalance } from'../../../actions/User';
import { getDiceGameHistory } from '../../../actions/DiceGame';
import { headerTabs } from '../../../assets/static/static';
import { IDiceTable } from '../../../interface/components-ts/dice-ts/IDice';


const DiceTable = ({ tableRef, active, setActive }: IDiceTable) => {

    const [data, setData] = useState([]);
    const onPageChange = (currentPage: any) => currentPage;

    useEffect(() => {

        getTokenBalance('0xB2E2eB4eB487B0fd52D14ed6452f90ECA5c4EF4f');
        getDiceGameHistory().then(data => setData(data));


    }, []);
    
    return(
        <Table
            headerTabs={headerTabs}
            active={active}
            setActive={setActive}
            onPageChange={onPageChange} 
            data={data}
            tableRef={tableRef}
        />
    );

};

export default DiceTable;