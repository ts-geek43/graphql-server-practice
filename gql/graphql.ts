/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Developer = {
  __typename?: 'Developer';
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile?: Maybe<Engineer>;
};

export type Employee = {
  __typename?: 'Employee';
  bonus?: Maybe<Scalars['Int']>;
  extraTime?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameType?: Maybe<Namegender>;
  salary?: Maybe<Scalars['String']>;
};

export type EmployeeBasicInfo = {
  name?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['String']>;
};

export type Engineer = {
  __typename?: 'Engineer';
  age?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Float']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee: Array<Employee>;
  createUserMutate?: Maybe<Scalars['String']>;
  deleteEmployee: Array<Employee>;
  updateEmployee: Array<Employee>;
};


export type MutationCreateEmployeeArgs = {
  input: EmployeeBasicInfo;
};


export type MutationCreateUserMutateArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteEmployeeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateEmployeeArgs = {
  id?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<EmployeeBasicInfo>;
};

export enum Namegender {
  Female = 'female',
  Male = 'male',
  Unisex = 'unisex'
}

export type Query = {
  __typename?: 'Query';
  age?: Maybe<Scalars['Float']>;
  createUser?: Maybe<Array<Maybe<Engineer>>>;
  displayUsers?: Maybe<Array<Maybe<Engineer>>>;
  email?: Maybe<Scalars['String']>;
  employees: Array<Employee>;
  hello?: Maybe<Scalars['String']>;
  manish?: Maybe<Developer>;
  updateUser?: Maybe<Array<Maybe<Engineer>>>;
  users?: Maybe<Array<Maybe<Engineer>>>;
};


export type QueryCreateUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryEmployeesArgs = {
  nameType?: InputMaybe<Namegender>;
};


export type QueryUpdateUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Developer = {
  __typename?: 'Developer';
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile?: Maybe<Engineer>;
};

export type Employee = {
  __typename?: 'Employee';
  bonus?: Maybe<Scalars['Int']>;
  extraTime?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameType?: Maybe<Namegender>;
  salary?: Maybe<Scalars['String']>;
};

export type EmployeeBasicInfo = {
  name?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['String']>;
};

export type Engineer = {
  __typename?: 'Engineer';
  age?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Float']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee: Array<Employee>;
  createUserMutate?: Maybe<Scalars['String']>;
  deleteEmployee: Array<Employee>;
  updateEmployee: Array<Employee>;
};


export type MutationCreateEmployeeArgs = {
  input: EmployeeBasicInfo;
};


export type MutationCreateUserMutateArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteEmployeeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateEmployeeArgs = {
  id?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<EmployeeBasicInfo>;
};

export enum Namegender {
  Female = 'female',
  Male = 'male',
  Unisex = 'unisex'
}

export type Query = {
  __typename?: 'Query';
  age?: Maybe<Scalars['Float']>;
  createUser?: Maybe<Array<Maybe<Engineer>>>;
  displayUsers?: Maybe<Array<Maybe<Engineer>>>;
  email?: Maybe<Scalars['String']>;
  employees: Array<Employee>;
  hello?: Maybe<Scalars['String']>;
  manish?: Maybe<Developer>;
  updateUser?: Maybe<Array<Maybe<Engineer>>>;
  users?: Maybe<Array<Maybe<Engineer>>>;
};


export type QueryCreateUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryEmployeesArgs = {
  nameType?: InputMaybe<Namegender>;
};


export type QueryUpdateUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Developer: ResolverTypeWrapper<Developer>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Employee: ResolverTypeWrapper<Employee>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  EmployeeBasicInfo: EmployeeBasicInfo;
  Engineer: ResolverTypeWrapper<Engineer>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Mutation: ResolverTypeWrapper<{}>;
  NAMEGENDER: Namegender;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Developer: Developer;
  String: Scalars['String'];
  Employee: Employee;
  Int: Scalars['Int'];
  EmployeeBasicInfo: EmployeeBasicInfo;
  Engineer: Engineer;
  Float: Scalars['Float'];
  Mutation: {};
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type DeveloperResolvers<ContextType = any, ParentType extends ResolversParentTypes['Developer'] = ResolversParentTypes['Developer']> = {
  language?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Engineer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  bonus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extraTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameType?: Resolver<Maybe<ResolversTypes['NAMEGENDER']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EngineerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Engineer'] = ResolversParentTypes['Engineer']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createEmployee?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'input'>>;
  createUserMutate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreateUserMutateArgs>>;
  deleteEmployee?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType, Partial<MutationDeleteEmployeeArgs>>;
  updateEmployee?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType, Partial<MutationUpdateEmployeeArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Engineer']>>>, ParentType, ContextType, Partial<QueryCreateUserArgs>>;
  displayUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Engineer']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employees?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType, Partial<QueryEmployeesArgs>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manish?: Resolver<Maybe<ResolversTypes['Developer']>, ParentType, ContextType>;
  updateUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Engineer']>>>, ParentType, ContextType, Partial<QueryUpdateUserArgs>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['Engineer']>>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type Resolvers<ContextType = any> = {
  Developer?: DeveloperResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Engineer?: EngineerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

