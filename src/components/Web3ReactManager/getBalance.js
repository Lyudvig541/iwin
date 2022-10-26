export const getUserBalance = async (account) => {

    const getTokenBalance = new Promise((resolve) => {

        window.ethereum?.request({
            method: 'eth_getBalance',
            params: [
                account,
                'latest'
            ]
        }).then(balance => resolve(balance.toString() / 10 ** 18));

    });

    return await getTokenBalance.then((value) => value);

};
