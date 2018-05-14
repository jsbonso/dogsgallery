
import React, { Component } from 'react';

import { Button, Row, Col, Grid, Thumbnail} from 'react-bootstrap';
import logo from './../logo.svg';

class DogGallery extends Component{

    dogPhotos = [];

    /**
     *
     */
    componentDidMount() {

        this.fetchDogs();

    }

    /**
     * Fetch Dogs
     */
    fetchDogs() {

        let photoCount = 20;

        for (let index = 0; index < photoCount; index++) {

            fetch("https://random.dog/woof.json")
                .then(res => res.json())
                .then(
                    (result) => {

                        var dogUrl = result.url;
                        var dogType = dogUrl.split('.').pop();
                        var isValidType = ((dogType.toLowerCase() !== 'mp4' && dogType.toLowerCase() !== 'psd'));
                        this.addDog(isValidType, dogUrl, dogType);

                    },
                    (error) => {
                        this.setState({
                            error,
                            isLoaded: true
                        });
                    }
                ).catch(error => console.log('Error:', error))
        }
    }

    addDog(isValidType, url, type){
        if (isValidType) {
            this.dogPhotos.push(url);
            this.setState({
                isLoaded: true,
                doggos: this.dogPhotos
            });
        }
    }


    render(){

        return (

            <Grid>

                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <Button bsStyle="success"
                            bsSize="large"
                            onClick={this.fetchDogs.bind(this)}>
                        Fetch More Dog Photos!
                    </Button>
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

        );
    }
}

export default DogGallery;