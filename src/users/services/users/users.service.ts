import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 26, name: 'John Barber' },
    { id: 55, name: 'Susan Delgado' },
    { id: 96, name: 'Jerome Chambers' },
    { id: 92, name: 'Bertie Henderson' },
    { id: 49, name: 'Mayme Padilla' },
    { id: 15, name: 'Louis Medina' },
    { id: 43, name: 'Dollie Hoffman' },
    { id: 22, name: 'Gertrude Harper' },
    { id: 81, name: 'Rhoda Chambers' },
    { id: 3, name: 'Sue Phelps' },
    { id: 76, name: 'Dean Evans' },
    { id: 99, name: 'Georgie McGuire' },
    { id: 93, name: 'Jane Adams' },
  ];

  getAllUsers() {
    return this.users;
  }

  findUser(name: string) {
    return this.users.find((user) => user.name === name);
  }

  addNewUser(user: CreateUserDto) {
    this.users.push(user);
  }
}
