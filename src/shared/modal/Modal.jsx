import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./style/Modal.css";

export const Modal = ({ isOpen, onClose, children, title }) => (
    <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-title"
        fullWidth
        maxWidth="sm"
    >
        {title && (
            <DialogTitle
                id="modal-title"
                className="modal-title-custom"
            >
                {title}
                <IconButton
                    aria-label="Cerrar modal"
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        )}
        <DialogContent className="modal-content-custom">
            {children}
        </DialogContent>
    </Dialog>
);
