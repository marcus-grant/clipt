import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';


const useStyles = (theme: Theme) => ({
  addClipBtn: {
    marginRight: theme.spacing(2)
  }
})

export interface AddClipButtonProps extends WithStyles<typeof useStyles>{
  onClick?(e: React.MouseEvent): void,
  disabled?: boolean
}

const AddClipButton: React.FC<AddClipButtonProps> =
  (props: AddClipButtonProps) => {
  const {disabled, onClick, classes} = props;
  return (
    <IconButton
      aria-label="add" 
      disabled={disabled}
      onClick={onClick}
      classes={classes.addClipBtn}
    >
      <AddIcon />
    </IconButton>
  );
};

export default withStyles(useStyles)(AddClipButton);
