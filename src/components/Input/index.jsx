import StyledArea from "./style";

const Input = ({icon:Icon, register, name, error, isError }) =>{
    return(
        <StyledArea isError={isError}>
            <Icon/>
            <input {...register(name)}/>
        </StyledArea>
    )
}

export default Input