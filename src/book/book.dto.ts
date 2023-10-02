import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/author/author.dto';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  author?: Author;

  @Field()
  name: string;

  @Field()
  year: number;
}
