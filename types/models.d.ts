/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

import mongoose from "mongoose";

/**
 * Lean version of EpisodeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `EpisodeDocument.toObject()`. To avoid conflicts with model names, use the type alias `EpisodeObject`.
 * ```
 * const episodeObject = episode.toObject();
 * ```
 */
export type Episode = {
  id?: number;
  title?: string;
  link?: string;
  description?: string;
  guid?: string;
  datePublished?: number;
  datePublishedPretty?: string;
  dateCrawled?: number;
  enclosureUrl?: string;
  enclosureType?: string;
  enclosureLength?: number;
  duration?: number;
  explicit?: number;
  episode?: string;
  episodeType?: string;
  season?: number;
  image?: string;
  feedItunesId?: number;
  feedUrl?: string;
  feedImage?: string;
  feedId?: number;
  podcastGuid?: string;
  feedLanguage?: string;
  feedDead?: number;
  feedDuplicateOf?: string;
  chaptersUrl?: string;
  transcriptUrl?: string;
  _id: mongoose.Types.ObjectId;
};

/**
 * Lean version of EpisodeDocument (type alias of `Episode`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Episode } from "../models"
 * import { EpisodeObject } from "../interfaces/mongoose.gen.ts"
 *
 * const episodeObject: EpisodeObject = episode.toObject();
 * ```
 */
export type EpisodeObject = Episode;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeQuery = mongoose.Query<
  any,
  EpisodeDocument,
  EpisodeQueries
> &
  EpisodeQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `EpisodeSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeQueries = {};

export type EpisodeMethods = {};

export type EpisodeStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Episode = mongoose.model<EpisodeDocument, EpisodeModel>("Episode", EpisodeSchema);
 * ```
 */
export type EpisodeModel = mongoose.Model<EpisodeDocument, EpisodeQueries> &
  EpisodeStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Episode schema instances:
 * ```
 * const EpisodeSchema: EpisodeSchema = new mongoose.Schema({ ... })
 * ```
 */
export type EpisodeSchema = mongoose.Schema<
  EpisodeDocument,
  EpisodeModel,
  EpisodeMethods,
  EpisodeQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Episode = mongoose.model<EpisodeDocument, EpisodeModel>("Episode", EpisodeSchema);
 * ```
 */
export type EpisodeDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  EpisodeQueries
> &
  EpisodeMethods & {
    id?: number;
    title?: string;
    link?: string;
    description?: string;
    guid?: string;
    datePublished?: number;
    datePublishedPretty?: string;
    dateCrawled?: number;
    enclosureUrl?: string;
    enclosureType?: string;
    enclosureLength?: number;
    duration?: number;
    explicit?: number;
    episode?: string;
    episodeType?: string;
    season?: number;
    image?: string;
    feedItunesId?: number;
    feedUrl?: string;
    feedImage?: string;
    feedId?: number;
    podcastGuid?: string;
    feedLanguage?: string;
    feedDead?: number;
    feedDuplicateOf?: string;
    chaptersUrl?: string;
    transcriptUrl?: string;
    _id: mongoose.Types.ObjectId;
  };

/**
 * Lean version of EpisodeCommentDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `EpisodeCommentDocument.toObject()`. To avoid conflicts with model names, use the type alias `EpisodeCommentObject`.
 * ```
 * const episodecommentObject = episodecomment.toObject();
 * ```
 */
export type EpisodeComment = {
  content: string;
  userId: User["_id"] | User;
  podId: Pod["_id"] | Pod;
  episodeId: Episode["_id"] | Episode;
  deleted?: boolean;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of EpisodeCommentDocument (type alias of `EpisodeComment`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { EpisodeComment } from "../models"
 * import { EpisodeCommentObject } from "../interfaces/mongoose.gen.ts"
 *
 * const episodecommentObject: EpisodeCommentObject = episodecomment.toObject();
 * ```
 */
export type EpisodeCommentObject = EpisodeComment;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeCommentQuery = mongoose.Query<
  any,
  EpisodeCommentDocument,
  EpisodeCommentQueries
