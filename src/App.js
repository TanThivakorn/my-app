import "./App.css";
import { Button, Modal, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function App() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [buttonSize, setButtonSize] = useState(18);
  const handleClickButton = async () => {
    await setOpen(true);
    console.log('open');
  };
  const handleClose = () => setOpen(false);

  const handleButton = () => setButtonSize(buttonSize * 2);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://media.tenor.com/9JgRRliqRv8AAAAi/penguins-penguin.gif"
          className="App-logo"
          alt="logo"
        />
        <p className="header-text">น้ำหวาน เป็นแฟนกับแทนได้มั้ยครับ🫶</p>
      </header>
      <div className="button-choice">
        <Button
          variant="contained"
          style={{
            borderRadius: 35,
            backgroundColor: "#4caf60",
            padding: `${buttonSize}px 30px`,
            fontSize: "18px",
          }}
          onClick={handleClickButton}
        >
          Yes ❤️
        </Button>
        <motion.div
          animate={{ x: hover ? 200 : 0 }}
          onHoverStart={() => {
            setHover(!hover);
          }}
        >
          <Button
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: "#E57373",
              padding: "18px 30px",
              fontSize: "18px",
            }}
            onClick={handleButton}
          >
            No 💔
          </Button>
        </motion.div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
            <img
              src="https://i.pinimg.com/originals/81/fc/5c/81fc5cf9eff3f06a613080b9779a770d.gif"
              className="App-logo"
              alt="logo"
            />
            <p>ขอบคุณคั้บ คุณแฟน</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
