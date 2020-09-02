import React from 'react';


const search = (props) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputSearch" className="lead font-weight-bold">Movie title</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                                </div>
                                <input id="inputSearch" className="form-control" onChange={props.changeSearchHandler}type="text"></input>
                            </div>
                        </div>
                        <p className="mt-3 text-danger lead font-weight-bold">{props.error}</p>
                    </form>
                </div>
            </div>
        </div>    
    );
} 

export default search;