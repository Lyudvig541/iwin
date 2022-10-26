type IMinesPage = {
    scoreboardData: { [key: string]: number | string }[],
    balance: number
}

type IMinesScoreboard = {
    noOpen?: boolean
}

type IPercentSmallBlocks = {
    clickedCount: number
    mineId: number
    numberOfMines: number
}

type IMinesBlock = {
    clickedCount: number,
    countOfDiamonds: number,
    disable: boolean,
    finish: boolean,
    ifMine: boolean,
    ifMineBlockAlert: Function,
    layerStopSelectMines: boolean,
    setClickedCount: Function,
    setClickedMine: Function,
}

type IPercentShowBlocks = {
    numberOfMines: number,
    coefficients: {id: number, mine: boolean}[]
    clickedCount: number,
}

type IMinesGameTable = {
    headerTabs: string[],
    tableRef: any,
    active: number,
    setActive: Function
    lightMode?: boolean
}
type IMinesGameStatistics = {
    data: {
        wins: number
        loses: number
        viewAll: Function
    },
    tableRef?: any,
    setActive?: Function,
    game: string,
}

export type {
    IMinesPage,
    IMinesScoreboard,
    IMinesGameTable,
    IMinesBlock,
    IPercentShowBlocks,
    IPercentSmallBlocks,
    IMinesGameStatistics
};