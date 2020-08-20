import { ACTIONS } from './actionCreator'
export const INIT_STATE = {
  name: '',
  userId: null,
  chatList: [
  ],
  messages: [
  ],
  selectedChatId: null,
  contacts: []
}

// `chat/start/user/{userId}`

export function reducer(state, action) {
  return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload)
}

const ACTION_HANDLERS = {
  [ACTIONS.CHAT_SELECTED]: handleChatSelected,
  [ACTIONS.MESSAGE_SUBMITTED]: handleMessageSubmitted,
  [ACTIONS.CHAT_CLOSED]: handleChatClosed,
  [ACTIONS.USER_SIGNED_IN]: handleSignIn,
  [ACTIONS.CONTACTS_LOADED]: handleContactsLoaded,
  [ACTIONS.CHATS_LOADED]: handleChatsLoaded,
  [ACTIONS.INIT_DATA_LOADED]: handleInitDataLoaded,
  [ACTIONS.CHAT_CREATED]: handleChatCreated,
  [ACTIONS.CHAT_MESSAGES_LOADED]: handleLoadChatMessages,
  [ACTIONS.CHAT_MESSAGES_PREPENDED]: handleChatMessagePrepended,
}

function handleChatSelected(state, payload) {
  const selectedChatIndex = state.chatList.findIndex(x => x.id === payload);
  return {
    ...state,
    selectedChatId: payload,
    chatList: [
      ...state.chatList.slice(0, selectedChatIndex),
      {
        ...state.chatList[selectedChatIndex],
        unreadMessageCount: 0
      },
      ...state.chatList.slice(selectedChatIndex + 1)
    ]
  }
}

function handleMessageSubmitted(state, payload) {
  return {
    ...state,
    messages: [
      ...state.messages,
      {
        chatId: state.selectedChatId,
        id: Math.random().toString(),
        text: payload,
        userId: state.userId
      }
    ]
  }
}

function handleChatClosed(state) {
  return {
    ...state,
    selectedChatId: null
  }
}

function handleSignIn(state, payload) {
  return {
    ...state,
    name: payload.name,
    userId: payload.id
  };
}

function handleContactsLoaded(state, payload) {
  return {
    ...state,
    contacts: payload
  }
}

function handleChatsLoaded(state, payload) {
  return {
    ...state,
    chatList: payload
  }
}

function handleInitDataLoaded(state, payload) {
  return {
    ...state,
    chatList: payload.chats.map(item => ({ ...item, avatar: '/avatar.png' })),
    contacts: payload.contacts.filter(item =>
      item.id !== state.userId)
  }
}

function handleChatCreated(state, { chatId, name }) {
  let newChatList = state.chatList;
  if (!state.chatList.some(x => x.id === chatId)) {
    const newChat = {
      time: '',
      unreadMessageCount: 0,
      avatar: '/avatar.png',
      id: chatId,
      name
    };
    newChatList = [newChat, ...state.chatList]
  }
  return {
    ...state,
    selectedChatId: chatId,
    chatList: newChatList
  }
}

function handleLoadChatMessages(state, { chatId, data }) {
  return {
    ...state,
    messages: [
      ...state.messages,
      ...data.messages.map(msg =>
        ({ chatId, id: msg.id, text: msg.content, userId: msg.userId }))
    ],
    selectedChatId: chatId
  }
}

function handleChatMessagePrepended(state, { chatId, data }) {
  return {
    ...state,
    messages: [
      ...data.messages.map(msg =>
        ({ chatId, id: msg.id, text: msg.content, userId: msg.userId })),
      ...state.messages
    ],
    selectedChatId: chatId
  }
}