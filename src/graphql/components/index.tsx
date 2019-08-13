import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The Object scalar type is used in operations and types that involve objects. */
  Object: any;
  /** The Date scalar type is used in operations and types that involve dates. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** The Any scalar type is used in operations and types that involve any type of value. */
  Any: any;
  /** The Bytes scalar type is used in operations and types that involve base 64 binary data. */
  Bytes: any;
  /** The File scalar type is used in operations and types that involve files. */
  File: any;
};

/** The ArrayConstraint input type is used in operations that involve filtering objects by a field of type Array. */
export type ArrayConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['Any']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['Any']>;
  /**
   * This is the $lt operator to specify a constraint to select the objects where
   * the value of a field is less than a specified value.
   **/
  _lt?: Maybe<Scalars['Any']>;
  /**
   * This is the $lte operator to specify a constraint to select the objects where
   * the value of a field is less than or equal to a specified value.
   **/
  _lte?: Maybe<Scalars['Any']>;
  /**
   * This is the $gt operator to specify a constraint to select the objects where
   * the value of a field is greater than a specified value.
   **/
  _gt?: Maybe<Scalars['Any']>;
  /**
   * This is the $gte operator to specify a constraint to select the objects where
   * the value of a field is greater than or equal to a specified value.
   **/
  _gte?: Maybe<Scalars['Any']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['Any']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['Any']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
  /**
   * This is the $containedBy operator to specify a constraint to select the
   * objects where the values of an array field is contained by another specified array.
   **/
  _containedBy?: Maybe<Array<Maybe<Scalars['Any']>>>;
  /**
   * This is the $all operator to specify a constraint to select the objects where
   * the values of an array field contain all elements of another specified array.
   **/
  _all?: Maybe<Array<Maybe<Scalars['Any']>>>;
};

/** The BooleanConstraint input type is used in operations that involve filtering objects by a field of type Boolean. */
export type BooleanConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['Boolean']>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
};

/** The BoxOperator input type is used to specifiy a $box operation on a within geo query. */
export type BoxOperator = {
  /** This is the bottom left coordinates of the box. */
  bottomLeft: GeoPoint;
  /** This is the upper right coordinates of the box. */
  upperRight: GeoPoint;
};

/** The BytesConstraint input type is used in operations that involve filtering objects by a field of type Bytes. */
export type BytesConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['Bytes']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['Bytes']>;
  /**
   * This is the $lt operator to specify a constraint to select the objects where
   * the value of a field is less than a specified value.
   **/
  _lt?: Maybe<Scalars['Bytes']>;
  /**
   * This is the $lte operator to specify a constraint to select the objects where
   * the value of a field is less than or equal to a specified value.
   **/
  _lte?: Maybe<Scalars['Bytes']>;
  /**
   * This is the $gt operator to specify a constraint to select the objects where
   * the value of a field is greater than a specified value.
   **/
  _gt?: Maybe<Scalars['Bytes']>;
  /**
   * This is the $gte operator to specify a constraint to select the objects where
   * the value of a field is greater than or equal to a specified value.
   **/
  _gte?: Maybe<Scalars['Bytes']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['Bytes']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['Bytes']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
};

/** The CenterSphereOperator input type is used to specifiy a $centerSphere operation on a geoWithin query. */
export type CenterSphereOperator = {
  /** This is the center of the sphere. */
  center: GeoPoint;
  /** This is the radius of the sphere. */
  distance: Scalars['Float'];
};

/** The Class interface type is used as a base type for the auto generated class types. */
export type Class = {
  /** This is the object id. */
  objectId: Scalars['ID'];
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
};

/** The CreateResult object type is used in the create mutations to return the data of the recent created object. */
export type CreateResult = {
  __typename?: 'CreateResult';
  /** This is the object id. */
  objectId: Scalars['ID'];
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
};

