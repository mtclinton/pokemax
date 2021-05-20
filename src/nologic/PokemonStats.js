import React, { useState, useEffect } from 'react';

function padStats(stat, val, sep, len) {
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
    return output;
}

function StatLine(props) {
    return (
        <div className="stat-line">
            {padStats(props.name, props.value, ".", 20)}
            {/* <span>{props.name}</span>
      {".".repeat(20 - props.name.length)}
      <span>{props.value}</span> */}
        </div>
    );
}

function PokemonStats(props) {

    let stats;

    if (props.stats) {
        stats = props.stats;
    } else {
        stats = [];
    }

    return (
        <div className="screen stats">
            {stats.map(s => {
                const name = s.stat.name;
                const value = s.base_stat;

                return <StatLine name={name} value={value} key={name} />;
            })}
        </div>
    );
}

export default PokemonStats;