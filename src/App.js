import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Row, Col, Grid, Thumbnail} from 'react-bootstrap';

class App extends Component {

    dogPhotos = [];
    data = [];

    /**
     *
     */
     componentDidMount() {

        this.fetchDogs();

    }

    /**
     *
     */
     fetchDogs() {

        const photoCount = 8;

        for (let index = 0; index < photoCount; index++) {

            fetch("https://random.dog/woof.json")
                .then(res => res.json())
                .then(
                    (result) => {

                        // check if png,
                        const resultUrl = result.url;
                        this.dogPhotos.push( resultUrl );

                        this.setState({
                            isLoaded: true
                        });
                    },
                    (error) => {
                        this.setState({
                            error,
                            isLoaded: true
                        });
                    }
                );
            // check if already 8
        }
    }
  render() {
    return (


        <div className="App">
            <Grid>
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <Button bsStyle="success" bsSize="large" onClick={this.fetchDogs}>Fetch More Dog Photos!</Button>
                </header>


                <Row className="show-grid">

                    <Col xs={12} md={3}>


                        <Thumbnail href={this.dogPhotos[0]} src={this.dogPhotos[0]} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[1]} src={this.dogPhotos[1]} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[2]} src={this.dogPhotos[2]} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[3]} src={this.dogPhotos[3]} />
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[4]} src={this.dogPhotos[4]} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[5]} src={this.dogPhotos[5]} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[6]} src={this.dogPhotos[6]} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail href={this.dogPhotos[7]} src={this.dogPhotos[7]} />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default App;
