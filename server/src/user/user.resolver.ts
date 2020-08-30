import { Query, Resolver } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  @Query(() => String)
  async hello() {
    return 'world';
  }
}