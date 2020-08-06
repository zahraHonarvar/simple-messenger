import React from 'react'
import AppStatus from './components/appStatus';
import ListItem from './components/listItem';
import List from './components/list';
import ChatDetail from './components/chatDetail';
import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles['layout']}>
      <div className={styles['side']}>
        <AppStatus />
        <List>
          <ListItem name='Maryam Habibi' avatar='/avatar-f.jpg' time='21:14' unreadMessageCount={65} text='Hi, This is a message' />
          <ListItem name='Mina Mohammadi' avatar='/avatar-f.jpg' time='11:30' unreadMessageCount={15} text='Another Message' />
          <ListItem name='Reza Ahmadi' avatar='/avatar.png' time='21:14' unreadMessageCount={65} text='Hi, This is a message' />
          <ListItem name='Afshin Karimi' avatar='/avatar.png' time='11:30' unreadMessageCount={15} text='Another Message' selected />
          <ListItem name='Mohammad Mardan Nia' avatar='/avatar.png' time='21:14' unreadMessageCount={65} text='Hi, This is a message' />
          <ListItem name='Sarah Kiani' avatar='/avatar-f.jpg' time='11:30' unreadMessageCount={15} text='Another Message' />
          <ListItem name='Minoo Mohammadian' avatar='/avatar-f.jpg' time='21:14' unreadMessageCount={65} text='Hi, This is a message' />
          <ListItem name='Fereydoon Sabet' avatar='/avatar.png' time='11:30' unreadMessageCount={15} text='Another Message' />
          <ListItem name='Zahra Gholami' avatar='/avatar-f.jpg' time='21:14' unreadMessageCount={65} text='Hi, This is a message' />
          <ListItem name='Mohammad Bayat' avatar='/avatar.png' time='11:30' unreadMessageCount={15} text='Another Message' />
        </List>

      </div>
      <div className={styles['main']}>
        <ChatDetail
          avatar='/avatar.png'
          name='Afshin Karimi'
          messages={
            [
              { id: '1', me: false, text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'" },
              { id: '2', me: true, text: "A single line message." },
              { id: '3', me: false, text: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words" },
              { id: '4', me: false, text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " },
              { id: '5', me: true, text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'" },
            ]
          }
        />
      </div>
    </div>
  )
}
