import React, { useState, useEffect } from 'react';
import {Stat, Stats} from "../../../types";

function padStats(stat: string, val: number, sep: string, len: number) {
    let output;
    if (!val){
        let x = "xx";
        output = `
    ${stat.toString()}${sep.repeat(len - (x.toString().length + stat.toString().length))}${x.toString()}`;
    } else {

        output = `
    ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
    }
    return output;
}

function StatLine(props: StatLineProp) {
    return (
        <div className="stat-line">
            {padStats(props.name, props.value, ".", 20)}
            {/* <span>{props.name}</span>
      {".".repeat(20 - props.name.length)}
      <span>{props.value}</span> */}
        </div>
    );
}

interface statsProp {
    stats: []
}

interface StatLineProp {
    name: string
    value: number
    key: string
}

function PokemonStats(props: statsProp ) {

    return (
        <div className="screen stats">
            {props.stats.map((s: Stats) => {
                const name = s.stat.name;
                const value = s.base_stat;

                return <StatLine name={name} value={value} key={name} />;
            })}


        </div>
    );
}

export default PokemonStats;