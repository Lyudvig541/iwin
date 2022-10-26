import { useEagerConnect } from '../../hooks/web3';

const HardhatProvider =({ children }) => {

    const tried = useEagerConnect();

    return <HardhatProvider.Provider
        tred={tried}
    >
        {children}
    </HardhatProvider.Provider>;

};

export default HardhatProvider;