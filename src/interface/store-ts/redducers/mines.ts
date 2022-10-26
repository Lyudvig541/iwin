export type IMinesState = {
    minesCount: {
        diamond: number
        mines: number
    }
    mines: {
        id: number,
        mine: boolean
    }[]
}

