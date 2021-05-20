import React, { useState, useEffect } from 'react';


function PokedexControls() {
    return (
        <div className="panel-row controls">
            <div className="button"></div>
            <div>
                <input type="number" className="screen num-input" placeholder="9" />
                <div className="submit"></div>
            </div>
            <div className="button"></div>
        </div>
    );
}

export default PokedexControls;
