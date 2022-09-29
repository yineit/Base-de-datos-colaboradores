import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Button from "react-bootstrap/Button"; // Importamos el componente
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { BaseColaboradores } from "../BaseColaboradores"
const Listado = () => {
    const [nombreColaborador, setNombreColaborador] = useState("")
    const [correoColaborador, setCorreoColaborador] = useState("")
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
    // Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaColaboradores([...listaColaboradores, {
            nombre: nombreColaborador,
            correo: correoColaborador
        }])
    }
    //Función al escribir sobre el input del formulario
    const capturaInput = (e) => {
        setNombreColaborador(e.target.value)
        setCorreoColaborador(e.target.value)
    }

    const eliminarColaborador = (colaborador) => {
        const listaFiltrada = listaColaboradores.filter(el => el.nombre !==
            colaborador.nombre)
        setListaColaboradores(listaFiltrada)
    }


    return (
        <div style={{
            display: 'block',

            padding: 30
        }}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Buscador de Colaboradores</Navbar.Brand>
                    <Nav className="me-left">

                        <DatalistInput
                            id="datalistOptions"
                            placeholder="Buscar colaborador"

                            items={[
                                { value: 'Colaborador 1' },
                                { value: 'Colaborador 2' },
                                { value: 'Colaborador 3' },

                            ]}
                        />

                    </Nav>
                </Container>
            </Navbar>
            <br></br>
            <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del Colabordor</Form.Label>
                    <Form.Control type="text" name="nombreColaborador" onChange={capturaInput} placeholder="Ingrese el nombre del colaborador" />
                    <Form.Text className="text-muted">
                        Ejemplo: Colaborador 4.
        </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el correo del colaborador" name="correoColaborador" onChange={capturaInput} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Agregar colaborador
      </Button>
            </Form>
            <br></br>
            <hr></hr>
            <h4>Listado de Colaboradores</h4>
            <ul>
                {listaColaboradores.map(colaborador => <li key={colaborador.nombre} key={colaborador.correo}
                    style={colaborador.completada === true ? {
                        textDecoration:
                            'line-through'
                    } : {}}>
                    {colaborador.nombre} - {colaborador.correo}
                    <Button onClick={() => eliminarColaborador(colaborador)} variant="danger" type="submit">
                        Borrar
</Button>

                </li>)}

            </ul>
        </div>
    )
}
export default Listado