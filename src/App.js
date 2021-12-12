import React from 'react'
import './App.css'

import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

const App = () => {

    const id = process.env.REACT_APP_PROJECT_ID;
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;

    return (
        <ChatEngine
            height='100vh'
            projectID={id}
            userName={username}
            userSecret={password}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App
