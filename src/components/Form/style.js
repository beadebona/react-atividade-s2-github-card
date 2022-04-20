import styled from 'styled-components'

const StyledForm = styled.form`
    width:90%;
    max-width: 350px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    label{
        color: #023e8a;
        width:250px;
        text-align: start;
        margin-bottom:5px;
    }

    svg{
        margin: 0 6px;
    }

    span{
        color: #dc2f02;
        font-weight: bold;
        /* color: ${(props) =>props.isError ? '#dc2f02' : '#023e8a'}; */
    }


    button{
        background: #023e8a;
        height: 40px;
        width: 250px;
        border-radius: 5px;
        transition: 0.8s;
        color: #fff;
        border: none;
        padding:0;
    }
    button:hover{
        background: #0096c7;
    }
    
`

export default StyledForm