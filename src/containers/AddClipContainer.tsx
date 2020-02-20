import React from 'react';
import { AddClipButtonProps } from '../components/AddClipButton';
import { AddClipDialogProps } from '../components/AddClipDialog';


interface AddClipExternalProps {
  renderButton(props: AddClipButtonProps): JSX.Element,
  renderDialog(props: AddClipDialogProps): JSX.Element,
}

interface AddClipState {
  addClipDialogVisible: boolean,
}

const AddClipContainer: React.FC<AddClipExternalProps> = ({
  renderButton, renderDialog
}) => {
  const [state, setState] = React.useState<AddClipState>({
    addClipDialogVisible: false,
  });

  const handleAddButtonClick = () => {
    setState({ addClipDialogVisible: !state.addClipDialogVisible, ...state });
  };

  const handleClose = () => {
    // TODO:
    // set text state
    // set valid text flag undef if text empty, false if invalid, true if valid
    // try to download url
    // if not send alert banner, meanwhile show spinner
    // if success parse, meanwhile show another spinner
    // if successful show success banner & close
    setState({ addClipDialogVisible: false });
  };

  const buttonProps: AddClipButtonProps = {
    disabled: state.addClipDialogVisible,
    onClick: handleAddButtonClick
  };

  const dialogProps: AddClipDialogProps = {
    open: state.addClipDialogVisible,
    onClose: handleClose,
  };

  return (
    <div className="add-clip__container">
      {renderButton(buttonProps)}
      {state.addClipDialogVisible && renderDialog(dialogProps)}
    </div>
  )
};

export default AddClipContainer;
