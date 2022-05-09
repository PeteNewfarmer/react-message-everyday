import React from "react"
import { Button } from "../Button";
import { Modal } from "../Modal";
import { MESSAGE_EVERYDAY } from "./constant";
import { MessageEverDayProps, MessageEveryDayState } from "./interface";

export class MessageEveryDay extends React.Component<MessageEverDayProps, MessageEveryDayState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    handleShowMondal = () => {
        this.setState({ showModal: true})
    }

    logEventPropagation = () => {
        console.log("Message Every Day Page Click")
    }

    handleCloseModal = () => {
        this.setState({ showModal: false})
    }

    render() {
        console.log(new Date().getDay())
        return (
            <div onClick={this.logEventPropagation}>
                <h1>Message Every Day</h1>
                <Button onClick={this.handleShowMondal}>Get Daily Message</Button>
                <Modal show={this.state.showModal} modalBodyClassName="message-everyday-modal-body">
                    <div>Today is {MESSAGE_EVERYDAY[new Date().getDay()].dayName}</div>
                    <div>Todays message is "{MESSAGE_EVERYDAY[new Date().getDay()].message}"</div>
                    <Button type="primary" className="modal-button" onClick={this.handleCloseModal}>Close</Button>
                </Modal>
            </div>
        )
    }
}