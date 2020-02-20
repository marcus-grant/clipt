import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
// import TextField from '@material-ui/core/TextField';

export interface AddClipDialogProps {
  open: boolean,
  // onClose(e: React.EventHandler, reason: string): void,
  onClose(): void,
  onTextChange?(): void,
  // urlText?: string,
}

export const AddClipDialog: React.FC<AddClipDialogProps> = ({
  open,
  onClose,
  // onTextChange,
  // urlText,
}) => {
  const dialogId = 'add-clip-form-dialog-title';
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby={dialogId}>
      <DialogTitle id={dialogId}>Add Clip</DialogTitle>
    </Dialog>
  );
};

export default AddClipDialog;
