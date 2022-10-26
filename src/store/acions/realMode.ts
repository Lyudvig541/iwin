import { IIsRealMode, IParams, IS_REAL_MODE } from '../../interface/store-ts/actions/realMode';

export const isRealMode = ({ gameName, bool }: IParams): IIsRealMode => ({
    type: IS_REAL_MODE,
    payload: { gameName, bool }
});

