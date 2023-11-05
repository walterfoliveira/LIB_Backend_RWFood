import React from 'react'

const Message = (props) => (
    <div style={{ background: '#eee', borderRadius: '5px', padding: '0 2px 10px' }}>
        <p>
            <strong>{props.user}</strong>:
        </p>
        <p>
            {props.message} as {Date.now().toString()}
        </p>
    </div>
)

export default Message
