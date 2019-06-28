import React, { Component } from 'react'
import ContentNew from "./content-new";
export class Content extends Component {
    state = {
        conents: [
            {
                id: 1,
                img: "./img/1.jpg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 2,
                img: "./img/2.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 3,
                img: "./img/3.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 4,
                img: "./img/4.png",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 5,
                img: "./img/5.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 6,
                img: "./img/6.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 7,
                img: "./img/7.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 8,
                img: "./img/8.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 9,
                img: "./img/9.jpeg",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            },
            {
                id: 10,
                img: "./img/10.png",
                header: "BCH May Have Sustained Double Spend",
                para: `Bitcoin Cash (BCH) appears to have experienced a two-block
                 chain reorganization resulting in a 3,392 BCH double spend. 
                 The claim was made in a report released by the research arm of
                 cryptocurrency derivatives exchange BitMex on May 24. Per the report,
                 the recent BCH hard fork experienced three interrelated issues.`,

            }
        ]
    }
    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        {this.state.conents.map(property => (
                            <ContentNew contentnew={property}></ContentNew>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Content              