> &
  EpisodeCommentQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `EpisodeCommentSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeCommentQueries = {};

export type EpisodeCommentMethods = {};

export type EpisodeCommentStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const EpisodeComment = mongoose.model<EpisodeCommentDocument, EpisodeCommentModel>("EpisodeComment", EpisodeCommentSchema);
 * ```
 */
export type EpisodeCommentModel = mongoose.Model<
  EpisodeCommentDocument,
  EpisodeCommentQueries
> &
  EpisodeCommentStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new EpisodeComment schema instances:
 * ```
 * const EpisodeCommentSchema: EpisodeCommentSchema = new mongoose.Schema({ ... })
 * ```
 */
export type EpisodeCommentSchema = mongoose.Schema<
  EpisodeCommentDocument,
  EpisodeCommentModel,
  EpisodeCommentMethods,
  EpisodeCommentQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const EpisodeComment = mongoose.model<EpisodeCommentDocument, EpisodeCommentModel>("EpisodeComment", EpisodeCommentSchema);
 * ```
 */
export type EpisodeCommentDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  EpisodeCommentQueries
> &
  EpisodeCommentMethods & {
    content: string;
    userId: UserDocument["_id"] | UserDocument;
    podId: PodDocument["_id"] | PodDocument;
    episodeId: EpisodeDocument["_id"] | EpisodeDocument;
    deleted?: boolean;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of EpisodeLikeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `EpisodeLikeDocument.toObject()`. To avoid conflicts with model names, use the type alias `EpisodeLikeObject`.
 * ```
 * const episodelikeObject = episodelike.toObject();
 * ```
 */
export type EpisodeLike = {
  userId: User["_id"] | User;
  episodeId: Episode["_id"] | Episode;
  podId: Pod["_id"] | Pod;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of EpisodeLikeDocument (type alias of `EpisodeLike`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { EpisodeLike } from "../models"
 * import { EpisodeLikeObject } from "../interfaces/mongoose.gen.ts"
 *
 * const episodelikeObject: EpisodeLikeObject = episodelike.toObject();
 * ```
 */
export type EpisodeLikeObject = EpisodeLike;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeLikeQuery = mongoose.Query<
  any,
  EpisodeLikeDocument,
  EpisodeLikeQueries
> &
  EpisodeLikeQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `EpisodeLikeSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeLikeQueries = {};

export type EpisodeLikeMethods = {};

export type EpisodeLikeStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const EpisodeLike = mongoose.model<EpisodeLikeDocument, EpisodeLikeModel>("EpisodeLike", EpisodeLikeSchema);
 * ```
 */
export type EpisodeLikeModel = mongoose.Model<
  EpisodeLikeDocument,
  EpisodeLikeQueries
> &
  EpisodeLikeStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new EpisodeLike schema instances:
 * ```
 * const EpisodeLikeSchema: EpisodeLikeSchema = new mongoose.Schema({ ... })
 * ```
 */
export type EpisodeLikeSchema = mongoose.Schema<
  EpisodeLikeDocument,
  EpisodeLikeModel,
  EpisodeLikeMethods,
  EpisodeLikeQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const EpisodeLike = mongoose.model<EpisodeLikeDocument, EpisodeLikeModel>("EpisodeLike", EpisodeLikeSchema);
 * ```
 */
export type EpisodeLikeDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  EpisodeLikeQueries
> &
  EpisodeLikeMethods & {
    userId: UserDocument["_id"] | UserDocument;
    episodeId: EpisodeDocument["_id"] | EpisodeDocument;
    podId: PodDocument["_id"] | PodDocument;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of EpisodeRatingDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `EpisodeRatingDocument.toObject()`. To avoid conflicts with model names, use the type alias `EpisodeRatingObject`.
 * ```
 * const episoderatingObject = episoderating.toObject();
 * ```
 */
export type EpisodeRating = {
  rating: number;
  userId: User["_id"] | User;
  episodeId: Episode["_id"] | Episode;
  podId: Pod["_id"] | Pod;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of EpisodeRatingDocument (type alias of `EpisodeRating`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { EpisodeRating } from "../models"
 * import { EpisodeRatingObject } from "../interfaces/mongoose.gen.ts"
 *
 * const episoderatingObject: EpisodeRatingObject = episoderating.toObject();
 * ```
 */
