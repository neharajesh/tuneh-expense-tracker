'use client";';

import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./index.css";

export const AddExpenseButton = () => {
  const handleSave = () => {
    console.log("Expense saved");
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="triggerButton">+ Add Expense</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Add Expense</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Add your expense details here. Click the save button once done.
            </Dialog.Description>

            <div>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="name">
                  Title
                </label>
                <input
                  className="Input"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="username">
                  Type
                </label>
                <input
                  className="Input"
                  id="username"
                  defaultValue="@peduarte"
                />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="amount">
                  Amount
                </label>
                <input className="Input" id="amount" defaultValue="0" />
              </fieldset>
            </div>

            <div>
              <button onClick={handleSave}> Save Changes</button>
            </div>

            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
