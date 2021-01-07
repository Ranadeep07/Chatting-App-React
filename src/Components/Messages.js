import { Card,CardContent, InputLabel, Typography, } from '@material-ui/core';
import React,{forwardRef} from 'react';

import './Messages.css';
const Messages = forwardRef(({message,user}, ref) => {
    const time = new Date().toLocaleTimeString().substring(0,4)+" "+new Date().toLocaleTimeString().substring(8,10);
    const isUser = user === message.user;
    // console.log(isUser);
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card>
                <InputLabel>{isUser ? 'You' : message.user}</InputLabel>
                <CardContent className={ isUser ? 'message_userCard' : 'message_guestCard'}>
                    <Typography color="textPrimary" variant='h5' component='h2'>
                    {message.message}
                    </Typography>
                    
                </CardContent>            
            </Card>
            <span className='time'>{time}</span>
        </div>
    )
});

export default Messages
