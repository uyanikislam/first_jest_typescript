import{Request, Response} from 'express';
export default function getAllUsers(request: Request, response: Response ){
    const users = [
        {
            name:'ali',
            age:25
        },
        {
            name:'sevda',
            age:20
        }
    ];

    response.statusCode=200;
    response.send({users});
}