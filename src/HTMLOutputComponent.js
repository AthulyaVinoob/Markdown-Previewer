import React, {Component} from 'react';
import marked from 'marked';

class HTMLOutputComponent extends Component{
 
 rawMarkup() {
    var rawMarkup = marked(this.props.markdown.toString(), {sanitize: true});
    marked.setOptions({
  breaks: true
})
    return { __html: rawMarkup };
  }
	render() {
	    return (
	    <div className="output">
	        <div id="preview" dangerouslySetInnerHTML={this.rawMarkup()} />
	    </div>
	      )
	  }

}

export default HTMLOutputComponent;