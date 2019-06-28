import React, { Component } from 'react'
import ContentShow from "./content"
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
                header: "Swiss Telecom Is Bringing Crypto Collectables to TV",
                para: `Telecommunications giant Swisscom has unveiled a new approach
                to using non-fungible tokens (NFTs). The product, called Noow,
                will display art that you own, and you and the artist will know how
                any copies of his or her works have been distributed. The app comes
                from a Zug-based, Dloop, which formed out of Swisscom’s accelerator, Kickbox. 
                Greater Zurich Area News reported:`,

            },
            {   
                id: 3,
                img: "./img/3.jpeg",
                header: "Istanbul Upgrade: 28 Ethereum Improvement Proposals Under Consideration",
                para: `Ethereum’s developers have submitted 28 Ethereum Improvement Proposals (EIPs),
                which include recommended codebase modifications that may be`,

            },
            {
                id: 4,
                img: "./img/4.png",
                header: "What is Directed Acyclic Graph (DAG)?",
                para: `If we consider the theory of a graph, a graph is just a series of vertexes connected by edges. If the edges are connected such that each`,

            },
            {
                id:5,
                img: "./img/5.jpeg",
                header: "What is Tokenization?",
                para: `Tokenization refers to the process of signing a unique identification symbol to sensitive data without compromising any essential information of the data or its security.`,

            },
            {
                id:6,
                img: "./img/6.jpeg",
                header: "Tokenization is the future store of Value?",
                para: `Tokenization allows for the conversion of the rights to assets with economic value into a digital token without compromising the data or`,

            },
            {
                id:7,
                img: "./img/7.jpeg",
                header: "Crypto Currency will never make you rich, Knowledge about it does!",
                para: '"When you combine ignorance and leverage you get some pretty interesting results". Warren Buffett. Cryptocurrency is leverage but if you ',

            },
            {
                id:8,
                img: "./img/8.jpeg",
                header: "Go Digital or Go Home: Why the world needs digitalization",
                para: `Remember the olden days when people used to communicate with letters. They would send letters and wait for days or even months to get`,

            },
            {
                id:9,
                img: "./img/9.jpeg",
                header: "Why the world ne   ed blockchain?",
                para: `Do we need the blockchain technology? If yes, why? These are some of the questions that have lingered in our minds as long as the topic of `,

            }
        ]
    }
    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        {this.state.conents.map(property => (
                            <ContentShow contentvalue={property} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
