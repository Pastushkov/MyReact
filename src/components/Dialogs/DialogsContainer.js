import React from 'react'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../state/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState().dialogsPage;
        let sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
      
        let onMessageChange = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        }
        return (<Dialogs 
          dialogsPage={state}
          sendMessage={sendMessage}
          onMessageChange={onMessageChange}          
          newMessageText={state.newMessageText}
        />);
      }
    }</StoreContext.Consumer>
  );
};

export default DialogsContainer;
