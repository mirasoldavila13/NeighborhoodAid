
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: 'success' | 'error'; // Defining types for the modal message
}

const Modal = ({ isOpen, onClose, message, type }: ModalProps) => {
  if (!isOpen) return null; // If modal is not open, don't render anything.

  return (
    <div className="modal-overlay">
      <div className={`modal ${type === 'success' ? 'modal-success' : 'modal-error'}`}>
        <div className="modal-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
