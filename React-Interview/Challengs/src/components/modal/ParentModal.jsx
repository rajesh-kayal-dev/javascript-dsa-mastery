import React, { useState } from 'react'
import Modal from './Modal'


const ParentModal = () => {
    const [open, setOpen] = useState(false);

    const handelOpen = () => {
        setOpen(true);
    }


    const handelClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <button onClick={handelOpen}>Open Modal</button>

            <Modal isOpen={open} onClose={handelClose} >
                <h3>Model Title</h3>
                <p>This is modal content</p>
            </Modal>
        </div>
    )
}

export default ParentModal