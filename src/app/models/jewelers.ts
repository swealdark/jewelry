export interface JewelersModel{
    id:number;
    title:string;
    completed:boolean;
    editing?:boolean;
}

export type FilterType = 'all' | 'active' | 'completed';