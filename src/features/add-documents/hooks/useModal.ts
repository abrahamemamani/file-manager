import { useState } from "react";

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return {
    handleOpen,
    handleClose,
    open,
  }
}