export type EpisodeRatingObject = EpisodeRating;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeRatingQuery = mongoose.Query<
  any,
  EpisodeRatingDocument,
  EpisodeRatingQueries
> &
  EpisodeRatingQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `EpisodeRatingSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type EpisodeRatingQueries = {};

export type EpisodeRatingMethods = {};

export type EpisodeRatingStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const EpisodeRating = mongoose.model<EpisodeRatingDocument, EpisodeRatingModel>("EpisodeRating", EpisodeRatingSchema);
 * ```
 */
export type EpisodeRatingModel = mongoose.Model<
  EpisodeRatingDocument,
  EpisodeRatingQueries
> &
  EpisodeRatingStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new EpisodeRating schema instances:
 * ```
 * const EpisodeRatingSchema: EpisodeRatingSchema = new mongoose.Schema({ ... })
 * ```
 */
export type EpisodeRatingSchema = mongoose.Schema<
  EpisodeRatingDocument,
  EpisodeRatingModel,
  EpisodeRatingMethods,
  EpisodeRatingQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const EpisodeRating = mongoose.model<EpisodeRatingDocument, EpisodeRatingModel>("EpisodeRating", EpisodeRatingSchema);
 * ```
 */
export type EpisodeRatingDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  EpisodeRatingQueries
> &
  EpisodeRatingMethods & {
    rating: number;
    userId: UserDocument["_id"] | UserDocument;
    episodeId: EpisodeDocument["_id"] | EpisodeDocument;
    podId: PodDocument["_id"] | PodDocument;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of PodDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `PodDocument.toObject()`. To avoid conflicts with model names, use the type alias `PodObject`.
 * ```
 * const podObject = pod.toObject();
 * ```
 */
export type Pod = {
  id?: number;
  title?: string;
  description?: string;
  url?: string;
  originalUrl?: string;
  link?: string;
  image?: string;
  feedUrl?: string;
  inCrawlQueue?: number;
  inPollingQueue?: number;
  priority?: number;
  lastGoodHttpStatusTime?: number;
  lastHttpStatus?: number;
  contentType?: string;
  itunesId?: number;
  generator?: string;
  language?: string;
  type?: number;
  dead?: number;
  crawlErrors?: number;
  parseErrors?: number;
  categories: any[];
  locked?: number;
  explicit?: boolean;
  podcastGuid?: string;
  medium?: string;
  episodeCount?: number;
  imageUrlHash?: number;
  newestItemPubdate?: number;
  rating?: number;
  timesSearched?: number;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of PodDocument (type alias of `Pod`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Pod } from "../models"
 * import { PodObject } from "../interfaces/mongoose.gen.ts"
 *
 * const podObject: PodObject = pod.toObject();
 * ```
 */
export type PodObject = Pod;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type PodQuery = mongoose.Query<any, PodDocument, PodQueries> &
  PodQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `PodSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type PodQueries = {};

export type PodMethods = {};

export type PodStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Pod = mongoose.model<PodDocument, PodModel>("Pod", PodSchema);
 * ```
 */
export type PodModel = mongoose.Model<PodDocument, PodQueries> & PodStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Pod schema instances:
 * ```
 * const PodSchema: PodSchema = new mongoose.Schema({ ... })
 * ```
 */
