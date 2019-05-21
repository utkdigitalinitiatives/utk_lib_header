import React, {Component} from 'react';

const defaultHash = 'e98ae2539f2bd5d1659cc53d7de2812b'

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
            <div id={container} className="utk-libchat"></div>
        )
    }
}
