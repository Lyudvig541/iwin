type IParams = {
  param : 'dice' | 'flip' | 'wheel' | 'mines' | 'kong' | 'keno'
}

type IToolBar = {
  styles?: any,
  gameRealMode: 'dice' | 'flip' | 'wheel' | 'mines' | 'kong' | 'keno'
}

export type {
    IToolBar,
    IParams
};