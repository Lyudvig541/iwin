import { CHANGE_LIGHT_MODE, IChangeLightMode, IParams } from '../../interface/store-ts/actions/lightMode';


export const changeLightMode = (modeKey: IParams): IChangeLightMode => ({
    type: CHANGE_LIGHT_MODE, payload: modeKey
});