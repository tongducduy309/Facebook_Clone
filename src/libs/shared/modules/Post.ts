enum Mode_Post{
    PUBLIC = 0,
    PRIVATE = 1,
}
export interface PostRes{
    id?:string;
    images?:string[];
    content?:string;
    avatar?:string;
    reactions?:number;
    comments?:number;
    shares?:number;
    mode?:Mode_Post|0;
    updatedAt?:string;
    createdAt?:string;
}