export const OPEN_OR_CLOSE_MODAL: 'OPEN_OR_CLOSE_MODAL' = 'OPEN_OR_CLOSE_MODAL';

export type Params = {
    key: string
    state: boolean
}

export interface ITriggerModal {
    type: typeof OPEN_OR_CLOSE_MODAL,
    payload: Params
}

export type ModalActionsType = ITriggerModal
