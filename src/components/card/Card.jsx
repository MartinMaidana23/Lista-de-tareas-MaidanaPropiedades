import React, {useState } from 'react'
import {MdDoneOutline, MdModeEdit} from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'
import './card.css'
import Form from '../form/Form'
import useCrud from '../../hooks/useCrud'

const Card = (props) => {
    const {tarea, comentario, onClick, id, persona} = props
    const [edit,setEdit] = useState(false)
    const {deleteTask} = useCrud()
    const {getTask} = useCrud()



    const nombres = {
      guadalupe: 'guadalupe',
      jimena: 'jimena',
      martin:'martin',
      miguel:'miguel'
    }

    const initialForm = {
      tarea,
      comentario,
    }



    const personas = [
      {label:'Martin', value:'martin'},
      {label:'Guadalupe', value:'guadalupe'},
      {label:'Jimena', value:'jimena'},
      {label:'Miguel', value:'miguel'},
    ]

      
    const handleDelete = (id) =>{
        deleteTask(id)
    }

    const handleEdit = () =>{
      setEdit(!edit)
    }
  return (
    <div className={`card ${nombres[persona]} ${edit && 'edit'}` } >
      {
          !edit
           && 
          <>
            <h2 className="">{tarea}</h2> 
            {comentario && <p className="">{comentario}</p>}
            {<button className="btn"  onClick={()=>handleDelete(id)}><MdDoneOutline/></button>}
            {<button className="btn" data-fn="edit" onClick={()=>handleEdit()}><MdModeEdit/></button>}
          </>
          
      }
      {edit && 
            <Form
                  initialForm={initialForm}
                  arrayPersonas={personas}
                  edit={edit}
                  handleEdit={handleEdit}
                  task={tarea}
                  comment={comentario}
                  person={persona}
                  id={id}
            />

      }
    </div>

      
  )

  /* <div className={`card ${nombres[persona]}`}>
        <h2 className="">{tarea}</h2>
        <p className="">{comentario}</p>
        {<button className="btn"  onClick={()=>handleDelete(id)}><MdDoneOutline/></button>}
        {<button className="btn" data-fn="edit"  onClick={()=>handleEdit(id)}><MdModeEdit/></button>}
    </div> */
}

export default Card