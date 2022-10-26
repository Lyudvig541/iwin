type IKenoSettings = {
    setOpenWinModal: Function,
    startNewGame: boolean,
    setStart: Function,
    runGame: Function,
    risk: string,
    setRisk: Function
    setStartGame: Function,
    setCheckCount: Function
    checkCount: number
}
type IButtonGroupKeno = {
    disable: boolean,
    buttonText: string,
    setDisable: Function,
    setButtonText: Function,
    setOpenWinModal: Function,
    runGame: Function
}
type IKenoState = {
    keno: {
        isWin: boolean,
        startCount: 1 | 2 | 3 | 4
        risk: string
        started: boolean
    }
}
type IKenoSelect = {
    lightMode: boolean,
    text: string | number,
    width?: string,
    isWin: { isWin: boolean, winX: number } | null,
    option: any,
    setOption: Function,
    data: {
        id: number;
        text: number | string ;
    } [];
}
type IKenoNumberBlock = {
    field: {
        id: number,
        win: boolean,
        check: boolean,
        number: number,

    },
    setCheckCount: Function,
    startGame: boolean,
    checkCount: number
}

export type {
    IKenoSettings,
    IButtonGroupKeno,
    IKenoState,
    IKenoSelect,
    IKenoNumberBlock
};