export type PodSchema = mongoose.Schema<
  PodDocument,
  PodModel,
  PodMethods,
  PodQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Pod = mongoose.model<PodDocument, PodModel>("Pod", PodSchema);
 * ```
 */
export type PodDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  PodQueries
> &
  PodMethods & {
    id?: number;
    title?: string;
    description?: string;
    url?: string;
    originalUrl?: string;
    link?: string;
    image?: string;
    feedUrl?: string;
    inCrawlQueue?: number;
    inPollingQueue?: number;
    priority?: number;
    lastGoodHttpStatusTime?: number;
    lastHttpStatus?: number;
    contentType?: string;
    itunesId?: number;
    generator?: string;
    language?: string;
    type?: number;
    dead?: number;
    crawlErrors?: number;
    parseErrors?: number;
    categories: mongoose.Types.Array<any>;
    locked?: number;
    explicit?: boolean;
    podcastGuid?: string;
    medium?: string;
    episodeCount?: number;
    imageUrlHash?: number;
    newestItemPubdate?: number;
    rating?: number;
    timesSearched?: number;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of PodCommentDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `PodCommentDocument.toObject()`. To avoid conflicts with model names, use the type alias `PodCommentObject`.
 * ```
 * const podcommentObject = podcomment.toObject();
 * ```
 */
export type PodComment = {
  content: string;
  userId: User["_id"] | User;
  podId: Pod["_id"] | Pod;
  deleted?: boolean;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of PodCommentDocument (type alias of `PodComment`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { PodComment } from "../models"
 * import { PodCommentObject } from "../interfaces/mongoose.gen.ts"
 *
 * const podcommentObject: PodCommentObject = podcomment.toObject();
 * ```
 */
export type PodCommentObject = PodComment;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type PodCommentQuery = mongoose.Query<
  any,
  PodCommentDocument,
  PodCommentQueries
> &
  PodCommentQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `PodCommentSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type PodCommentQueries = {};

export type PodCommentMethods = {};

export type PodCommentStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const PodComment = mongoose.model<PodCommentDocument, PodCommentModel>("PodComment", PodCommentSchema);
 * ```
 */
export type PodCommentModel = mongoose.Model<
  PodCommentDocument,
  PodCommentQueries
> &
  PodCommentStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new PodComment schema instances:
 * ```
 * const PodCommentSchema: PodCommentSchema = new mongoose.Schema({ ... })
 * ```
 */
export type PodCommentSchema = mongoose.Schema<
  PodCommentDocument,
  PodCommentModel,
  PodCommentMethods,
  PodCommentQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const PodComment = mongoose.model<PodCommentDocument, PodCommentModel>("PodComment", PodCommentSchema);
 * ```
 */
export type PodCommentDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  PodCommentQueries
> &
  PodCommentMethods & {
    content: string;
    userId: UserDocument["_id"] | UserDocument;
    podId: PodDocument["_id"] | PodDocument;
    deleted?: boolean;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of PodLikeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `PodLikeDocument.toObject()`. To avoid conflicts with model names, use the type alias `PodLikeObject`.
 * ```
 * const podlikeObject = podlike.toObject();
 * ```
 */
export type PodLike = {
  userId: User["_id"] | User;
  podId?: Pod["_id"] | Pod;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of PodLikeDocument (type alias of `PodLike`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { PodLike } from "../models"
 * import { PodLikeObject } from "../interfaces/mongoose.gen.ts"
 *
 * const podlikeObject: PodLikeObject = podlike.toObject();
 * ```
 */
export type PodLikeObject = PodLike;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type PodLikeQuery = mongoose.Query<
  any,
  PodLikeDocument,
  PodLikeQueries
> &
  PodLikeQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `PodLikeSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type PodLikeQueries = {};

export type PodLikeMethods = {};

export type PodLikeStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const PodLike = mongoose.model<PodLikeDocument, PodLikeModel>("PodLike", PodLikeSchema);
 * ```
 */
export type PodLikeModel = mongoose.Model<PodLikeDocument, PodLikeQueries> &
  PodLikeStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new PodLike schema instances:
 * ```
 * const PodLikeSchema: PodLikeSchema = new mongoose.Schema({ ... })
 * ```
 */