/** The DateConstraint input type is used in operations that involve filtering objects by a field of type Date. */
export type DateConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['Date']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['Date']>;
  /**
   * This is the $lt operator to specify a constraint to select the objects where
   * the value of a field is less than a specified value.
   **/
  _lt?: Maybe<Scalars['Date']>;
  /**
   * This is the $lte operator to specify a constraint to select the objects where
   * the value of a field is less than or equal to a specified value.
   **/
  _lte?: Maybe<Scalars['Date']>;
  /**
   * This is the $gt operator to specify a constraint to select the objects where
   * the value of a field is greater than a specified value.
   **/
  _gt?: Maybe<Scalars['Date']>;
  /**
   * This is the $gte operator to specify a constraint to select the objects where
   * the value of a field is greater than or equal to a specified value.
   **/
  _gte?: Maybe<Scalars['Date']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
};

/** The FILE_CONSTRAINT input type is used in operations that involve filtering objects by a field of type File. */
export type FileConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['File']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['File']>;
  /**
   * This is the $lt operator to specify a constraint to select the objects where
   * the value of a field is less than a specified value.
   **/
  _lt?: Maybe<Scalars['File']>;
  /**
   * This is the $lte operator to specify a constraint to select the objects where
   * the value of a field is less than or equal to a specified value.
   **/
  _lte?: Maybe<Scalars['File']>;
  /**
   * This is the $gt operator to specify a constraint to select the objects where
   * the value of a field is greater than a specified value.
   **/
  _gt?: Maybe<Scalars['File']>;
  /**
   * This is the $gte operator to specify a constraint to select the objects where
   * the value of a field is greater than or equal to a specified value.
   **/
  _gte?: Maybe<Scalars['File']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['File']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['File']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
  /**
   * This is the $regex operator to specify a constraint to select the objects
   * where the value of a field matches a specified regular expression.
   **/
  _regex?: Maybe<Scalars['String']>;
  /**
   * This is the $options operator to specify optional flags (such as "i" and "m")
   * to be added to a $regex operation in the same set of constraints.
   **/
  _options?: Maybe<Scalars['String']>;
};

/** The FileInfo object type is used to return the information about files. */
export type FileInfo = {
  __typename?: 'FileInfo';
  /** This is the file name. */
  name: Scalars['String'];
  /** This is the url in which the file can be downloaded. */
  url: Scalars['String'];
};

/** FilesMutation is the top level type for files mutations. */
export type FilesMutation = {
  __typename?: 'FilesMutation';
  /** The create mutation can be used to create and upload a new file. */
  create: FileInfo;
};

/** FilesMutation is the top level type for files mutations. */
export type FilesMutationCreateArgs = {
  file: Scalars['Upload'];
};

/** The FindResult object type is used in the find queries to return the data of the matched objects. */
export type FindResult = {
  __typename?: 'FindResult';
  /** This is the objects returned by the query */
  results: Array<Scalars['Object']>;
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
};

/** FunctionsMutation is the top level type for functions mutations. */
export type FunctionsMutation = {
  __typename?: 'FunctionsMutation';
  /** The call mutation can be used to invoke a cloud code function. */
  call?: Maybe<Scalars['Any']>;
};

/** FunctionsMutation is the top level type for functions mutations. */
export type FunctionsMutationCallArgs = {
  functionName: Scalars['String'];
  params?: Maybe<Scalars['Object']>;
};

/** The GeoIntersectsOperator input type is used to specify a $geoIntersects operation on a constraint. */
export type GeoIntersectsOperator = {
  /** This is the point to be specified. */
  _point?: Maybe<GeoPoint>;
};

/** The GeoPoint input type is used in operations that involve inputting fields of type geo point. */
export type GeoPoint = {
  /** This is the latitude. */
  latitude: Scalars['Float'];
  /** This is the longitude. */
  longitude: Scalars['Float'];
};

