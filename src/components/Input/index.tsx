import { SimpleInput } from './InputStyles/styles';
import { IInput } from '../../interface/components-ts/imput-ts/IImputGroupes';

const Input=({ 
    type, 
    disable, 
    step, 
    value, 
    setValue=() => {},
    text,
    maxValue = 10,
    maxWidth,
    inputWidth,
    balance = 0,
    setInfluenceBalance,
    minValue = 0
}: IInput) => {

    const onInput = (e: any) => {

        if(Math.abs(e.target.value) === 0) {

            e.target.value = Math.abs(e.target.value);
            setValue(minValue);

        }

    };
    const onChange = (value: number | string) => {


        if (Number(value) >= minValue) {

            setValue((Number(value) > balance || Number(value) > maxValue) ? (balance > maxValue ? maxValue : balance) : Number(value));
            setInfluenceBalance(Number(value) < minValue);

        } else {

            setValue(value === '0' ? 0 : 0);
            setInfluenceBalance(true);

        }

    };

    return <SimpleInput
        maxWidth={maxWidth}
        inputWidth={inputWidth || '100%'}
        step={step}
        text={text}
        disabled={disable}
        type={type}
        value={value || ''}
        onChange={(e: {target: { value: string | number }}) => onChange(e.target.value)}
        onInput={(e: Event) => onInput(e)}
    />;

};

export default Input;