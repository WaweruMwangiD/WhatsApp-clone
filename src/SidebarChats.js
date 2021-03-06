import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core'
import './SidebarChats.css'

const SidebarChats = ({addNewChat}) => {

  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 50 ))
  }, [])

  const createChat = () =>{
    const roomName = prompt("Write some stuff!!!")

    if(roomName){
      // Crazy database stuff
    }
  }

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://robohash.org/${seed}.svg`}/>
      <div className='sidebarChat_info'>
        <h1>Room name</h1>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChats