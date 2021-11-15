import React, { useState, useEffect } from 'react';

function SpriteControls() {
    return (
        <div className="sprite-controls">
            <div className="sprite-control sprite-controls-gender "><i className="fas fa-venus"></i></div>
            <div className="sprite-control sprite-controls-shiny "><span>shiny</span></div>
            <div className="sprite-control sprite-controls-rotate "><i className="fas fa-undo"></i></div>
        </div>
    );
}

export default SpriteControls;
