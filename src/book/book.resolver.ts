import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from './book.dto';
import { Author } from 'src/author/author.dto';

@Resolver(() => Book)
export class BookResolver {
  @Query(() => [Book])
  books(): Book[] {
    return [
      {
        id: 1,
        name: 'Final Performance',
        year: 1988,
      },
    ];
  }

  // Manual attachment won't work as well
  // @UseInterceptors(LoggingInterceptor)
  @ResolveField(() => Author)
  author(): Author {
    return {
      id: 1,
      firstName: 'James',
      lastName: 'Brown',
    };
  }
}
