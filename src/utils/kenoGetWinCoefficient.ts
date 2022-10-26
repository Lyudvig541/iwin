import { IListType, IMinimumMatch, IWinType, IType, ICofList } from '../interface/utils-ts/IKenoGetWin';

export const minimumMatch: IMinimumMatch = {
    'Low': [
        {
            id: 1,
            minX: 0,
            xList: [
                { percent: 0, x: 0.7 },
                { percent: 100, x: 1.8 }
            ]
        },
        {
            id: 2,
            minX: 50,
            xList: [
                { percent: 50, x: 2 },
                { percent: 100, x: 3.6 }
            ]
        },
        {
            id: 3,
            minX: 33.3,
            xList: [
                { percent: 0, x: 0 },
                { percent: 33.3, x: 1.1 },
                { percent: 66.6, x: 1.3 },
                { percent: 100, x: 25 }
            ]
        },
        {
            id: 4,
            minX: 50,
            xList: [
                { percent: 0, x: 0 },
                { percent: 50, x: 2.2 },
                { percent: 75, x: 7.5 },
                { percent: 100, x: 85 }
            ]
        },
        {
            id: 5,
            minX: 40,
            xList: [
                { percent: 0, x: 0 },
                { percent: 40, x: 1.5 },
                { percent: 60, x: 4 },
                { percent: 80, x: 12.5 },
                { percent: 100, x: 290 }
            ]
        },
        {
            id: 6,
            minX: 33.3,
            xList: [
                { percent: 0, x: 0 },
                { percent: 33.3, x: 1.1 },
                { percent: 50, x: 2 },
                { percent: 66, x: 5.8 },
                { percent: 83, x: 95 },
                { percent: 100, x: 680 }
            ]
        },
        {
            id: 7,
            minX: 28.5,
            xList: [
                { percent: 0, x: 0 },
                { percent: 28.5, x: 1.1 },
                { percent: 42.8, x: 1.55 },
                { percent: 57.1, x: 3.4 },
                { percent: 71, x: 15 },
                { percent: 85, x: 210 },
                { percent: 100, x: 680 }
            ]
        },
        {
            id: 8,
            minX: 25,
            xList: [
                { percent: 0, x: 0 },
                { percent: 25, x: 1.1 },
                { percent: 37.5, x: 1.45 },
                { percent: 50, x: 2 },
                { percent: 62, x: 5.2 },
                { percent: 75, x: 37.5 },
                { percent: 87, x: 95 },
                { percent: 100, x: 800 }
            ]
        },
        {
            id: 9, minX: 22.2,
            xList: [
                { percent: 0, x: 0 },
                { percent: 22.2, x: 1.1 },
                { percent: 33, x: 1.3 },
                { percent: 44, x: 1.6 },
                { percent: 55, x: 2.5 },
                { percent: 66, x: 7 },
                { percent: 77, x: 50 },
                { percent: 88, x: 235 },
                { percent: 100, x: 900 }
            ]
        },
        {
            id: 10, minX: 20,
            xList: [
                { percent: 0, x: 0 },
                { percent: 20, x: 1.1 },
                { percent: 30, x: 1.2 },
                { percent: 40, x: 1.3 },
                { percent: 50, x: 1.7 },
                { percent: 60, x: 3.5 },
                { percent: 70, x: 12 },
                { percent: 80, x: 50 },
                { percent: 90, x: 235 },
                { percent: 100, x: 1000 }
            ]
        }
    ],
    'Medium': [
        {
            id: 1,
            minX: 0,
            xList: [
                { percent: 0, x: 0.4 },
                { percent: 100, x: 2.65 }
            ]
        },
        {
            id: 2,
            minX: 50,
            xList: [
                { percent: 50, x: 1.7 },
                { percent: 100, x: 5.1 }
            ]
        },
        {
            id: 3,
            minX: 66.6,
            xList: [
                { percent: 0, x: 0 },
                { percent: 66.6, x: 2.7 },
                { percent: 100, x: 48 }
            ]
        },
        {
            id: 4,
            minX: 50,
            xList: [
                { percent: 0, x: 0 },
                { percent: 50, x: 1.7 },
                { percent: 75, x: 10 },
                { percent: 100, x: 85 }
            ]
        },
        {
            id: 5, minX: 40,
            xList: [
                { percent: 0, x: 0 },
                { percent: 40, x: 1.4 },
                { percent: 60, x: 4 },
                { percent: 80, x: 13.5 },
                { percent: 100, x: 350 }
            ]
        },
        {
            id: 6,
            minX: 50,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 50, x: 3 },
                { percent: 66, x: 9 },
                { percent: 83, x: 170 },
                { percent: 100, x: 690 }
            ]
        },
        {
            id: 7,
            minX: 42.8,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 42.8, x: 2 },
                { percent: 57.1, x: 6.5 },
                { percent: 71, x: 30 },
                { percent: 85, x: 350 },
                { percent: 100, x: 750 }
            ]
        },
        {
            id: 8,
            minX: 37.5,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 37.5, x: 2 },
                { percent: 50, x: 4 },
                { percent: 62, x: 10 },
                { percent: 75, x: 60 },
                { percent: 87, x: 370 },
                { percent: 100, x: 850 }
            ]
        },
        {
            id: 9,
            minX: 33,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 33, x: 2 },
                { percent: 44, x: 2.5 },
                { percent: 55, x: 4.5 },
                { percent: 66, x: 14.5 },
                { percent: 77, x: 90 },
                { percent: 88, x: 450 },
                { percent: 100, x: 900 }
            ]
        },
        {
            id: 10,
            minX: 30,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 30, x: 1.55 },
                { percent: 40, x: 2 },
                { percent: 50, x: 4 },
                { percent: 60, x: 6 },
                { percent: 70, x: 24 },
                { percent: 80, x: 95 },
                { percent: 90, x: 480 },
                { percent: 100, x: 1000 }
            ]
        }
    ],
    'Hard': [
        {
            id: 1,
            minX: 100,
            xList: [
                { percent: 100, x: 3.8 }
            ]
        },
        {
            id: 2,
            minX: 100,
            xList: [
                { percent: 0, x: 0 },
                { percent: 100, x: 16.5 }
            ]
        },
        {
            id: 3,
            minX: 100,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 100, x: 77.7 }
            ]
        },
        {
            id: 4,
            minX: 75,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 75, x: 9.5 },
                { percent: 100, x: 245 }
            ]
        },
        {
            id: 5,
            minX: 60,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 60, x: 4.3 },
                { percent: 80, x: 46 },
                { percent: 100, x: 435 }
            ]
        },
        {
            id: 6, minX: 66,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 66, x: 10.5 },
                { percent: 83, x: 335 },
                { percent: 100, x: 680 }
            ]
        },
        {
            id: 7, minX: 57.1,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 57.1, x: 6.7 },
                { percent: 71, x: 86 },
                { percent: 85, x: 385 },
                { percent: 100, x: 770 },
                { percent: 0, x: '-' },
                { percent: 0, x: '-' },
                { percent: 0, x: '-' }
            ]
        },
        {
            id: 8, minX: 25,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 50, x: 4.8 },
                { percent: 62, x: 20 },
                { percent: 75, x: 250 },
                { percent: 87, x: 580 },
                { percent: 100, x: 850 },
                { percent: 0, x: '-' },
                { percent: 0, x: '-' }
            ]
        },
        {
            id: 9, minX: 44, xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 44, x: 4 },
                { percent: 55, x: 10 },
                { percent: 66, x: 54 },
                { percent: 77, x: 480 },
                { percent: 88, x: 770 },
                { percent: 100, x: 950 },
                { percent: 0, x: '-' }
            ]
        },
        {
            id: 10, minX: 40,
            xList: [
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 0, x: 0 },
                { percent: 40, x: 3.5 },
                { percent: 50, x: 7.5 },
                { percent: 60, x: 12.5 },
                { percent: 70, x: 60 },
                { percent: 80, x: 480 },
                { percent: 90, x: 770 },
                { percent: 100, x: 1000 }
            ]
        }
    ]
};

const calculateWInCoefficient = (cofList: ICofList, winCoff: number) => {

    let winX: number = 0;

    cofList.forEach(({ percent, x }) => {

        if (Math.floor(percent) === Math.floor(winCoff)) {

            winX = +x;

        }

    });


    return { isWin: true, winX };

};

export const getWinArray = (checkList: IListType, winList: IListType): IListType => {

    const matchArray: IListType = [];

    checkList.forEach((checkNumber) => {

        winList.forEach(winNumber => {

            if (checkNumber === winNumber) {

                matchArray.push(winNumber);

            }

        });

    });

    return matchArray;

};
export const winOrLouse = (checkList: IListType, winList: IListType, type: IType): IWinType => {

    const getGameParam = minimumMatch[type][checkList.length - 1];

    const coff = getGameParam.minX;
    const count = getGameParam.id;
    const coffList = getGameParam.xList;

    const winCoff = winList.length * 100 / count;

    if (coff > winCoff) return { isWin: false, winX: 0 };

    return calculateWInCoefficient(coffList, winCoff);

};