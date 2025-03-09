import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';


@Controller('users')  // same as /users
export class UsersController {
    

    @Get()  //  get/users  or users?role=value
    findall(@Query('role') role?:'INTERN' | 'ENGINEER'| 'ADMIN')
    {
        return []
    }

    @Get(':id')  //get  /users/id
    findOne(@Param('id') id: string)
    {
        return { id};
    }


    @Post()  //Post  /users/id
    createUser(@Body() user:{})
    {
        return user;
    }

    @Patch(':id')  //Patch  /users/id
    Update(@Param('id') id: string, @Body() userUpdate: {})
    {   
        return { msg:"successfully updated user", id,...userUpdate};
    }

    @Delete(':id')  //Delete  /users/:id
    deleteuser(@Param('id') id: string)
    {   
        return [];
    }

    
    
}
