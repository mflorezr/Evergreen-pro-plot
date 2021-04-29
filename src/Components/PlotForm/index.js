import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import './plotForm.css'
import axios from "axios";

const PlotForm = () => {
    const [newPlot, setNewPlot] = useState({});

    const handleInputChange = (event) => {
        let eventData = event;
        if(eventData.target.type === "checkbox"){
            setNewPlot({
                ...newPlot,
                [event.target.name]: event.target.checked
            });
        } else if(eventData.target.type === "number"){
            setNewPlot({
                ...newPlot,
                [event.target.name]: Number(event.target.value)
            })
        } else {
            setNewPlot({
                ...newPlot,
                [event.target.name] : event.target.value
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://ec2-18-212-189-186.compute-1.amazonaws.com/plot',
            newPlot,
            { headers: {
                'Content-Type': 'application/json'
            }})
            .then((res) => {
                console.log(res);
                document.getElementById("create-plot-form").reset();
                setNewPlot({});
            });
        console.log(newPlot);
    }

    return (
        <div className={"form-box"}>
            <div className={"form-container"}>
                <h2 className={"form-title"}> Create a new Plot </h2>
                <Form onSubmit={handleSubmit} id="create-plot-form">
                    <Form.Group className={"form-group"} controlId="formBasicArea" >
                        <Form.Label className={"form-label"}> Area </Form.Label>
                        <Form.Control type="number" step="any" placeholder="Enter area" name={"area"} onChange={handleInputChange} />
                    </Form.Group>
                    <div className={"form-location"}>
                        <Form.Group className={"form-group"} controlId="formBasicLat" >
                            <Form.Label> Latitude </Form.Label>
                            <Form.Control type="number" step="any"  placeholder="Enter Latitude" name={"lat"} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className={"form-group"} controlId="formBasicLong" >
                            <Form.Label> Longitude </Form.Label>
                            <Form.Control type="number" step="any"  placeholder="Enter Longitude" name={"lng"} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className={"form-group"} controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State" name={"state"} onChange={handleInputChange} />
                        </Form.Group>
                    </div>
                    <Form.Group className={"form-group"} controlId="formBasicWorkers">
                        <Form.Label>Num. of Workers</Form.Label>
                        <Form.Control type="number" placeholder="Enter number of workers" name={"num_workers"} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group  className={"form-group"} controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Available" name={"available"} onChange={handleInputChange}/>
                    </Form.Group>
                    <div className={"form-submit-button"}>
                        <Button  variant="primary" type="submit">
                          Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>

    );
};

export default PlotForm;
