type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

type AnyButtonType = DialogButtonType | FormButton["type"]

type ConfirmationHandlingFormButton = FormButton & {
    onConfirm?: (dialogButton: DialogButtonType) => void;
}
