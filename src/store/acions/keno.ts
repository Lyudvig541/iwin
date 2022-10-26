import {
    GENERATE_WIN_NUMBERS,
    GET_USER_CHECK_NUMBERS,
    CLEAR_WIN_NUMBERS_LIST,
    GENERATE_RANDOM_CHECK,
    CLEAR_USER_GET_NUMBERS_LIST,
    IGetNumbers,
    IClearUserList,
    IClearWinList,
    IGenerateWinNumbers,
    IGetUserCheckNumbers, IRandomCheck
} from '../../interface/store-ts/actions/keno';

const generateWinNumbers = (type: any): IGenerateWinNumbers => ({
    type: GENERATE_WIN_NUMBERS, payload: type
});

const clearWInList = (): IClearWinList => ({
    type: CLEAR_WIN_NUMBERS_LIST 
})
;const generateRandomCheck = (randomCount: IGetNumbers): IRandomCheck => ({
    type: GENERATE_RANDOM_CHECK, payload: randomCount
});

const clearUserCheckList = (): IClearUserList => ({
    type: CLEAR_USER_GET_NUMBERS_LIST 
});

const getUserCheckNumbers = (checkNumber: IGetNumbers): IGetUserCheckNumbers => ({
    type: GET_USER_CHECK_NUMBERS, payload: checkNumber
});

export {
    clearWInList,
    generateWinNumbers,
    clearUserCheckList,
    getUserCheckNumbers,
    generateRandomCheck
};