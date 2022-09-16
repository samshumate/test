import { useEffect, useState, Fragment } from "react";
import "../App.css";
export const Reps = () => {
    const [data, setData] = useState("");
    const [reps, setReps] = useState("");
    useEffect(() => {
        const url = window.location.pathname.includes("senators") ? window.location.pathname + "s" : window.location.pathname;
        fetch(`http://localhost:9000${url}`)
            .then(res => res.text())
            .then(res => setData(res));
    },[setData]);
    useEffect(()=>{
        if (data.length) {
        const stringify = JSON.stringify(data);
        const parse = JSON.parse(stringify);
        const obj = JSON.parse(parse);
        setReps(obj);
        }
    }, [data, setReps]);
        return (
            <div className="reps-config">
                {reps.length ? reps.map(r => {
                    return (
                    <Fragment>
                        <p>Name: {r.name}</p>
                        <p>Party: {r.party}</p>
                        <p>State: {r.state}</p>
                        {r.district ? <p>District: {r.district}</p> : null}
                        <p>Contact: {r.phone}</p>
                        <p>Office: {r.office}</p>
                        <p>Site: <a href={r.link}>{r.link}</a></p>
                        <p>______________________________________</p>
                    </Fragment>
                    )
                    }): <p>no results</p>
                }
                <div>
                    <p>End of results</p>
                </div>
            </div>
        )
}