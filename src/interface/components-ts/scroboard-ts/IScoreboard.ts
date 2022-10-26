import React from 'react';

type IScoreboard = {
    children?: React.ReactNode,
    scoreboardData?: {[key:string]: number | string}[],
    onToggle?: Function,
    noOpen?: boolean
}

export type {
    IScoreboard  
};