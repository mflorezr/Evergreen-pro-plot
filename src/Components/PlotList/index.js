import React, {useEffect, useState} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import axios from 'axios';
import './plotList.css'

const PlotList = () => {
    const [plotList, setPlotList] = useState([])

    useEffect(() => {
        axios.get('http://ec2-18-212-189-186.compute-1.amazonaws.com/plot')
            .then((res) => {
                let list = res.data;
                setPlotList(list);
            });
    }, []);

    return (
        <div className={"table-box"}>
            <h2>Plot List</h2>
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
                            <tr key={index}>
                                <td>{plot.id}</td>
                                <td>{plot.area}</td>
                                <td>{plot.lat}</td>
                                <td>{plot.lng}</td>
                                <td>{plot.state}</td>
                                <td>{ plot.available ?'Available':'Unavailable'}</td>
                                <td>{plot.num_workers}</td>
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
