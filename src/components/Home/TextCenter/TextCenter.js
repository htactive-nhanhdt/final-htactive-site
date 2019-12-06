import React from 'react';

const TextCenter = ({head, description}) => {
    return (
        <React.Fragment>
            <h1 className="text-center">{head}</h1>
            <div className="separator"></div>
            <p className="lead text-center">{description}</p>
        </React.Fragment>
    );
};

export default TextCenter;