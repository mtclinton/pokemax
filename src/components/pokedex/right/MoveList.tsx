import React, { useState, useEffect } from 'react';
import {Move, VersionGroupDetails} from "../../../types";

interface statsProp {
    stat: string
    val: number|string
    sep: string
    len: number
}

function PadStats(props: statsProp) {
    // val = val || "xx";
    let output = `
    ${props.stat.toString()}${props.sep.repeat(props.len - (props.val.toString().length + props.stat.toString().length))}${props.val.toString()}`;

    return <span>{output}</span>;
}

function MovesLoading() {
    return (
        <div className="move-body move-screen screen">
            <div className="move-left">
                <div className="move-name" style={{ textTransform: "none" }}>
                    xxxxx xxxxx
                </div>
                <div className="move-stat">
                    <PadStats stat={"Accuracy"} val={"xx"}  sep={"."} len={16} />
                </div>
                <div className="move-stat">
                    <PadStats stat={"Power"} val={"xx"}  sep={"."} len={16} />
                </div>
                <div className="move-stat">
                    <PadStats stat={"PP"} val={"xx"}  sep={"."} len={16} />
                </div>
            </div>
            <div className="move-right">
                <div className="move-type">Type: xxxxx</div>
                {/* <div className="move-status">Status Effect: {status}</div> */}
                <div className="move-learn">Learn: Lvl xx</div>
            </div>
        </div>
    );
}

interface MoveAPIData {
    name: string
    accuracy: number
    power: number
    pp: number
    type: MoveAPIDataType
}

interface MoveAPIDataType {
    name: string
}

interface MoveEntryProp {
    name: string
    accuracy: number
    power: number
    pp: number
    type: MoveAPIDataType
    lvl: number
}

function MoveEntry(props: MoveEntryProp) {
    console.log(props)
    const name = props.name;
    const acc = props.accuracy;
    const pow = props.power;
    const pp = props.pp;
    const type = props.type.name;
    //   const status = "" || "---";˝
    const lvl = props.lvl;
    // console.log("move ", move);
    return (
        <div className="move-body move-screen screen">
            <div className="move-left">
                <div className="move-name">{name}</div>
                <PadStats stat={"Accuracy"} val={acc}  sep={"."} len={16} />
                <PadStats stat={"Power"} val={pow}  sep={"."} len={16} />
                <PadStats stat={"PP"} val={pp}  sep={"."} len={16} />
            </div>
            <div className="move-right">
                <div className="move-type">Type: {type}</div>
                {/* <div className="move-status">Status Effect: {status}</div> */}
                <div className="move-learn">Learn: Lvl {lvl}</div>
            </div>
        </div>
    );
}

interface movesProp {
    moves: (Move)[]
}

function MoveList(props: movesProp) {

    let cm: MoveAPIData = {
        name: "",
        accuracy:0,
        power: 0,
        pp: 0,
        type: {name:""},
    }
    const moves = props.moves;
    const [index, setIndex] = useState(0);
    const [currentMove, setCurrentMove] = useState(cm);
    const [loading, setLoading] = useState(true);
    const [level, setLevel] = useState(0);

    async function getMove(url: string) {
        return new Promise<MoveAPIData>((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    useEffect(() => {
        async function fetchMove() {
            let response : MoveAPIData;
            response = await getMove(moves[index].move.url)
            setCurrentMove(response);
            // console.log(moves[index].move.url)
            // console.log(response.results)

            setLoading(false);
            if(
                moves[index] && moves[index].version_group_details &&
                moves[index].version_group_details.length > 0 &&
                typeof moves[index].version_group_details !== 'undefined'
            ){
                setLevel(moves[index].version_group_details[0].level_learned_at);
            }

        }

        if(moves && moves.length){
            console.log('calling move useeffect');

            fetchMove();

        }
    }, [moves,index])
    //
    // // componentDidUpdate(prevProps) {
    // //     // Typical usage (don't forget to compare props):
    // //     if (this.props.moves !== prevProps.moves) {
    // //         this.setState({ index: 0 }, this.loadMoves);
    // //     }
    // // }
    //
    function nextMove() {
        const nextIndex = Math.min(index + 1, props.moves.length - 1);
        setIndex(nextIndex);
        if(
            props.moves[nextIndex] && props.moves[nextIndex].version_group_details &&
            props.moves[nextIndex].version_group_details.length &&
            props.moves[nextIndex].version_group_details[0].level_learned_at
        ){
            setLevel(props.moves[nextIndex].version_group_details[0].level_learned_at);
        }

    }

    function prevMove() {
        const nextIndex = Math.max(index - 1, 0);

        setIndex(nextIndex);
        if(
            props.moves[nextIndex] && props.moves[nextIndex].version_group_details &&
            props.moves[nextIndex].version_group_details.length &&
            props.moves[nextIndex].version_group_details[0].level_learned_at
        ){
            setLevel(props.moves[nextIndex].version_group_details[0].level_learned_at);
        }
    }


    return (
        <div className="move-list">
            {loading ? <MovesLoading /> : <MoveEntry name={currentMove.name} accuracy={currentMove.accuracy}
                                                     power={currentMove.power} pp={currentMove.pp} type={currentMove.type} lvl={level} />}
            <div className="move-controls">
                <div className="move-arrow" onClick={prevMove}>
                    <i className="fas fa-caret-up" />
                </div>
                <div className="move-arrow" onClick={nextMove}>
                    <i className="fas fa-caret-down" />
                </div>
            </div>
        </div>
    );
}

export default MoveList;
