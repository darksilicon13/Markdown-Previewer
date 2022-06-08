import React, { Component } from 'react';
import './Editor.css'
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Editor extends Component {
   
    render() {
        
        return (
            <div className="editor-window">
                <div className="window-title-bar">
                    <header><FontAwesomeIcon icon={faPencil} /> Editor</header>
                    <button onClick={this.props.onClick}>{this.props.icon}</button>
                </div>
                {/* User Story #1: I can see a textarea element with a corresponding id="editor". */}
                <textarea id="editor" value={this.props.content} onChange={this.props.onChange}></textarea>
            </div>
        );
    }
}

export default Editor;