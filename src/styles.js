import styled from "styled-components"

export const Div = styled.div`
border: 1px solid black;
border-radius: 6px;
color: black;
padding: 15px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 620px;


h4 {
    font-weight: 600;
}

video {
    background-color: #0000005c;
    margin: 15px 0;
    width:100%;
}

source {
    min-width: 250px;
}

span {
    font-style: italic;
    font-size: 18px
}
`