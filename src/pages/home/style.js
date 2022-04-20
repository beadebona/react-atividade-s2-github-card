import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    ul{
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 30px auto;
    }

    section{
        border: ${(props) =>props.isFailure ? '2px solid #dc2f02' : ''};
    }
    svg{
        color: ${(props) =>props.isFailure ? ' #dc2f02' : ''};
    }

`

export default Container