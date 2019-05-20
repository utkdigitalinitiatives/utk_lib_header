import React, {Component} from 'react';
import Globals from "./Globals";

const defaultHash = 'cbb3e39658d3f35979d91f22200d30f3'

export class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: defaultHash
        };
    }

    componentDidMount () {

        const hash = this.getLibChatHash(this.props.libchat);
        const script = document.createElement("script")

        script.src = 'https://v2.libanswers.com/load_chat.php?hash=' + hash
        script.async = true

        document.body.appendChild(script)
    }

    getLibChatHash (hash) {
        if (!hash)
            hash = defaultHash
        else
            this.setState({ hash : hash })

        return hash
    }

    render() {

        const container = 'libchat_' + this.state.hash

        return (
            <div id={container}></div>
        )
    }
}
