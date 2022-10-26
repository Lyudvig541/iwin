const useGameConfigs = (game) => {

    const games = {
        dice: {
            minBet: 0.1,
            maxBet: 100,
            edge: 1
        },
        flip: {
            minBet: 0.1,
            maxBet: 100,
            edge: 1
        },
        wheel: {
            minBet: 0.1,
            maxBet: 100,
            edge: 1
        },
        mines: {
            minBet: 1,
            maxBet: 100,
            edge: 1
        }
    };

    return { minBet: games[game].minBet, maxBet: games[game].maxBet, edge: games[game].edge };

};

export default useGameConfigs;