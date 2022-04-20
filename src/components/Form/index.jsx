import StyledForm from "./style";
import {BiGitRepoForked} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import Input from "../Input";

const Form = ({ register, name , innerText , errors , fail , ...rest }) =>{

    return (
    <StyledForm {...rest}>
        <label>Owner<span> {errors.owner?.message}</span> </label>
        <Input icon={FiUser} register={register} name="owner" isError={!!errors.owner} />
        <label>Project<span> {errors.project?.message}</span> </label>
        <Input 
        icon={BiGitRepoForked} 
        register={register} name="project" isError={!!errors.project} />
    <span>{fail}</span>
    <button type="submit">{innerText}</button>
    </StyledForm>
    )
}

export default Form