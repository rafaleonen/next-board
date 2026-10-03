import { setTimeout } from "node:timers/promises"
import { CommentsListResponseSchema } from "@/api/routes/list-issue-comments"
import { clientEnv } from "@/client-env"

interface ListIssueCommentsParams {
  issueId: string
}

export async function listIssueComments({ issueId }: ListIssueCommentsParams) {
  await setTimeout(4000)

  const url = new URL(
    `/api/issues/${issueId}/comments`,
    clientEnv.NEXT_PUBLIC_API_ENV,
  )

  const response = await fetch(url)

  const data = await response.json()

  return CommentsListResponseSchema.parse(data)
}
