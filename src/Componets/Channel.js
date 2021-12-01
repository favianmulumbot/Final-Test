import React, { useState, useEffect } from 'react';
import ChannelItems from './ChannelItems';

const Channel = () => {
    const [Channel, setChannel] = useState ([]);
    const [text, setText] = useState('');

    useEffect (() => {
        //hit TMBD discover get TV endpoint to get TV data
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=32190da741ad24c16ab8bf199101a528&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0')
         .then(response => response.json())
         .then(data => setChannel(data.results));

       
         // eslint-disable-next-time
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // hit TMBD rest API endpoint to search for a TV
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=32190da741ad24c16ab8bf199101a528&language=en-US&page=1&query=${text}&include_adult=false`)
        .then(response => response.json())
        .then(data => setChannel(data.results));

        setText('');
    }

    const handleChange = (e) => {setText(e.target.value)}

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search TV Show Channel</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" onChange={handleChange} value={text} />
                    </form>

                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

                   { Channel.map (tv => <ChannelItems key={tv.id} tv={tv} />) }

                </div>
            </div>
        </section>
    );
}

export default Channel;