import React from 'react';
import GameStatistics from '../GameStatistics';
import { IMinesGameStatistics } from '../../interface/components-ts/mines-ts/IMinesPage';

const KenoGameStatistics = (props: IMinesGameStatistics) => <GameStatistics {...props}/>;

export default KenoGameStatistics;