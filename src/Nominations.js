import React from 'react';

const nominations = (props) => {
    const state = {...props.state};
    let displayMessage = state.nominationsLimit ? `You are not able nominate more films` : null;

    let films = state.nominations.map((film, index) => {
        return (
            <li className="d-table-row m-4" key={index}>
                <p className="d-table-cell">{film.Title} ({film.Year})</p>
                <button className="d-table-cell btn btn-warning" onClick={() => props.nominationsDeleteHandler(index)}>Remove</button>
            </li>
        );
    })

    return (
        <div className="col-md-6">
            <div className="card mt-4">
                <div className="card-body">
                    <p className="lead font-weight-bold">Nominations</p>
                    <p className="text-warning lead font-weight-bold">{displayMessage}</p>
                    <ul className="d-table">
                        {films}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default nominations;