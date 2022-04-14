import styled from "styled-components"

export const Section = styled.section`
background-color: white;
display: flex;
justify-content: space-between;
max-height: 300px;
color: black;
border-radius: 5px;
margin: 15px 0;
padding: 10px;
width: 100%;
max-width: 700px;

img {
    width: 100px;
    border-radius: 50px;
    border: 1px solid gray;
    margin-right: 10px;
}

img:hover {
    border: 1px solid #1565C0;
}

a {
    text-decoration: none;
    color: inherit;
}

figcaption {
    display: none;
}





`

export const Div = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;

h4 {
    font-weight: 600;
}

p {
    font-size: 18px;
}

span {
    font-size: 14px;
    margin: 0 10px;
    color: gray;
}
`