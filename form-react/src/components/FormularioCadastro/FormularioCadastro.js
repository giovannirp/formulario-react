import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core"

function FormularioCadastro() {
    return(
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

            <TextField id="sobreNome" label="sobreNome" variant="outlined" margin="normal" fullWidth />

            <TextField id="CPF" label="sobreNome" variant="outlined" margin="normal" fullWidth />
            
            <FormControlLabel 
                label="Promoçoes"
                control={
                    <Switch name="promocoes" defaultChecked color="primary" />
                } 
            />
            
            <FormControlLabel 
                label="Novidades"
                control={
                    <Switch name="novidades" defaultChecked color="primary" />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;