import React, { useState, useEffect } from 'react';

function padStats(stat, val, sep, len) {
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
    return output;
}

function MovesLoading() {
    return (
        <div className="move-body move-screen screen">
            <div className="move-left">
                <div className="move-name" style={{ textTransform: "none" }}>
                    xxxxx xxxxx
                </div>
                <div className="move-stat">{padStats("Accuracy", "xx", ".", 16)}</div>
                <div className="move-stat">{padStats("Power", "xx", ".", 16)}</div>
                <div className="move-stat">{padStats("PP", "xx", ".", 16)}</div>
            </div>
            <div className="move-right">
                <div className="move-type">Type: xxxxx</div>
                {/* <div className="move-status">Status Effect: {status}</div> */}
                <div className="move-learn">Learn: Lvl xx</div>
            </div>
        </div>
    );
}

function MoveEntry(props) {
    console.log(props)
    const move = props.move;
    const name = move.name || move.names.filter(m => m.language.name === "en")[0].name;
    const acc = move.accuracy;
    const pow = move.power;
    const pp = move.pp;
    const type = move.type.name;
    //   const status = "" || "---";˝
    const lvl = props.lvl;
    // console.log("move ", move);
    return (
        <div className="move-body move-screen screen">
            <div className="move-left">
                <div className="move-name">{name}</div>
                <div className="move-stat">{padStats("Accuracy", acc, ".", 16)}</div>
                <div className="move-stat">{padStats("Power", pow, ".", 16)}</div>
                <div className="move-stat">{padStats("PP", pp, ".", 16)}</div>
            </div>
            <div className="move-right">
                <div className="move-type">Type: {type}</div>
                {/* <div className="move-status">Status Effect: {status}</div> */}
                <div className="move-learn">Learn: Lvl {lvl}</div>
            </div>
        </div>
    );
}

function MoveList(props) {

    const moves = props.moves;
    const [index, setIndex] = useState(0);
    const [currentMove, setCurrentMove] = useState({});
    const [loading, setLoading] = useState(true);
    const [level, setLevel] = useState(0);

    async function getMove(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    useEffect(() => {
        async function fetchMove() {
            let response = await getMove(moves[index].move.url)
            setCurrentMove(response);
            // console.log(moves[index].move.url)
            // console.log(response.results)

            setLoading(false);
            if(
                moves[index] && moves[index].version_group_details &&
                moves[index].version_group_details.length &&
                moves[index].version_group_details[0].level_learned_at
            ){
                setLevel(moves[index].version_group_details[0].level_learned_at);
            }

        }

        if(moves && moves.length){
            console.log('calling useeffect');

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
            {loading ? <MovesLoading /> : <MoveEntry move={currentMove} lvl={level} />}
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
