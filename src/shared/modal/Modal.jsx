import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ isOpen, onClose, children, title }) => (
    <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-title"
        fullWidth
        maxWidth="sm"
    >
        {title && (
            <DialogTitle id="modal-title">
                {title}
                <IconButton
                    aria-label="Cerrar modal"
                    onClick={onClose}
                    sx={{ position: "absolute", right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        )}
        <DialogContent>{children}</DialogContent>
    </Dialog>
);
