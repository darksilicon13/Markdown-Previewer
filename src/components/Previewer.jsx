import React, { Component } from 'react';
import './Previewer.css';
import ReactMarkdown from 'react-markdown'; // npm install react-markdown
import remarkGfm from 'remark-gfm'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Previewer extends Component {

    render() {
        return (
            <div className="previewer-window">
                <div className="window-title-bar">
                    <header><FontAwesomeIcon icon={faEye} /> Previewer</header>
                    <button onClick={this.props.onClick}>{this.props.icon}</button>
                </div>
                {/* User Story #2: I can see an element with a corresponding id="preview". */}
                <div id="preview">
                    {/* User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked). */}
                    {/* User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element. */}
                    <ReactMarkdown remarkPlugins={remarkGfm}>{this.props.content}</ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default Previewer;