import { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'

import { PicCenterOutlined, SendOutlined } from '@ant-design/icons';


const MessageFrom = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (e) => {
        setValue(e.target.value);

        isTyping(props, chatId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });
        
        setValue('');
    }

    const handleUpload = (e) => {
        sendMessage(creds, chatId, {files: e.target.files, text: ''})
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input
                className='message-input'
                placeholder='Enter a message...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PicCenterOutlined className='picture-icon' />
                </span>
            </label>
            <input 
                type='file'
                multiple={false}
                id='upload-button'
                style={{display: 'none'}}
                onChange={handleUpload}
            />
            <button className='send-button' type='submit'>
                <SendOutlined className='send-icon' />
            </button>
        </form>
    )
}

export default MessageFrom
