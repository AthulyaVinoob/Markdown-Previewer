import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'


import HTMLOutputComponent from './HTMLOutputComponent'
class App extends Component {

constructor(props){
  super(props);
  this.state = {
  markdown :''
}
this.updateMarkdown =this.updateMarkdown.bind(this);
}

updateMarkdown(markdown){
this.setState({
  markdown : markdown
})
}
  render(){
    return (
          <div id="App">
          <h1 className="text-center">Markdown Previewer</h1>
            <Container>
            <Row>
              <Col>
              <Card border="light">
                <Card.Header>MarkDown Input</Card.Header>
                <Card.Body>
                <Card.Text>
                    <FormGroup controlId="formTextArea">
                      <FormControl  style = {{height:"60vh"}}
                                    as="textarea"
                                    placeholder="Enter Markdown" 
                                    value={this.state.markdown}
                                    onChange={(event) => this.updateMarkdown(event.target.value)}
                      />
                      </FormGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
                <Card border="dark" >
                  <Card.Header>Output</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    <HTMLOutputComponent markdown={this.state.markdown}/>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
            </Container>
            </div>
      );  
  }  
}


export default App;
