import { ITriggerModal, OPEN_OR_CLOSE_MODAL } from '../../interface/store-ts/actions/modal';

export const triggerModal = (key: string, state: boolean): ITriggerModal => ({
    type: OPEN_OR_CLOSE_MODAL,
    payload: { key, state }
});