export type PodLikeSchema = mongoose.Schema<
  PodLikeDocument,
  PodLikeModel,
  PodLikeMethods,
  PodLikeQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const PodLike = mongoose.model<PodLikeDocument, PodLikeModel>("PodLike", PodLikeSchema);
 * ```
 */
export type PodLikeDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  PodLikeQueries
> &
  PodLikeMethods & {
    userId: UserDocument["_id"] | UserDocument;
    podId?: PodDocument["_id"] | PodDocument;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of SubscriptionDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `SubscriptionDocument.toObject()`. To avoid conflicts with model names, use the type alias `SubscriptionObject`.
 * ```
 * const subscriptionObject = subscription.toObject();
 * ```
 */
export type Subscription = {
  userId: User["_id"] | User;
  podId: Pod["_id"] | Pod;
  deleted?: boolean;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of SubscriptionDocument (type alias of `Subscription`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Subscription } from "../models"
 * import { SubscriptionObject } from "../interfaces/mongoose.gen.ts"
 *
 * const subscriptionObject: SubscriptionObject = subscription.toObject();
 * ```
 */
export type SubscriptionObject = Subscription;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type SubscriptionQuery = mongoose.Query<
  any,
  SubscriptionDocument,
  SubscriptionQueries
> &
  SubscriptionQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `SubscriptionSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type SubscriptionQueries = {};

export type SubscriptionMethods = {};

export type SubscriptionStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Subscription = mongoose.model<SubscriptionDocument, SubscriptionModel>("Subscription", SubscriptionSchema);
 * ```
 */
export type SubscriptionModel = mongoose.Model<
  SubscriptionDocument,
  SubscriptionQueries
> &
  SubscriptionStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Subscription schema instances:
 * ```
 * const SubscriptionSchema: SubscriptionSchema = new mongoose.Schema({ ... })
 * ```
 */
export type SubscriptionSchema = mongoose.Schema<
  SubscriptionDocument,
  SubscriptionModel,
  SubscriptionMethods,
  SubscriptionQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Subscription = mongoose.model<SubscriptionDocument, SubscriptionModel>("Subscription", SubscriptionSchema);
 * ```
 */
export type SubscriptionDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  SubscriptionQueries
> &
  SubscriptionMethods & {
    userId: UserDocument["_id"] | UserDocument;
    podId: PodDocument["_id"] | PodDocument;
    deleted?: boolean;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Lean version of UserDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `UserDocument.toObject()`. To avoid conflicts with model names, use the type alias `UserObject`.
 * ```
 * const userObject = user.toObject();
 * ```
 */
export type User = {
  name: string;
  username: string;
  displayName?: string;
  authId: string;
  following: (User["_id"] | User)[];
  followers: (User["_id"] | User)[];
  recentlyViewedEpisodes: (Episode["_id"] | Episode)[];
  recentlyViewedPods: (Pod["_id"] | Pod)[];
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Lean version of UserDocument (type alias of `User`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { User } from "../models"
 * import { UserObject } from "../interfaces/mongoose.gen.ts"
 *
 * const userObject: UserObject = user.toObject();
 * ```
 */
export type UserObject = User;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type UserQuery = mongoose.Query<any, UserDocument, UserQueries> &
  UserQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `UserSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type UserQueries = {};

export type UserMethods = {};

export type UserStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);
 * ```
 */
export type UserModel = mongoose.Model<UserDocument, UserQueries> & UserStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new User schema instances:
 * ```
 * const UserSchema: UserSchema = new mongoose.Schema({ ... })
 * ```
 */
