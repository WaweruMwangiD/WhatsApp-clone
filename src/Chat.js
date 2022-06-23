import { Avatar, IconButton } from '@material-ui/core';
import { AttachFileOutlined, InsertEmoticonOutlined, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './Chat.css'

const Chat = () => {
    const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 50 ))
  }, [])
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://robohash.org/${seed}`}/>
            <div className='chat_header_info'>
                <h3>Room Name</h3>
                <p>Last seen...</p>
            </div>
            <div className='chat_header_right'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFileOutlined />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        
        </div>
        <div className='chat_body'>
            <div className={`chat_message ${true && "chat_receiver"}`}>
                <span className='chat_name'>David Waweru</span>
                <p>Hey there!!</p>
                <span className='chat_timestamp'>
                    6:05 am
                </span>
            </div>

            <div className='chat_receiver'>
                <span className='chat_name'>David Waweru</span>
                <p>Hey there whats on your mind</p>
                <span className='chat_timestamp'>6:05 am</span>
            </div>
        
        </div>
        <div className='chat_footer'>
            <InsertEmoticonOutlined />
            <form>
                <input type="text" />
                <button>Send a message</button>
            </form>
            <Mic />
        
        </div>
    </div>
  )
}

export default Chat;