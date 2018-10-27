import React, { Component } from 'react';
import {Jumbotron, Button, Container} from 'reactstrap';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { };
      }

    render() {
        return (
        <div>
        <Jumbotron className="home_header_img">
          <Container >
            <h1 className="display-3 merienda">Asistente de Recolección - Serviecologico S.A.S</h1>
            <p className="lead">SRA es una herramienta desarrollada para Serviecologico S.A.S que apoya la logistica
            de recolección de materiales. La aplicación permite a asesores comerciales asignar y supervisar recolecciones
            a diferentes empresas cliente. Permite a los recolectores ver sus recolecciones asignadas, procesarlas y
            reportarlas a la empresa.</p>
            <br/>
            <hr className="my-2" />
            <p>La aplicacion permite a Serviecologico llevar un registro historico de las recolecciones hechas permitiendole
                llevar una mejor administración y tomar mejores decisiones basadas en datos.</p>         
          </Container>
        </Jumbotron>            
        </div>
        )
    }
}
