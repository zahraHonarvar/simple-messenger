import React, { useMemo, useEffect } from 'react'
import AppStatus from './components/appStatus';
import ListItem from './components/listItem';
import List from './components/list';
import ChatDetail from './components/chatDetail';
import styles from './index.module.scss';
import { chatSelected, submitMessage, closeChat, contactsLoaded, chatsLoaded, initDataLoaded, loadChatMessages } from '../../stateManager/actionCreator';
import { useAppState } from '../../context/appStateContext';
import { useDispatch } from '../../context/dispatcherContext';
import { loadContacts, loadRecentChats, submitTextMessage, getChatMessages } from '../../services/main';
import io from 'socket.io-client';
import { baseUrl } from '../../utility/request';

export default function Index() {
  const { userId, chatList, messages, selectedChatId } = useAppState();
  const dispatch = useDispatch();

  const selectedChat = useMemo(
    () => chatList.find(x => x.id === selectedChatId),
    [chatList, selectedChatId]
  );

  const selectedChatMessages = messages.filter(x => x.chatId === selectedChatId);

  function handleChatSelect(id) {
    getChatMessages(id, userId)
      .then(data => {
        // dispatch(chatSelected(id));
        dispatch(loadChatMessages(id, data.result));
      })
  }

  function handleSubmit(text) {
    submitTextMessage(userId, selectedChatId, text)
      .then((data) => {
        console.log(data);
        dispatch(submitMessage(text));
      })
  }

  function handleClose() {
    dispatch(closeChat());
  }

  useEffect(
    () => {
      Promise.all([
        loadContacts(userId),
        loadRecentChats(userId)
      ])
        .then(([contacts, chats]) => {
          dispatch(
            initDataLoaded({
              contacts,
              chats
            })
          );
        })
    },
    [userId]
  )

  // useEffect(
  //   () => {
  //     io(baseUrl)
  //   },
  //   []
  // )

  return (
    <div className={styles['layout']}>
      <div className={styles['side']}>
        <AppStatus />
        <List>
          {chatList.map(chat => {

            const lastMessage = messages.filter(x => x.chatId === chat.id);
            return <ListItem
              selected={chat.id === selectedChatId}
              onSelect={() => handleChatSelect(chat.id)}
              key={chat.id}
              name={chat.name}
              avatar={chat.avatar}
              time={chat.time}
              unreadMessageCount={chat.unreadMessageCount}
              text={lastMessage.length === 0 ? '' : lastMessage[lastMessage.length - 1].text}
            />
          })}
        </List>
      </div>
      <div className={styles['main']}>
        {selectedChatId &&
          <ChatDetail
            onClose={handleClose}
            selectedChatId={selectedChatId}
            onSubmit={handleSubmit}
            avatar={selectedChat.avatar}
            name={selectedChat.name}
            messages={selectedChatMessages.map(message => {
              return {
                id: message.id,
                text: message.text,
                me: message.userId === userId
              }
            })}
          />
        }
      </div>
    </div>
  )
}
