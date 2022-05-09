import React from "react"
import ReactDOM from "react-dom"
import { ModalProps, ModalState } from "./interface"
import "./style.css"

export class Modal extends React.Component<ModalProps, ModalState> {
    root: HTMLDivElement
    el: HTMLDivElement

    constructor(props: ModalProps) {
        super(props)

        this.root = document.querySelector("#root") as HTMLDivElement
        this.el = document.createElement("div") as HTMLDivElement
    }

    componentDidMount() {
        this.root.appendChild(this.el);
    }

    componentWillUnmount() {
        this.root.removeChild(this.el);
    }
    
    removeOnClickPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    onClickOutsideModalBody = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { onClickOutsideModalBody } = this.props;

        onClickOutsideModalBody && onClickOutsideModalBody();
    }

    render() {
        return (
            this.props.show ? ReactDOM.createPortal(
                <div className="modal-container" onClick={this.removeOnClickPropagation}>
                    <div className="modal-overlay" onClick={this.onClickOutsideModalBody}></div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>,
                this.el

            ) : null
        )
    }
}