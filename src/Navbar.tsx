import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// TODO: Need to make a side menu with all possible categories

interface NavbarProps {
  title: string,
  // children?: ReactChildren,
}


 export default (props: NavbarProps) => {
   // const [anchorEl, setAnchorEl] =
   //   React.useState<null | HTMLElement>(null);

  // TODO figure out how to properly type the passed event
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(e.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // <IconButton
  //     aria-controls="fade-menu"
  //     aria-haspopup="true"
  //     onClick={handleClick}
  // >

  return (
    <AppBar>
      <IconButton
        aria-controls="fade-menu"
        aria-haspopup="true"
      >
        <MenuIcon color="primary"/>
      </IconButton>
    </AppBar>
  );
};