/** The GeoPointConstraint input type is used in operations that involve filtering objects by a field of type GeoPoint. */
export type GeoPointConstraint = {
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $nearSphere operator to specify a constraint to select the objects
   * where the values of a geo point field is near to another geo point.
   **/
  _nearSphere?: Maybe<GeoPoint>;
  /**
   * This is the $maxDistance operator to specify a constraint to select the
   * objects where the values of a geo point field is at a max distance (in
   * radians) from the geo point specified in the $nearSphere operator.
   **/
  _maxDistance?: Maybe<Scalars['Float']>;
  /**
   * This is the $maxDistanceInRadians operator to specify a constraint to select
   * the objects where the values of a geo point field is at a max distance (in
   * radians) from the geo point specified in the $nearSphere operator.
   **/
  _maxDistanceInRadians?: Maybe<Scalars['Float']>;
  /**
   * This is the $maxDistanceInMiles operator to specify a constraint to select the
   * objects where the values of a geo point field is at a max distance (in miles)
   * from the geo point specified in the $nearSphere operator.
   **/
  _maxDistanceInMiles?: Maybe<Scalars['Float']>;
  /**
   * This is the $maxDistanceInKilometers operator to specify a constraint to
   * select the objects where the values of a geo point field is at a max distance
   * (in kilometers) from the geo point specified in the $nearSphere operator.
   **/
  _maxDistanceInKilometers?: Maybe<Scalars['Float']>;
  /**
   * This is the $within operator to specify a constraint to select the objects
   * where the values of a geo point field is within a specified box.
   **/
  _within?: Maybe<WithinOperator>;
  /**
   * This is the $geoWithin operator to specify a constraint to select the objects
   * where the values of a geo point field is within a specified polygon or sphere.
   **/
  _geoWithin?: Maybe<GeoWithinOperator>;
};

/** The GeoPointInfo object type is used to return the information about geo points. */
export type GeoPointInfo = {
  __typename?: 'GeoPointInfo';
  /** This is the latitude. */
  latitude: Scalars['Float'];
  /** This is the longitude. */
  longitude: Scalars['Float'];
};

/** The GeoWithinOperator input type is used to specify a $geoWithin operation on a constraint. */
export type GeoWithinOperator = {
  /** This is the polygon to be specified. */
  _polygon?: Maybe<Array<GeoPoint>>;
  /** This is the sphere to be specified. */
  _centerSphere?: Maybe<CenterSphereOperator>;
};

/** Mutation is the top level type for mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** This is the top level for objects mutations. */
  objects?: Maybe<ObjectsMutation>;
  /** This is the top level for files mutations. */
  files?: Maybe<FilesMutation>;
  /** This is the top level for functions mutations. */
  functions?: Maybe<FunctionsMutation>;
};

/** The NumberConstraint input type is used in operations that involve filtering objects by a field of type Number. */
export type NumberConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['Float']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['Float']>;
  /**
   * This is the $lt operator to specify a constraint to select the objects where
   * the value of a field is less than a specified value.
   **/
  _lt?: Maybe<Scalars['Float']>;
  /**
   * This is the $lte operator to specify a constraint to select the objects where
   * the value of a field is less than or equal to a specified value.
   **/
  _lte?: Maybe<Scalars['Float']>;
  /**
   * This is the $gt operator to specify a constraint to select the objects where
   * the value of a field is greater than a specified value.
   **/
  _gt?: Maybe<Scalars['Float']>;
  /**
   * This is the $gte operator to specify a constraint to select the objects where
   * the value of a field is greater than or equal to a specified value.
   **/
  _gte?: Maybe<Scalars['Float']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
};

/** The ObjectConstraint input type is used in operations that involve filtering objects by a field of type Object. */
export type ObjectConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['Object']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['Object']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['Object']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['Object']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
};

/** ObjectsMutation is the top level type for objects mutations. */
export type ObjectsMutation = {
  __typename?: 'ObjectsMutation';
  /** The create mutation can be used to create a new object of a certain class. */
  create: CreateResult;
  /** The update mutation can be used to update an object of a certain class. */
  update: UpdateResult;
  /** The delete mutation can be used to delete an object of a certain class. */
  delete: Scalars['Boolean'];
};

