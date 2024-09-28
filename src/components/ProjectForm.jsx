import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function ProjectModal({ onAdd, onCancel }) {
    const modal = useRef();

    const titleRef = useRef();
    const descRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDesc = descRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Some fields are empty.</p>
                <p className="text-stone-600 mb-4">Please fill a valid value for every field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input label="Title" type="text" ref={titleRef} />
                    <Input label="Description" textArea ref={descRef} />
                    <Input label="Due Date" type="date" ref={dueDateRef} />
                </div>
            </ div>
        </>
    );
}