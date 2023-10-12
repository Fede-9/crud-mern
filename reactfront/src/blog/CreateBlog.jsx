import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'


const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }
    return (
        <div>
            <h3>Create Blog</h3>
            <form onSubmit={store} className='form-control'>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <textarea type="text" className='form-control' value={content} onChange={(e)=>setContent(e.target.value)} />
                </div>
                <button  type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CreateBlog