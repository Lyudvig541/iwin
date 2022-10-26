import React from 'react';
import Table from '../../Table';
import { headerTabs } from '../../../assets/static/static';
import { IWheelGameTable } from '../../../interface/components-ts/wheel-ts/IWheel';

const WheelGameTable = ({ data }:IWheelGameTable) => {
    
    const onPageChange = (currentPage: number) => currentPage;

    return (
        <Table headerTabs={headerTabs} onPageChange={onPageChange} data={data} />
    );

};

export default WheelGameTable;