/** ObjectsMutation is the top level type for objects mutations. */
export type ObjectsMutationCreateArgs = {
  className: Scalars['String'];
  fields?: Maybe<Scalars['Object']>;
};

/** ObjectsMutation is the top level type for objects mutations. */
export type ObjectsMutationUpdateArgs = {
  className: Scalars['String'];
  objectId: Scalars['ID'];
  fields?: Maybe<Scalars['Object']>;
};

/** ObjectsMutation is the top level type for objects mutations. */
export type ObjectsMutationDeleteArgs = {
  className: Scalars['String'];
  objectId: Scalars['ID'];
};

/** ObjectsQuery is the top level type for objects queries. */
export type ObjectsQuery = {
  __typename?: 'ObjectsQuery';
  /** The get query can be used to get an object of a certain class by its objectId. */
  get: Scalars['Object'];
  /** The find query can be used to find objects of a certain class. */
  find: FindResult;
};

/** ObjectsQuery is the top level type for objects queries. */
export type ObjectsQueryGetArgs = {
  className: Scalars['String'];
  objectId: Scalars['ID'];
  keys?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['String']>;
  readPreference?: Maybe<ReadPreference>;
  includeReadPreference?: Maybe<ReadPreference>;
};

/** ObjectsQuery is the top level type for objects queries. */
export type ObjectsQueryFindArgs = {
  className: Scalars['String'];
  where?: Maybe<Scalars['Object']>;
  order?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  keys?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['String']>;
  includeAll?: Maybe<Scalars['Boolean']>;
  readPreference?: Maybe<ReadPreference>;
  includeReadPreference?: Maybe<ReadPreference>;
  subqueryReadPreference?: Maybe<ReadPreference>;
};

/** The PolygonConstraint input type is used in operations that involve filtering objects by a field of type Polygon. */
export type PolygonConstraint = {
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $geoIntersects operator to specify a constraint to select the
   * objects where the values of a polygon field intersect a specified point.
   **/
  _geoIntersects?: Maybe<GeoIntersectsOperator>;
};

/** Query is the top level type for queries. */
export type Query = {
  __typename?: 'Query';
  /** The health query can be used to check if the server is up and running. */
  health: Scalars['Boolean'];
  /** This is the top level for objects queries. */
  objects?: Maybe<ObjectsQuery>;
};

/** The ReadPreference enum type is used in queries in order to select in which database replica the operation must run. */
export enum ReadPreference {
  PRIMARY = 'PRIMARY',
  PRIMARY_PREFERRED = 'PRIMARY_PREFERRED',
  SECONDARY = 'SECONDARY',
  SECONDARY_PREFERRED = 'SECONDARY_PREFERRED',
  NEAREST = 'NEAREST'
}

/** The RelationOp enum type is used to specify which kind of operation should be executed to a relation. */
export enum RelationOp {
  BATCH = 'Batch',
  ADDRELATION = 'AddRelation',
  REMOVERELATION = 'RemoveRelation'
}

/** The SearchOperator input type is used to specifiy a $search operation on a full text search. */
export type SearchOperator = {
  /** This is the term to be searched. */
  _term: Scalars['String'];
  /** This is the language to tetermine the list of stop words and the rules for tokenizer. */
  _language?: Maybe<Scalars['String']>;
  /** This is the flag to enable or disable case sensitive search. */
  _caseSensitive?: Maybe<Scalars['Boolean']>;
  /** This is the flag to enable or disable diacritic sensitive search. */
  _diacriticSensitive?: Maybe<Scalars['Boolean']>;
};

/** The SelectOperator input type is used to specify a $select operation on a constraint. */
export type SelectOperator = {
  /** This is the subquery to be executed. */
  query: Subquery;
  /** This is the key in the result of the subquery that must match (not match) the field. */
  key: Scalars['String'];
};

/** The SignUpResult object type is used in the users sign up mutation to return the data of the recent created user. */
export type SignUpResult = {
  __typename?: 'SignUpResult';
  /** This is the object id. */
  objectId: Scalars['ID'];
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** The user session token */
  sessionToken: Scalars['String'];
};

