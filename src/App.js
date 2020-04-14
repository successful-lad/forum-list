import React, { useState } from 'react';
import { ForumUser } from "./components";

import './style.scss';

function App() {
    const [usersData, setUsersData] = useState([
        {userName: 'Matt', date: '2020', commendText: 'How artistic', id: 0},
        {userName: 'Eliot Fu', date: '2020', commendText: 'This has been very useful for my research. Thanks as well!', id: 1, userReplyDate: '2030', userReplyText: 'some Reply text', userReplyName: 'Jenny Hess'},
        {userName: 'Joe Henderson', date: '2020', commendText: 'Dude, this is awesome. Thanks so much', id: 2}
    ]);

    const [newAnswer, setNewAnswer] = useState('');

    const addAnswer = (id) => {
        const newUsersData = usersData.map((user, index) => {
            return index === id ? {...user, userReplyName: 'Jenny Hess', userReplyDate: '2030', userReplyText: newAnswer } : user
        });

        setUsersData(newUsersData);
        setNewAnswer('');
    };

    const handleChange = (event) => {
        setNewAnswer(event.target.value)
    }

    const addReply = () => {
        setUsersData(
            [...usersData,
                { userName: 'Jenny Hess', commendText: newAnswer, id: usersData.length }]);
        setNewAnswer('');
    };

  return (
    <div className="app">
        {usersData.map(user => (
            <ForumUser
                userName={user.userName}
                commendText={user.commendText}
                date={user.date}
                userReplyDate={user.userReplyDate}
                userReplyName={user.userReplyName}
                userReplyText={user.userReplyText}
                id={user.id}
                addAnswer={addAnswer}
            />

        ))}
        <div className='app__wrapper'>
            <textarea
                onChange={handleChange}
                className='app__wrapper__textArea'
                value={newAnswer}
            />
            <button onClick={addReply} className='app__wrapper__replyButton'>Add reply</button>
        </div>
    </div>
  );
}

export default App;
