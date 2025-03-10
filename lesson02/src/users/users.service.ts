import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

     private users= [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
     ]


    //   enum Role {                //could have also done with some fixes
    //     Intern='INTERN',
    //     Engineer="ENGINEER",
    //     Admin='ADMIN'
    //  }
     findall(role?:'INTERN' | 'ENGINEER'| 'ADMIN')  //does strict type checking
     {

           if(role)
           {
              return this.users.filter((user)=>user.role===role);

           }
           return this.users;
     }
     findOne(id:number)
     {
          const user= this.users.find((user)=> user.id===id);

            return user;
          
     }

     createUser(user:{name:string,email:string, role:'INTERN' | 'ENGINEER'| 'ADMIN'})
     {

        const size= this.users.length;
        const newUser= {
            id:size+1,
            ...user
        }

        this.users.push(newUser);
        return newUser;
     }

     Update(id: number, updateUser:{name?:string,email?:string, role?:'INTERN' | 'ENGINEER'| 'ADMIN'})
     {
          this.users=this.users.map((user)=>{
               
               if(user.id===id)
               {
                  return {...user,...updateUser}
               }
               return user;
          });
          const user= this.findOne(id);
          return user;
     }

     deleteuser(id:number)
     {    
          this.users= this.users.filter((user)=>user.id!==id);
     }

}
