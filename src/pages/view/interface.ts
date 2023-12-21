type thumbnails = {
  url: string;
  width: number;
  height: number;
};
export interface IFetchView {
  videoItem: {
    contentDetails: {
      duration: string;
      dimension: string;
      definition: string;
      caption: string;
      licensedContent: boolean;
      projection: string;
      contentRating: Object;
    };
    etag: string;
    id: string;
    kind: string;
    snippet: {
      title: string;
      categoryId: string;
      channelId: string;
      channelTitle: string;
      defaultAudioLanguage: string;
      description: string;
      liveBroadcastContent: string;
      localized: {
        description: string;
        title: string;
      };
      publishedAt: Date;
      tags: Array<string>;
      thumbnails: {
        default: thumbnails;
        high: thumbnails;
        maxres: thumbnails;
        medium: thumbnails;
        standard: thumbnails;
      };
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
    };
  };
  channelData: {
    contentDetails: {
      relatedPlaylists: {
        likes: string;
        uploads: string;
      };
      etag: string;
      id: string;
      kind: string;
    };
    snippet: {
      country: "string";
      customUrl: string;
      description: string;
      localized: {
        description: string;
        title: string;
      };
      publishedAt: Date;
      thumbnails: {
        default: thumbnails;
        medium: thumbnails;
        high: thumbnails;
      };
      title: string;
    };
    statistics: {
      hiddenSubscriberCount: false;
      subscriberCount: string;
      videoCount: string;
      viewCount: string;
    };
  };
}

export interface IRecommend {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: Date;
    publishedAt: Date;
    thumbnails: {
      default: thumbnails;
      medium: thumbnails;
      high: thumbnails;
    };
    title: string;
  };
}

export interface ICommentAnswer {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    authorChannelId: { value: string };
    authorChannelUrl: URL["href"];
    authorDisplayName: string;
    authorProfileImageUrl: URL["href"];
    canRate: boolean;
    channelId: string;
    likeCount: number;
    parentId: string;
    publishedAt: Date;
    textDisplay: string;
    textOriginal: string;
    updatedAt?: Date;
    videoId: string;
    viewerRating: string;
  };
}

export interface IComment {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    canReply: boolean;
    channelId: string;
    isPublic: boolean;
    topLevelComment: {
      etag: string;
      id: string;
      kind: string;
      snippet: {
        authorChannelId: { value: string };
        authorChannelUrl: URL["href"];
        authorDisplayName: string;
        authorProfileImageUrl: URL["href"];
        canRate: boolean;
        channelId: string;
        likeCount: number;
        publishedAt: Date;
        textDisplay: string;
        textOriginal: string;
        updatedAt?: Date;
        videoId: string;
        viewerRating: string;
      };
    };
    totalReplyCount: number;
    videoId: string;
  };
  replies?: {
    comments: ICommentAnswer[];
  };
}

export interface IFetchComments {
  etag: string;
  items: IComment[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
