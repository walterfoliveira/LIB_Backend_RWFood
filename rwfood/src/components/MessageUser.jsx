import React from 'react'

const MessageUser = (props) => {
    const chat = props.chat.map((m) => (
        <div style={{ background: '#eee', borderRadius: '5px', padding: '0 10px' }}>
            <p>
                <strong>{props.user}</strong> says:
            </p>
            <p>{props.message}</p>
        </div>

        // <Message
        //   key={Date.now() * Math.random()}
        //   user={m.user}
        //   message={m.message}
        // />
    ))

    return <div>{MessageUser}</div>
}

export default MessageUser
