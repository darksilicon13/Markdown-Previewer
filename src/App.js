import React, { Component } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// User Story #5: When my markdown previewer first loads, 
// the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
const string = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends Component {
  state = {
    input: string,
    editorFocused: false,
    previewFocused: false
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleEditor = () => {
    this.setState({ editorFocused: !this.state.editorFocused });
  }

  handlePreviewer = () => {
    this.setState({ previewFocused: !this.state.previewFocused });
  }


  render() {
    const maxIcon = (<FontAwesomeIcon icon={faMaximize} />);
    const minIcon = (<FontAwesomeIcon icon={faMinimize} />);
    
      return(
        <div className="App">
          {/* // User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea. */}
          {!this.state.previewFocused && <Editor onChange={this.handleChange} onClick={this.handleEditor} content={this.state.input} scroll={this.state.editorFocused} icon={this.state.editorFocused ? minIcon : maxIcon} />}
          {!this.state.editorFocused && <Previewer content={this.state.input} onClick={this.handlePreviewer} icon={this.state.previewFocused ? minIcon : maxIcon} />}
        </div>
      );
  }
}

export default App;