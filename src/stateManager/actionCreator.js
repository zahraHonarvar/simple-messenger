export const ACTIONS = {
  CHAT_SELECTED: 'CHAT_SELECTED',
  MESSAGE_SUBMITTED: 'MESSAGE_SUBMITTED',
  CHAT_CLOSED: 'CHAT_CLOSED',
  USER_SIGNED_IN: 'USER_SIGNED_IN',
  CONTACTS_LOADED: 'CONTACTS_LOADED',
  CHATS_LOADED: 'CHATS_LOADED',
  INIT_DATA_LOADED: 'INIT_DATA_LOADED',
  CHAT_CREATED: 'CHAT_CREATED',
  CHAT_MESSAGES_LOADED: 'CHAT_MESSAGES_LOADED',
  CHAT_MESSAGES_PREPENDED: 'CHAT_MESSAGES_PREPENDED',
}

export const chatSelected = id => ({ type: ACTIONS.CHAT_SELECTED, payload: id })
export const submitMessage = text => ({ type: ACTIONS.MESSAGE_SUBMITTED, payload: text })
export const closeChat = () => ({ type: ACTIONS.CHAT_CLOSED })
export const userSingedIn = user => ({ type: ACTIONS.USER_SIGNED_IN, payload: user })
export const contactsLoaded = contacts => ({ type: ACTIONS.CONTACTS_LOADED, payload: contacts })
export const chatsLoaded = chats => ({ type: ACTIONS.CHATS_LOADED, payload: chats })
export const initDataLoaded = initData => ({ type: ACTIONS.INIT_DATA_LOADED, payload: initData })
export const chatCreated = (chatId, name) =>
  ({ type: ACTIONS.CHAT_CREATED, payload: { chatId, name } })
export const loadChatMessages = (chatId, data) =>
  ({ type: ACTIONS.CHAT_MESSAGES_LOADED, payload: { chatId, data } })
export const prependChatMessages = (chatId, data) =>
({ type: ACTIONS.CHAT_MESSAGES_LOADED, payload: { chatId, data } })