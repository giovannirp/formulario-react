import React, {useState} from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core"

function FormularioCadastro({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(false);
    const [novidades, setNovidades] = useState(true);

    // const arr = useState("");
    // const sobreNome = arr[0];
    // const setSobreNome = arr[1];
    return(
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobreNome, cpf, novidades, promocoes})
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0,3);
                    }
                    setNome(tmpNome);      
                
                }}
                id="nome" 
                label="Digite Nome"
                variant="standard"
                margin="normal"
                fullWidth
            />

            <TextField 
                value={sobreNome}
                onChange={(event) => {
                    let tempSobrenome = event.target.value;
                    if(tempSobrenome.length >=7) {
                        tempSobrenome = tempSobrenome.substr(0,7)
                    }
                    setSobreNome(tempSobrenome);
                }}
                id="sobreNome" 
                label="Digite Sobre Nome"
                variant="standard"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                id="CPF" 
                label="Digite CPF" 
                variant="standard"
                margin="normal"
                fullWidth />
            
            <FormControlLabel 
                label="Promoçoes"
                control={
                    <Switch name="promocoes"
                        checked={promocoes}
                        onChange={(event) =>{
                        setPromocoes(event.target.checked)
                }} defaultChecked={promocoes} color="primary" />} 
            />
            
            <FormControlLabel 
                label="Novidades"
                control={
                    <Switch name="novidades"
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                    }} defaultChecked={novidades} color="primary" />
                }
            />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;