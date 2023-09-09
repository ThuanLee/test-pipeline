import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NotesPage = () => {
  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('/api/')
    let data = await response.json()
    setNotes(data)
  }

  let getTitle = (note) => {
    let title = note.body.split('\n')[0]
    if (title.length > 50) {
      title = title.slice(0, 50)
    }
    return title
  }

  let formatTime = (note) => {
    let time = new Date(note.updated).toLocaleDateString()
    return time
  }

  return (
    <div>
      <div className='notes'>
        <div className='notes-header'>
          <h3 className='note-title'>Thời gian biểu</h3>
          <p className='note-count'>{notes.length}</p>
        </div>

      </div>
      <div>
        {notes.map((note, index) => (
          <div className='notes-list-item'>
            <Link to={`/note/${note.id}/`}>
              <p>{getTitle(note)}</p>
              <p>{formatTime(note)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesPage