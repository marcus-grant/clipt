import React, { FunctionComponent, useContext, useState } from 'react';
import { AppConsumer } from './AppContext';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

// import AddPageButton from 'AddPageButton';

// TODO add to own component module
interface AddPageButtonProps {
  onClick?(e: React.MouseEvent): void,
  disabled?: boolean
}

const AddPageButton: FunctionComponent<AddPageButtonProps> = ({onClick, disabled}) => {
  return (
    <IconButton
      aria-label="add" 
      disabled={disabled}
      onClick={onClick}
    >
      <AddIcon />
    </IconButton>
  );
};

const addPageContainer:FunctionComponent = () => {
  const [addPageCardVisible] = useState(false);
  const appState = useContext(AppConsumer);
  const handleAddPageClick = (e: HTMLInputElement) => {
  };
  console.log(appState.currentURL);
  return (
    <AddPageButton disabled={addPageCardVisible} onClick={handleAddPageClick} />
  );
};

export default addPageContainer;
