import React from 'react';
import GameStatistics from '../GameStatistics';
import { IWallGameStatistics } from '../../interface/components-ts/wall-ts/IWall';

const WallGameStatistics = (props: IWallGameStatistics) => <GameStatistics {...props}/>;

export default WallGameStatistics;