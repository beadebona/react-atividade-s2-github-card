import styled from 'styled-components'

const StyledCard = styled.li`
    width: 250px;
    background: #fff;
    margin: 20px ;
    border-radius: 5px;
    border: 2px solid #023e8a;
    box-sizing: border-box;
    list-style: none;


    h2{
        color: #023e8a;
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }
    ul{
        display: flex;
        flex-direction: column;
    }
    h4{
        margin: 5px;
    }
    a, p{
        text-decoration: none;
        color: #023e8a;
        margin: 5px;
    }


`

export default StyledCard