export type UserSchema = mongoose.Schema<
  UserDocument,
  UserModel,
  UserMethods,
  UserQueries
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);
 * ```
 */
export type UserDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  UserQueries
> &
  UserMethods & {
    name: string;
    username: string;
    displayName?: string;
    authId: string;
    following: mongoose.Types.Array<UserDocument["_id"] | UserDocument>;
    followers: mongoose.Types.Array<UserDocument["_id"] | UserDocument>;
    recentlyViewedEpisodes: mongoose.Types.Array<
      EpisodeDocument["_id"] | EpisodeDocument
    >;
    recentlyViewedPods: mongoose.Types.Array<PodDocument["_id"] | PodDocument>;
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  };

/**
 * Check if a property on a document is populated:
 * ```
 * import { IsPopulated } from "../interfaces/mongoose.gen.ts"
 *
 * if (IsPopulated<UserDocument["bestFriend"]>) { ... }
 * ```
 */
export function IsPopulated<T>(doc: T | mongoose.Types.ObjectId): doc is T {
  return doc instanceof mongoose.Document;
}

/**
 * Helper type used by `PopulatedDocument`. Returns the parent property of a string
 * representing a nested property (i.e. `friend.user` -> `friend`)
 */
type ParentProperty<T> = T extends `${infer P}.${string}` ? P : never;

/**
 * Helper type used by `PopulatedDocument`. Returns the child property of a string
 * representing a nested property (i.e. `friend.user` -> `user`).
 */
type ChildProperty<T> = T extends `${string}.${infer C}` ? C : never;

/**
 * Helper type used by `PopulatedDocument`. Removes the `ObjectId` from the general union type generated
 * for ref documents (i.e. `mongoose.Types.ObjectId | UserDocument` -> `UserDocument`)
 */
type PopulatedProperty<Root, T extends keyof Root> = Omit<Root, T> & {
  [ref in T]: Root[T] extends mongoose.Types.Array<infer U>
    ? mongoose.Types.Array<Exclude<U, mongoose.Types.ObjectId>>
    : Exclude<Root[T], mongoose.Types.ObjectId>;
};

/**
 * Populate properties on a document type:
 * ```
 * import { PopulatedDocument } from "../interfaces/mongoose.gen.ts"
 *
 * function example(user: PopulatedDocument<UserDocument, "bestFriend">) {
 *   console.log(user.bestFriend._id) // typescript knows this is populated
 * }
 * ```
 */
export type PopulatedDocument<DocType, T> = T extends keyof DocType
  ? PopulatedProperty<DocType, T>
  : ParentProperty<T> extends keyof DocType
  ? Omit<DocType, ParentProperty<T>> & {
      [ref in ParentProperty<T>]: DocType[ParentProperty<T>] extends mongoose.Types.Array<
        infer U
      >
        ? mongoose.Types.Array<
            ChildProperty<T> extends keyof U
              ? PopulatedProperty<U, ChildProperty<T>>
              : PopulatedDocument<U, ChildProperty<T>>
          >
        : ChildProperty<T> extends keyof DocType[ParentProperty<T>]
        ? PopulatedProperty<DocType[ParentProperty<T>], ChildProperty<T>>
        : PopulatedDocument<DocType[ParentProperty<T>], ChildProperty<T>>;
    }
  : DocType;

/**
 * Helper types used by the populate overloads
 */
type Unarray<T> = T extends Array<infer U> ? U : T;
type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * Augment mongoose with Query.populate overloads
 */
declare module "mongoose" {
  interface Query<ResultType, DocType, THelpers = {}> {
    populate<T extends string>(
      path: T,
      select?: string | any,
      model?: string | Model<any, THelpers>,
      match?: any
    ): Query<
      ResultType extends Array<DocType>
        ? Array<PopulatedDocument<Unarray<ResultType>, T>>
        : ResultType extends DocType
        ? PopulatedDocument<Unarray<ResultType>, T>
        : ResultType,
      DocType,
      THelpers
    > &
      THelpers;

    populate<T extends string>(
      options: Modify<PopulateOptions, { path: T }> | Array<PopulateOptions>
    ): Query<
      ResultType extends Array<DocType>
        ? Array<PopulatedDocument<Unarray<ResultType>, T>>
        : ResultType extends DocType
        ? PopulatedDocument<Unarray<ResultType>, T>
        : ResultType,
      DocType,
      THelpers
    > &
      THelpers;
  }
}
