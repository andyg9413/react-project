import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {IUser} from "../interfaces/user.interface";

const Home = (): JSX.Element => {
    // let [age, setAge] = useState<number>(user.age);
    // let [status, setStatus] = useState<number>(0);
    // const [homeLink, setHomeLink] = useState<string>(initialLinkName);
    // const onMakeOlder = (): void => {
    //     setAge(age += 3)
    // }
    // const onChangeLink = (): void => {
    //     changeLink(homeLink)
    // }
    // const onHandleChange = (event: ChangeEvent<HTMLInputElement>): string => {
    //     setHomeLink(event.target.value);
    //     return event.target.value
    // }
    // setTimeout(() => {
    //     setStatus(1)
    // }, 3000)

    // return (
    //     <div>
    //         <p>In a new Component!</p>
    //         <p>Your name is {user.name}, your age is {age}</p>
    //         <p>Status: {status}</p>
    //         <hr/>
    //         <button onClick={onMakeOlder} className="btn btn-primary">Make me older!</button>
    //         <hr/>
    //         <button className="btn btn-primary" onClick={greet}>Greet</button>
    //         <hr/>
    //         <input type="text" value={homeLink} onChange={(event) => onHandleChange(event)}/>
    //         <button className="btn btn-primary" onClick={onChangeLink}>Change Header Link</button>
    //     </div>
    // );

    return (
        <div>
            <h3>Home</h3>
        </div>
    )
};

export default Home;
