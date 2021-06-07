import {IState} from "./state.interface";
import React from "react";

export interface IProps {
    people: IState['people']
    setPeople: React.Dispatch<React.SetStateAction<IState['people']>>
}