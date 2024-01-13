import { ChangeEvent } from "react";

export interface IToDoItem{
    id:number;
    name:string;
    completed:boolean;
    deleted:boolean;
}

export interface IToDoState{
    items:IToDoItem[];
}

export interface IToDoReducerAction{
    type:string,
    payload:string|undefined
}

export interface INewToDoItemProps{
    setItemName:(itemName:string|undefined)=>void;
}


export interface IToDoListProps{
    setSelectedIds(arg0: number[]): unknown;
    onComplete: ()=>void;
    onDelete: ()=>void;
    source:IToDoItem[];
}

export interface IButtonsSetProps{
    onComplete:()=>void;
    onDelete:()=>void;
}

export interface IToDoItemProps{
    id:number
    itemChecked:(event: ChangeEvent<HTMLInputElement>)=>void;
    name:string;
    completed:boolean;
    deleted:boolean;
}
