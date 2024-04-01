import { Field, ObjectType } from "@nestjs/graphql";
import { Abstract } from "../../common/abstract.model";


@ObjectType()
export class User extends Abstract {
  @Field()
  readonly email: string

}