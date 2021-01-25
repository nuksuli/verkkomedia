import React from 'react';
import './middlebar.css';
import NewsCard from './NewsCard';

const Middlebar = ({ data }) => {

    const Data = () => {
        return (

            data
                .slice(0)
                .reverse()
                .map((news) => (
                    <NewsCard
                        key={news.id}
                        id={news.id}
                        title={news.header}
                        ingress={news.lead}
                        image={news.image}
                    />
                ))
        )
    }
    return (
        <div className="middlebar">
            <Data />
        </div>
    );
};

export default Middlebar;
