import React from 'react';

type IScoreboardData = {
    label:string,
    value: number
}
type IDiceGameStatistics = {
    data: { wins: number },
    tableRef: any,
    setActive: Function,
    game: string,
}

type IData = {
    prediction:string
    count:string
    percent:string
}
type IDataStatistic ={
    wins: number
    loses: number
    viewAll: Function
}
type IDicePageProps = {
    scoreboardData:IScoreboardData[]
    data: IData[]
    dataStatistic: IDataStatistic
}

type RealModeSelect = {
    realMode: boolean
}

type IDataScorbord = {
    scoreboardData:IScoreboardData[],
    data:IData[],
    children?: React.ReactNode,
}

type IDiceTable = {
    tableRef: any,
    active: number,
    setActive: Function
}

export type {
    IScoreboardData,
    IData,
    IDataStatistic,
    IDicePageProps,
    RealModeSelect,
    IDataScorbord,
    IDiceTable,
    IDiceGameStatistics
};