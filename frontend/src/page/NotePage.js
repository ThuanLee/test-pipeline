import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

export const NotePage = () => {
  
  const params = useParams()
  const noteId = params.id
  const navigate = useNavigate()

  let [note, setNote] = useState(null)

  const getNote = async () => {
    if (noteId === 'new')  return
    let response = await fetch(`/api/note/${noteId}/`)
    let data = await response.json()
    setNote(data)
  }

  useEffect(() => {
    getNote()
  }, [noteId])

  const saveHandle = async () => {
    if (noteId === 'new') {
      if (note != null && note.body !== "") {
        fetch(`/api/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(note)
        })
      }
    } else if (note.body === "") {
      fetch(`/api/note/${noteId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    } else {
      fetch(`/api/note/${noteId}/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note)
      })
    }
    navigate('/')
  }

  const deleteHandle = async () => {
    fetch(`/api/note/${noteId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    navigate('/')
  }

  return (
    <div className='note'>
      <textarea value={note?.body} spellCheck="false" onChange={e => setNote({...note, 'body': e.target.value})}></textarea>
      <div className='note-btn'>
        <Button onClick={saveHandle}>Save</Button>
        <Button><Link to='/'>Cancel</Link></Button>
        {noteId !== 'new' &&
          <div className='delete-btn'>
            <Button onClick={deleteHandle} color='error'>Delete</Button>
          </div>
        }
      </div>
    </div>
  )
}

export default NotePage