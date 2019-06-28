import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import template from "./Template";

    export default function content(props) {
        const {id,img, header, para} = props.contentvalue;
            return (
                <React.Fragment>
                    <div key={id} className=" col-sm-6 col-md-4">
                        <div  className="card-deck">
                            <div className="card">
                                <Link to="/">
                                    <img className="card-img-top" src={img} alt="Card image cap"/>
                                </Link>
                                <div  id="card-content" className="card-body">
                                    <a className="fix" href="Template">
                                        <h3 className="card-title">{header.substring(0,40)}</h3>
                                    </a>    
                                    <p className="card-text">{para.substring(0,200)}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment> 
            )     
    }  
         
    

//----------------------------------------------------------------------------------------------------------------- 


    
            {/* <div class="card-deck">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                </div>
        
    )
} */}



// export class Content extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <div id="grid" className="container">
//                     <div className="row">
//                         <div className="card-deck col-md-12">
//                             <div className="card ">
//                                 <a href="#">
//                                     <img src="/img/1.jpg" className="card-img-top" alt="..."/>
//                                 </a>
//                                 <div className="card-body">
//                                     <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/2.jpeg" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                     <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/3.jpeg" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="card-deck col-md-12">
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/4.png" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/5.jpeg" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/6.jpeg" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="card-deck col-md-12">
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/7.jpeg" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/8.jpeg" className="card-img-top" alt="..."/>
//                                 </a>
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <a href="#">
//                                     <img src="/img/9.jpeg" className="card-img-top" alt="..."/>
//                                 </a>    
//                                 <div className="card-body">
//                                 <a href="#"><h5 className="card-title">Card title</h5></a>
//                                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-muted">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>    
//             </React.Fragment>
//         )
//     }
// }

// export default Content;

