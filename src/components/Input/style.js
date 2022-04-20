import styled from 'styled-components'

const StyledArea = styled.section`
        display: flex;
        align-items: center;
        background-color: #ffff;
        width:250px;
        height: 40px;
        border-radius: 5px;
        border: ${(props) =>props.isError ? '2px solid #dc2f02' : '2px solid #023e8a'};
        color: #023e8a;
        box-sizing: border-box;
        margin-bottom: 10px;

input{
        border: none;
        width: 100%;
        padding: 0;
        outline: none;
        background: transparent;
        font-size: 18px;
    }
    svg{
        color: ${(props) =>props.isError ? '#dc2f02' : '#023e8a'};
    }

`
export default StyledArea