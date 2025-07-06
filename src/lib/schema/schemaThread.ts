import z from "zod";
export const schemaThread = z.object({
  content: z.string().min(1, { message: "Content required" }),
  images: z.any().optional(),
});

export type schemaThreadDTO = z.infer<typeof schemaThread>;

export interface typeThread {
  id?: string;
  _id?: string;
  content: string;
  images?: string;
  createdAt: string;
  updatedAt?: string;
  userId?: string;
  fullname?: string;
  username?: string;
  avatar?: string;
  likes?: number;
  replies?: number;

  // Like properties
  isLiked?: boolean;
  likeCount?: number;
  replyCount?: number;
  // Nested structure for detail view
  user?: {
    id: string;
    username: string;
    profile: {
      fullname: string;
      avatar: string;
      createdAt: string;
    };
  };
}

export interface typeThreadPayload {
  message: string;
  payload: typeThread[];
}

export interface typeThreadDetailResponse {
  message: string;
  thread: typeThread;
}
