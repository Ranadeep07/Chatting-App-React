import React, { useState, useEffect } from 'react'
import Messages from './Messages';
import db from '../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function AppHome() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('');
    // console.log(input)
    // console.log(messages)

    //useState = variable in React
    //useEffect = Run on a particular condition depeding upon the dependency list and if depending list is empty it will run only once when the app loads for the first time 
    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => {
            //Snapshot is pulling the real data from data base 
            setMessages(snapshot.docs.map(doc => (
               {id:doc.id , message : doc.data()}
            )))
        })
    }, [])

    useEffect(() => {
        const username = prompt('Please Enter Your Name');
        setUsername(username);
    }, [])
    const inputHandler = (event) => {
        setInput(event.target.value);
    }
    const sendMessages = (event) => {
        event.preventDefault();
        db.collection('messages').add({
            message : input,
            user : username,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    };

    // console.log(messages)
    // var index = 0;
    return (
        <div>
            <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100' alt='logo'/>
            <h1>{username ? `Welcome ${username} to Chat Messenger` : `Welcome to Chat Messenger`}</h1>
            <form className='send_form'>
                <input className='input_message' onChange={inputHandler} placeholder='ENTER YOUR MESSAGE'></input>
                <button type='submit' className='btn' onClick={sendMessages}>SEND</button>
            </form>

            <FlipMove>
            {
                messages.map(({id,message}) => (
                    <Messages key={id} message={message} user={username} />
                ))
            }
            </FlipMove>
        </div>
    )
}

export default AppHome
