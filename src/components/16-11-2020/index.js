import React from 'react';
import './index.scss';

const index = () => {
    return (
        <div>
                <div className="horizental-icon-bar">
                    <a className="active" href="#Link"><i className="fa fa-home"></i></a> 
                    <a href="#Link"><i className="fa fa-search"></i></a> 
                    <a href="#Link"><i className="fa fa-envelope"></i></a> 
                    <a href="#Link"><i className="fa fa-globe"></i></a>
                    <a href="#Link"><i className="fa fa-trash"></i></a>  
                </div> 

                
                <div class="verticle-icon-bar">
                    <a href="#Link"><i class="fa fa-home"></i></a> 
                    <a href="#Link"><i class="fa fa-search"></i></a> 
                    <a href="#Link"><i class="fa fa-envelope"></i></a> 
                    <a href="#Link"><i class="fa fa-globe"></i></a>
                    <a class="active" href="#Link"><i class="fa fa-trash"></i></a> 
                </div>
        </div>
    )
}

export default index
