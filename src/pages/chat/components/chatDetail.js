import React, { useState } from 'react'
import TitleBar from './titleBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTimes, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import Avatar from './avatar';
import styles from './chatDetail.module.scss';

export default function ChatDetail({ name, messages, avatar }) {
  const [text, setText] = useState('');
  return (
    <>
      <TitleBar
        first={<FontAwesomeIcon icon={faTimes} size='lg' color='#009588' className='pointer' />}
        middle={
          <div className={styles['app-title']}>
            <Avatar name={name} url={avatar} />
            <div className={styles['name']}>{name}</div>
          </div>
        }
        last={<FontAwesomeIcon icon={faEllipsisV} size='lg' color='#009588' className='pointer' />}
      />
      <div className={styles['chat-box']}>
        <ul className={styles['messages-panel']}>
          {
            messages.map(message => {
              return <li className={styles[message.me ? 'me' : '']} key={message.id}>{message.text}</li>
            })
          }
        </ul>
        <div className={styles['input-section']}>
          <input type='text' value={text} onChange={e => setText(e.target.value)} />
          <FontAwesomeIcon icon={text !== '' ? faPaperPlane : faPaperclip} color='#009588' className={styles['send'] + ' ' + styles['pointer']} size='lg' />
        </div>
      </div>
    </>
  )
}
