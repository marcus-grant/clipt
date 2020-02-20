import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AddClipContainer from './containers/AddClipContainer';
import AddClipButton, { AddClipButtonProps } from './components/AddClipButton';
import AddClipDialog, { AddClipDialogProps } from './components/AddClipDialog';

const renderAddClipButton =
  (props: AddClipButtonProps) => <AddClipButton {...props}/>;
const renderAddClipDialog =
  (props: AddClipDialogProps) => <AddClipDialog {...props}/>;

// TODO: Add Sidebar
const NavBar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <AddClipContainer
          renderButton={renderAddClipButton}
          renderDialog={renderAddClipDialog}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
