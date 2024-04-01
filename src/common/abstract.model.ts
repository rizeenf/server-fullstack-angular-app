import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Abstract{
  @Field()
  readonly _id: string

}