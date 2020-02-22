import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    addClipBtn: {
      marginRight: theme.spacing(2)
    }
  }),
);

export interface AddClipButtonProps {
  onClick?(e: React.MouseEvent): void,
  disabled?: boolean
}

const AddClipButton: React.FC<AddClipButtonProps> =
  (props: AddClipButtonProps) => {
  const classes = useStyles();
  const {disabled, onClick} = props;

  return (
    <IconButton
      aria-label="add-clip" 
      disabled={disabled}
      onClick={onClick}
      classes={classes.addClipBtn}
    >
      <AddIcon />
    </IconButton>
  );
};

export default AddClipButton;
