import { Form, Span } from "./styles";

import { useState } from "react";

import axios from "axios";

import { Box, Button, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({repo, setRepo}) => {

    const [text, setText] = useState("")
    const [status, setStatus] = useState(200)

    async function onSearch(e) {
        e.preventDefault()
        
        const response = await axios.get(`https://api.github.com/repos/${text}`)
        .catch(() => setStatus(404))

        setStatus(response.status)
        
        if(status === 200){
            setRepo([...repo, response.data])
            console.log(repo)
        }
    };

    return (
        <Box sx={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column"
             
            }}>
            <Form onSubmit={(e) => { onSearch(e) }}>
                <TextField
                    id="input-with-icon-textfield"
                    sx={{
                        backgroundColor: "#00000021",
                        borderRadius: "10px 0px 0px 10px",
                        paddingLeft: "10px",
                        fontFamily: "Arial, Helvetica, sans-serif"
                    }}
                    label="Procure o repositório"
                    value={text} onChange={(e) => { setText(e.target.value) }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <Button
                sx={{
                    borderRadius: "0px 10px 10px 0px",
                    height: "48px",
                    fontFamily: "Arial, Helvetica, sans-serif"
                }}
                type="submit"
                variant="contained"
                >Pesquisar</Button>
            </Form>
                {status === 404 && (
                    <>
                    <Span>Houve algum problema, reveja a url</Span>
                    </>
                )}
        </Box>
    )
}