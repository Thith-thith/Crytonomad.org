import React, { Component } from 'react'

export class Thumbnail extends Component {
    render() {
        return (
            // <div​>
                <div className="container">
                    <div className="thumbnail">
                        <div className="row">
                            <div className="col-md-8">
                                <a href="#">
                                    <img className="img-responsive" src="/img/H.png" width={"100%"}/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <div className="caption">
                                    <a href="#">
                                        <h2 className="h2">Helium Launches Blockchain-Enabled IoT Device, Raises $15 Million</h2>
                                    </a>
                                    <p className="para">Helium, a San Francisco-headquartered startup using blockchain technology to facilitate wireless connections, 
                                        announced the launch of its Helium Hotspot product along with the closure of a $15 million Series C fundraising round.
                                        Some big-name venture capital firms partook in the $15 million raise. 
                                        This included Kyle Samani<span id="dots">...</span></p>
                                    <p className="caption-footer">
                                        <a href="#" className="btn"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Like it</a>
                                        <a href="#" className="btn"><span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span> Share it</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}

export default Thumbnail;
