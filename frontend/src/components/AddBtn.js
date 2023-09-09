import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <Link to='/note/new/' className='add-btn'>
      <AddIcon fontSize='large' color='primary' />
    </Link>
  )
}

export default AddBtn