import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


class PanelAdmin extends React.Component{ç
    constructor(props){
        super(props);
        this.state = {
            nombre:"",
            correo:"",
            contrasenya:"",
            empleados:[]
        }
        
    }

    borrarUsuario = (id) => {                      //Creamos una nueva funcio que le tendremos que indicar el id del usuario que queremos eliminar, le asignamos un onclick al boton de eliminar
        //console.log(id);
        
        axios.post('http://localhost:80/proyecto/borrar.php',id)
            .then((result)=>{
                //console.log(result.data);
                if(result.data === 1){
                    //alert("Usuario eliminiado correctamente");
                    this.cargarDatos(); //volvemos a cargar los datos para que se actualice
                }
                else{
                    //alert("No se ha podido eliminar el usuario");
                }
            })
            
    }
    
    cargarDatos(){
        fetch("http://localhost/proyecto/select.php")
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                    //console.log(datosRespuesta);
                    this.setState({empleados:datosRespuesta})
                })
            
    }

    componentDidMount(){
        this.cargarDatos();
    }

    render(){
        const {empleados}=this.state    //recogemos la info de empleados que contiene la array

        return(
            <div className="fondo">
            <div className="contenedor">
            <div className="card">
                <div className="card-header">
                    <h5>Panel Admin</h5> 
                </div>
                <div className="card-body">

                    <table className="table">
                        <thead>
                            <tr>
                                <th><h4>Lista de empleados </h4></th>
                                <th><Link type="button" className="btn btn-success" to={"/AgregarUser"}>+ Crear nuevo usuario</Link></th>
                            </tr>
                        </thead>
                    </table>
                    
                    <br></br>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Edad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {empleados.map(                     //Nota: indocar con la posición del array[] los campos de la BD
                                (empleado)=>(
                                    <tr key={empleado[0]}>
                                        <td>{empleado[0]}</td>
                                        <td>{empleado[1]}</td>
                                        <td>{empleado[2]}</td>
                                        <td>{empleado[3]}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link to={"/Editar"} type="button" className="btn btn-warning">Editar</Link>
                                                <button type="button" className="btn btn-danger" onClick={()=>this.borrarUsuario(empleado[0])}>Borrar</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                            }    

                        </tbody>
                    </table>   
                </div>

                <div className="card-footer text-muted">
                        <Link to={"/"} className="btn btn-default" role="button">Cerrar sessión</Link>
                </div>
            </div>
            </div>
            </div>
         );
    }
}

export default PanelAdmin;