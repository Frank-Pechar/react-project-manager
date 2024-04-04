import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button.jsx';

// ref forwarded from NewProject component points to
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  // this ref points to built-in dialog element
  const dialog = useRef();

  // this ref points to forwarded ref from NewProject component
  useImperativeHandle(ref, () => {
    return {
      // This open method is now an api exposed to outside components
      // dialog.current pointer is provided by dialog = useRef() defined above
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Place the dialog modal as the first child in the body element
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
