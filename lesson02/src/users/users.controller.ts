import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { UsersService } from './users.service';
@Controller('users')  // same as /users
export class UsersController {
    
    constructor (private readonly userService: UsersService){};

    @Get()  //  get/users  or users?role=value
    findall(@Query('role') role?:'INTERN' | 'ENGINEER'| 'ADMIN')
    {
        return this.userService.findall(role);
    }

    @Get(':id')  //get  /users/id
    findOne(@Param('id') id: string)
    {
        const user=this.userService.findOne(+id);   // +id will convert the string id into num id
        
        if(!user)
        {
            return { message:"user not found!"}
        }
        return user;
    }


    @Post()  //Post  /users/id
    createUser(@Body() user:{name:string,email:string, role:'INTERN' | 'ENGINEER'| 'ADMIN'})
    {
        return this.userService.createUser(user);
    }

    @Patch(':id')  //Patch  /users/id
    Update(@Param('id') id: string, @Body() userUpdate: {name?:string,email?:string, role?:'INTERN' | 'ENGINEER'| 'ADMIN'})
    {   

        return this.userService.Update(+id,userUpdate);
        
    }

    @Delete(':id')  //Delete  /users/:id
    deleteuser(@Param('id') id: string)
    {   
         this.userService.deleteuser(+id);
         return {message:"user deleted successfully"}
    }

    
    
}
