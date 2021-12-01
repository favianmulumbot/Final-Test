import React from 'react';
import { Link } from 'react-router-dom';

const ChannelItems = (props) =>{
    const imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"

    return(
        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={imageUrl+props.tv.backdrop_path} alt={props.tv.name} />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.tv.name}</h5>
                                    {props.tv.first_air_date}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/details">View detail</Link></div>
                            </div>
                        </div>
                    </div>
    );
}

export default ChannelItems;