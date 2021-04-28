import React, {useEffect, useState} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import './plotList.css'

const PlotList = () => {
    const [plotList, setPlotList] = useState([])

    useEffect(() => {

    }, []);

    return (
        <div className={"table-box"}>
            <div className={"table-container"}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Area</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                        <th>State</th>
                        <th>Availability</th>
                        <th>Num of Workers</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        plotList.map((plot, index)=> (
                            <tr>
                                <td>index</td>
                                <td>plot.area</td>
                                <td>plot.lat</td>
                                <td>plot.lng</td>
                                <td>plot.state</td>
                                <td>{ plot.available ?'Available':'Unavailable'}</td>
                                <td>plot.numWorkers</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PlotList;
