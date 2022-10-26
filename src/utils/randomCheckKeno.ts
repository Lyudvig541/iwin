import { IKenoList, IParam, IList } from '../interface/utils-ts/IRandomCheckKeno';
import { IKenoShowCoefficient } from '../interface/utils-ts/IKenoGetWin';

export const randomCheckKeno = (list: IList, kenoList: IKenoList, param: IParam) => {

    const newArr = [...kenoList];

    list.forEach(number => {

        newArr.forEach((field) => {

            if(field.id === number) {

                field[param] = true;

            }

        });
    
    });
  
    return newArr;

};

export const coefficientKenoShow: IKenoShowCoefficient = {
    'Low': [
        {
            id: 1, minX: 0,
            xList: [
                { id: 1, percent: 0, x: 0.7 },
                { id: 2, percent: 100, x: 1.8 },
                { id: 3, percent: 0, x: '-' },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 2, minX: 50,
            xList: [
                { id: 1, percent: 50, x: 2 },
                { id: 2, percent: 100, x: 3.6 },
                { id: 3, percent: 0, x: '-' },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 3, minX: 33.3,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 33.3, x: 1.1 },
                { id: 3, percent: 66.6, x: 1.3 },
                { id: 4, percent: 100, x: 25 },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 4, minX: 50,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 50, x: 2.2 },
                { id: 3, percent: 75, x: 7.5 },
                { id: 4, percent: 100, x: 85 },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 5, minX: 40,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 40, x: 1.5 },
                { id: 3, percent: 60, x: 4 },
                { id: 4, percent: 80, x: 12.5 },
                { id: 5, percent: 100, x: 290 },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 6, minX: 33.3,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 33.3, x: 1.1 },
                { id: 3, percent: 50, x: 2 },
                { id: 4, percent: 66, x: 5.8 },
                { id: 5, percent: 83, x: 95 },
                { id: 6, percent: 100, x: 680 },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 7, minX: 28.5,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 28.5, x: 1.1 },
                { id: 3, percent: 42.8, x: 1.55 },
                { id: 4, percent: 57.1, x: 3.4 },
                { id: 5, percent: 71, x: 15 },
                { id: 6, percent: 85, x: 210 },
                { id: 7, percent: 100, x: 680 },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }

            ]
        },
        {
            id: 8, minX: 25,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 25, x: 1.1 },
                { id: 3, percent: 37.5, x: 1.45 },
                { id: 4, percent: 50, x: 2 },
                { id: 5, percent: 62, x: 5.2 },
                { id: 6, percent: 75, x: 37.5 },
                { id: 7, percent: 87, x: 95 },
                { id: 8, percent: 100, x: 800 },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 9, minX: 22.2,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 22.2, x: 1.1 },
                { id: 3, percent: 33, x: 1.3 },
                { id: 4, percent: 44, x: 1.6 },
                { id: 5, percent: 55, x: 2.5 },
                { id: 6, percent: 66, x: 7 },
                { id: 7, percent: 77, x: 50 },
                { id: 8, percent: 88, x: 235 },
                { id: 9, percent: 100, x: 900 },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 10, minX: 20,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 20, x: 1.1 },
                { id: 3, percent: 30, x: 1.2 },
                { id: 4, percent: 40, x: 1.3 },
                { id: 5, percent: 50, x: 1.7 },
                { id: 6, percent: 60, x: 3.5 },
                { id: 7, percent: 70, x: 12 },
                { id: 8, percent: 80, x: 50 },
                { id: 9, percent: 90, x: 235 },
                { id: 10, percent: 100, x: 1000 }
            ]
        }
    ],
    'Medium': [
        {
            id: 1, minX: 0,
            xList: [
                { id: 1, percent: 0, x: 0.4 },
                { id: 2, percent: 100, x: 2.65 },
                { id: 3, percent: 0, x: '-' },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 2, minX: 50,
            xList: [
                { id: 1, percent: 50, x: 1.7 },
                { id: 2, percent: 100, x: 5.1 },
                { id: 3, percent: 0, x: '-' },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 3, minX: 66.6,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 66.6, x: 2.7 },
                { id: 3, percent: 100, x: 48 },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 4, minX: 50,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 50, x: 1.7 },
                { id: 3, percent: 75, x: 10 },
                { id: 4, percent: 100, x: 85 },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 5, minX: 40,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 40, x: 1.4 },
                { id: 3, percent: 60, x: 4 },
                { id: 4, percent: 80, x: 13.5 },
                { id: 5, percent: 100, x: 350 },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 6, minX: 50,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 50, x: 3 },
                { id: 4, percent: 66, x: 9 },
                { id: 5, percent: 83, x: 170 },
                { id: 6, percent: 100, x: 690 },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 7, minX: 42.8,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 42.8, x: 2 },
                { id: 4, percent: 57.1, x: 6.5 },
                { id: 5, percent: 71, x: 30 },
                { id: 6, percent: 85, x: 350 },
                { id: 7, percent: 100, x: 750 },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 8, minX: 37.5,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 37.5, x: 2 },
                { id: 4, percent: 50, x: 4 },
                { id: 5, percent: 62, x: 10 },
                { id: 6, percent: 75, x: 60 },
                { id: 7, percent: 87, x: 370 },
                { id: 8, percent: 100, x: 850 },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 9, minX: 33,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 33, x: 2 },
                { id: 4, percent: 44, x: 2.5 },
                { id: 5, percent: 55, x: 4.5 },
                { id: 6, percent: 66, x: 14.5 },
                { id: 7, percent: 77, x: 90 },
                { id: 8, percent: 88, x: 450 },
                { id: 9, percent: 100, x: 900 },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 10, minX: 30,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 30, x: 1.55 },
                { id: 4, percent: 40, x: 2 },
                { id: 5, percent: 50, x: 4 },
                { id: 6, percent: 60, x: 6 },
                { id: 7, percent: 70, x: 24 },
                { id: 8, percent: 80, x: 95 },
                { id: 9, percent: 90, x: 480 },
                { id: 10, percent: 100, x: 1000 }
            ]
        }
    ],
    'Hard': [
        {
            id: 1, minX: 100,
            xList: [
                { id: 1, percent: 100, x: 3.8 },
                { id: 2, percent: 0, x: '-' },
                { id: 3, percent: 0, x: '-' },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 2, minX: 100,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 100, x: 16.5 },
                { id: 3, percent: 0, x: '-' },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 3, minX: 100,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 100, x: 77.7 },
                { id: 4, percent: 0, x: '-' },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 4, minX: 75,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 75, x: 9.5 },
                { id: 4, percent: 100, x: 245 },
                { id: 5, percent: 0, x: '-' },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 5, minX: 60,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 60, x: 4.3 },
                { id: 4, percent: 80, x: 46 },
                { id: 5, percent: 100, x: 435 },
                { id: 6, percent: 0, x: '-' },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 6, minX: 66,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 0, x: 0 },
                { id: 4, percent: 66, x: 10.5 },
                { id: 5, percent: 83, x: 335 },
                { id: 6, percent: 100, x: 680 },
                { id: 7, percent: 0, x: '-' },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 7, minX: 57.1,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 0, x: 0 },
                { id: 4, percent: 57.1, x: 6.7 },
                { id: 5, percent: 71, x: 86 },
                { id: 6, percent: 85, x: 385 },
                { id: 7, percent: 100, x: 770 },
                { id: 8, percent: 0, x: '-' },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 8, minX: 25,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 0, x: 0 },
                { id: 4, percent: 50, x: 4.8 },
                { id: 5, percent: 62, x: 20 },
                { id: 6, percent: 75, x: 250 },
                { id: 7, percent: 87, x: 580 },
                { id: 8, percent: 100, x: 850 },
                { id: 9, percent: 0, x: '-' },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 9, minX: 44, xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 0, x: 0 },
                { id: 4, percent: 44, x: 4 },
                { id: 5, percent: 55, x: 10 },
                { id: 6, percent: 66, x: 54 },
                { id: 7, percent: 77, x: 480 },
                { id: 8, percent: 88, x: 770 },
                { id: 9, percent: 100, x: 950 },
                { id: 10, percent: 0, x: '-' }
            ]
        },
        {
            id: 10, minX: 40,
            xList: [
                { id: 1, percent: 0, x: 0 },
                { id: 2, percent: 0, x: 0 },
                { id: 3, percent: 0, x: 0 },
                { id: 4, percent: 40, x: 3.5 },
                { id: 5, percent: 50, x: 7.5 },
                { id: 6, percent: 60, x: 12.5 },
                { id: 7, percent: 70, x: 60 },
                { id: 8, percent: 80, x: 480 },
                { id: 9, percent: 90, x: 770 },
                { id: 10, percent: 100, x: 1000 }
            ]
        }
    ]
};
