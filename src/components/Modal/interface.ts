export interface ModalProps {
    children?: any
    show?: boolean
    onClickOutsideModalBody?():void;
    modalBodyClassName: string
}

export interface ModalState {
    show?: boolean
}