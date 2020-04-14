import React from "react";
import PropTypes from 'prop-types';

import './style.scss';

const ForumUser = ({
                       userName,
                       date,
                       userReplyName,
                       userReplyText,
                       userReplyDate,
                       commendText,
                       addAnswer,
                       id,
}) => {
    return (
        <div className='forumUser'>
            <div className='forumUser__mainComment'>
                <div className='forumUser__mainComment__logo'/>
                <div className='forumUser__mainComment__userAnswer'>
                    <div className='forumUser__mainComment__userAnswer__header'>
                        <div className='forumUser__mainComment__userAnswer__name'>
                            {userName}
                        </div>
                        <div className='forumUser__mainComment__userAnswer__date'>
                            {date}
                        </div>
                    </div>
                    <div className='forumUser__mainComment__userAnswer__text'>
                        {commendText}
                    </div>
                    <button
                        className='forumUser__mainComment__userAnswer__replyButton'
                        onClick={() => addAnswer(id)}
                    >
                        Reply
                    </button>
                </div>
            </div>
            {userReplyText && (
                <div className='forumUser__answerComment'>
                    <ForumUser
                        userName={userReplyName}
                        commendText={userReplyText}
                        date={userReplyDate}
                    />
                </div>
            )}
        </div>
    );
};

ForumUser.propTypes = {
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    userReplyName: PropTypes.string,
    userReplyText: PropTypes.string,
    userReplyDate: PropTypes.string,
    commendText: PropTypes.string.isRequired,
    addAnswer: PropTypes.func,
    id: PropTypes.number,
};

ForumUser.defaultProps = {
    userReplyName: '',
    userReplyText: '',
    userReplyDate: '',
    addAnswer: Function.prototype,
    id: null,
};

export default ForumUser;