import React, {useEffect, useState} from 'react';
import './Vote.css'

function Vote() {
    const [voted, setVoted] = useState(false)

    const [votes, setVotes] = useState(
            () => {
                const votes = localStorage.getItem('votes')
                if (votes)
                    return JSON.parse(votes)
                else
                    return {
                        f: 0, s: 0, t: 0
                    }
            }
        )
    ;

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes])

    const [checkboxes, setCheckboxes] = useState({
        first: false,
        second: false,
        third: false
    });

    function vote(options: any) {
        votes.f += Number(checkboxes.first);
        votes.s += Number(checkboxes.second);
        votes.t += Number(checkboxes.third);
        localStorage.setItem('votes', JSON.stringify(votes));
        setVoted(true);
    }

    function log(o: any) {
        switch (o.target.id) {
            case 'flexCheckDefault':
                setCheckboxes({...checkboxes, first: !checkboxes.first});
                break;
            case 'flexCheckDefault2':
                setCheckboxes({...checkboxes, second: !checkboxes.second});
                break;
            case 'flexCheckDefault3':
                setCheckboxes({...checkboxes, third: !checkboxes.third});
                break;
        }
    }

    return (

        <div className="bg-body-tertiary p-3 col-md-4 align-self-center">
            {
                !voted ? (
                    <div className="px-4">
                        {/*<h4 className="fw-bold text-center mt-3"></h4>*/}
                        <form className="py-4" action="src/Main/Main/Vote">
                            <p className="fw-bold">Вам бы только</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={log}
                                       checked={checkboxes.first} id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Хиханьки
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={log}
                                       checked={checkboxes.second} id="flexCheckDefault2"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                    Хаханьки
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={log}
                                       checked={checkboxes.third} id="flexCheckDefault3"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault3">
                                    Хиханьки да хаханьки
                                </label>
                            </div>
                        </form>
                        <div className="card-footer text-center">
                            <button type="button" onClick={vote} className="btn btn-primary">Проголосовать!</button>
                        </div>
                    </div>) : (
                    <div>
                        <h2>Результаты:</h2>
                        <p>Хиханьки: {votes.f}</p>
                        <p>Хаханьки: {votes.s}</p>
                        <p>Хиханьки да хаханьки: {votes.t}</p>
                    </div>
                )
            }
        </div>
    );
}

export default Vote;
