import React, { useState, useEffect } from 'react';

function MoveList(){

    return (
        <div className="move-list">
            <div className="move-body move-screen screen">
                <div className="move-left">
                    <div className="move-name">mega-punch</div>
                    <div className="move-stat">
                        Accuracy......85
                    </div>
                    <div className="move-stat">
                        Power.........80
                    </div>
                    <div className="move-stat">
                        PP............20
                    </div>
                </div>
                <div className="move-right">
                    <div className="move-type">Type: normal</div>
                    <div className="move-learn">Learn: Lvl 0</div>
                </div>
            </div>
            <div className="move-controls">
                <div className="move-arrow"><i className="fas fa-caret-up"></i></div>
                <div className="move-arrow"><i className="fas fa-caret-down"></i></div>
            </div>
        </div>
    );

}

export default MoveList;
