const generateNumberPercentage = (number: number, percentage: number) => (number * percentage / 100) + number;

export const addUpPercentage = (data: { x: number, precent: number[] }) => {

    let generateX: string = `${data.x}`;
    const betX: number[] = [+generateX];
    

    data.precent.forEach((p) => {

        generateX = `${generateNumberPercentage(+generateX, p)}`;

        const completedNumber = `${generateX.split('.')[0]}.${generateX.split('.')[1].substring(0, 2)}`;

        betX.push(+completedNumber);
    
    });

    return betX;

};