/** The StringConstraint input type is used in operations that involve filtering objects by a field of type String. */
export type StringConstraint = {
  /**
   * This is the $eq operator to specify a constraint to select the objects where
   * the value of a field equals to a specified value.
   **/
  _eq?: Maybe<Scalars['String']>;
  /**
   * This is the $ne operator to specify a constraint to select the objects where
   * the value of a field do not equal to a specified value.
   **/
  _ne?: Maybe<Scalars['String']>;
  /**
   * This is the $lt operator to specify a constraint to select the objects where
   * the value of a field is less than a specified value.
   **/
  _lt?: Maybe<Scalars['String']>;
  /**
   * This is the $lte operator to specify a constraint to select the objects where
   * the value of a field is less than or equal to a specified value.
   **/
  _lte?: Maybe<Scalars['String']>;
  /**
   * This is the $gt operator to specify a constraint to select the objects where
   * the value of a field is greater than a specified value.
   **/
  _gt?: Maybe<Scalars['String']>;
  /**
   * This is the $gte operator to specify a constraint to select the objects where
   * the value of a field is greater than or equal to a specified value.
   **/
  _gte?: Maybe<Scalars['String']>;
  /**
   * This is the $in operator to specify a constraint to select the objects where
   * the value of a field equals any value in the specified array.
   **/
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * This is the $nin operator to specify a constraint to select the objects where
   * the value of a field do not equal any value in the specified array.
   **/
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** This is the $exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  _exists?: Maybe<Scalars['Boolean']>;
  /**
   * This is the $select operator to specify a constraint to select the objects
   * where a field equals to a key in the result of a different query.
   **/
  _select?: Maybe<SelectOperator>;
  /**
   * This is the $dontSelect operator to specify a constraint to select the objects
   * where a field do not equal to a key in the result of a different query.
   **/
  _dontSelect?: Maybe<SelectOperator>;
  /**
   * This is the $regex operator to specify a constraint to select the objects
   * where the value of a field matches a specified regular expression.
   **/
  _regex?: Maybe<Scalars['String']>;
  /**
   * This is the $options operator to specify optional flags (such as "i" and "m")
   * to be added to a $regex operation in the same set of constraints.
   **/
  _options?: Maybe<Scalars['String']>;
  /** This is the $text operator to specify a full text search constraint. */
  _text?: Maybe<TextOperator>;
};

/** The Subquery input type is used to specific a different query to a different class. */
export type Subquery = {
  /** This is the class name of the object. */
  className: Scalars['String'];
  /** These are the conditions that the objects need to match in order to be found */
  where: Scalars['Object'];
};

/** The TextOperator input type is used to specify a $text operation on a constraint. */
export type TextOperator = {
  /** This is the search to be executed. */
  _search: SearchOperator;
};

/** The UpdateResult object type is used in the update mutations to return the data of the recent updated object. */
export type UpdateResult = {
  __typename?: 'UpdateResult';
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
};

/** The WithinOperator input type is used to specify a $within operation on a constraint. */
export type WithinOperator = {
  /** This is the box to be specified. */
  _box: BoxOperator;
};
export type CloudfunMutationVariables = {
  functionName: Scalars['String'];
  params: Scalars['Object'];
};

export type CloudfunMutation = { __typename?: 'Mutation' } & {
  functions: Maybe<{ __typename?: 'FunctionsMutation' } & Pick<FunctionsMutation, 'call'>>;
};

export const CloudfunDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'cloudfun' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'functionName' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          },
          directives: []
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'params' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Object' } }
          },
          directives: []
        }
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'functions' },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'call' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'functionName' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'functionName' } }
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'params' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'params' } }
                    }
                  ],
                  directives: []
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

export function useCloudfunMutation() {
  return Urql.useMutation<CloudfunMutation, CloudfunMutationVariables>(CloudfunDocument);
}
