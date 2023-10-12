import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'



const EditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        // Llama a la función para obtener el blog por su ID cuando el componente se monta
        getBlogById()
    }, [])

    const getBlogById = async () => {
        try {
            // Realiza una solicitud GET al servidor para obtener los datos del blog por su ID
            const response = await axios.get(URI + id)
            // Establece el título y el contenido en el estado con los datos obtenidos
            setTitle(response.data.title)
            setContent(response.data.content)
        } catch (error) {
            console.error('Error al obtener el blog:', error)
        }
    }

    const update = async (e) => {
        e.preventDefault()
        try {
            // Realiza una solicitud PUT para actualizar el blog con los nuevos datos
            await axios.put(URI + id, {
                title: title,
                content: content
            })
            // Redirige al usuario a la página de inicio después de la actualización
            navigate('/')
        } catch (error) {
            console.error('Error al actualizar el blog:', error)
        }
    }

    return (
        <>
            <h3>Edit Blog</h3>
            <form onSubmit={update} className='form-control'>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <textarea type="text" className='form-control' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </>
    )
}

export default EditBlog
