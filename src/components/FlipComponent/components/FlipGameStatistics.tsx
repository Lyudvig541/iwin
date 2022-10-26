import React from 'react';
import GameStatistics from '../../GameStatistics';
import { IFlipGameStatistics } from '../../../interface/components-ts/flip-ts/IFlipPage';

const FlipGameStatistics = (props: IFlipGameStatistics) => <GameStatistics {...props}/>;

export default FlipGameStatistics;