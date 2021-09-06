import React from 'react';
import shortid from 'shortid';

function App() {

  const[tarea,setTarea]=React.useState('')
  const[fecha,setFecha]=React.useState('')
  const[prioridad,setPrioridad]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion,setModoEdicion] = React.useState(false)
  const[idd,setIdd]=React.useState('')
  const [error,setError] = React.useState(null)


  const agregarTarea= (e)=>{
    e.preventDefault()
    
    if(!tarea.trim()){
      console.log("campo vacio")
      setError("Ingrese nombre de tarea...")
      return
    }
    if(!fecha.trim()){
      console.log("campo vacio")
      setError("Ingrese fecha...")
      return
    }
    if(!prioridad.trim()){
      console.log("campo vacio")
      setError("Ingrese prioridad...")
      return
    }
    if(!descripcion.trim()){
      console.log("campo vacio")
      setError("Ingrese descripcion...")
      return
    }
    console.log(tarea)
    
    setError(null)
    setTareas([...tareas,
      {id: shortid.generate(),
        nombreTarea:tarea,
        nombreFecha:fecha,
        nombrePrioridad:prioridad,
        nombreDescripcion:descripcion,
      }
    ])
    
    setTarea('')
    setFecha('')
    setPrioridad('')
    setDescripcion('')
  }
  
  const eliminarTarea=(itemid)=>{
    const arrayFiltrado=tareas.filter(itemm=>itemm.id!==itemid)
    setTareas(arrayFiltrado)
    console.log(arrayFiltrado)
    setError(null)
  }

  const editar=(itemTarea)=>{
    console.log(itemTarea)
    setModoEdicion(true)
    setTarea(itemTarea.nombreTarea)
    setFecha(itemTarea.nombreFecha)
    setPrioridad(itemTarea.nombrePrioridad)
    setDescripcion(itemTarea.nombreDescripcion)
    setIdd(itemTarea.id)
  }

  const editarTarea=(e)=>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("campo vacio")
      setError("campo vacio...")
      return
    }
    if(!fecha.trim()){
      console.log("campo vacio")
      setError("campo vacio...")
      return
    }
    if(!prioridad.trim()){
      console.log("campo vacio")
      setError("campo vacio...")
      return
    }
    if(!descripcion.trim()){
      console.log("campo vacio")
      setError("campo vacio...")
      return
    }
    
    setError(null)
    const arrayEditado= tareas.map(
      item => item.id === idd ? {id:idd, nombreTarea:tarea,nombreFecha:fecha,nombrePrioridad:prioridad,nombreDescripcion:descripcion} : item)
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setFecha('')
    setPrioridad('')
    setDescripcion('')
    setIdd('')
  }



  return (
    <div className="container mt-5">
      <h1>Problema 7-Afrus</h1>
      <h2>Erik J.</h2>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
                tareas.length === 0 ? (<li className="list-group-item">No hay tareas</li>
                ):(
                   tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                <p className="lead">Nombre tarea: {item.nombreTarea}</p>
                <p className="lead">fecha: {item.nombreFecha}</p>
                <p className="lead">prioridad: {item.nombrePrioridad}</p>
                <p className="lead">Descripcion: {item.nombreDescripcion}</p>

                <button 
                className="btn btn-danger btn-sm float-right mx-2"
                onClick={()=>eliminarTarea(item.id)}
                >Eliminar
                </button>
  
                <button 
                className="btn btn-warning btn-sm float-right" 
                onClick={()=> editar(item)}
                >Editar
                </button>
  
              </li>
               ))
              
              )
            }
          </ul>
        </div>
        <div className="col-4">{/*creo q el sistema de columnas son 12*/}
          <h4 className="text-center">{
            modoEdicion? "Editar Tarea" :"Agregar tarea"
          }</h4>
        <form onSubmit= {modoEdicion? editarTarea : agregarTarea}>

          {
            error ? <span className="text-danger">{error}</span> : null
          }
          <input
           type="text"
            className="form-control mb-2"
            placeholder="Ingrese Tarea"
            onChange={e=>setTarea(e.target.value)}
            value={tarea}/>
            <input
           type="text"
            className="form-control mb-2"
            placeholder="Ingrese fecha"
            onChange={e=>setFecha(e.target.value)}
            value={fecha}/>
            <input
           type="text"
            className="form-control mb-2"
            placeholder="Ingrese prioridad"
            onChange={e=>setPrioridad(e.target.value)}
            value={prioridad}/>
            <input
           type="text"
            className="form-control mb-2"
            placeholder="Ingrese Descripcion"
            onChange={e=>setDescripcion(e.target.value)}
            value={descripcion}/>
            {
              modoEdicion?(
              <button
                className="btn btn-warning btn-block" type="submit">Editar</button>):
                <button
            className="btn btn-dark btn-block" type="submit">Agregar</button>
            }

            
        </form>

        
        </div>
      </div>
    </div>
  );
}

export default App;
