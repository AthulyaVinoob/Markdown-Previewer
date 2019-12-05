import React, {Component} from 'react';
import marked from 'marked';

class HTMLOutputComponent extends Component{
 rawMarkup() {
    var rawMarkup = marked(this.props.markdown.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
	render() {
	    return (
	    <div className="output">
	        <div className="outputText"><span dangerouslySetInnerHTML={this.rawMarkup()} /></div>
	    </div>
	      )
	  }

}

export default HTMLOutputComponent;