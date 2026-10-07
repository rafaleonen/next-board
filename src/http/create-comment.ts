import "server-only"

import { setTimeout } from "node:timers/promises"
import { headers } from "next/headers"
import { CommentSchema } from "@/api/routes/create-comment"
import { clientEnv } from "@/client-env"
import { getCookiesFromHeaders } from "./utils/get-cookies-from-headers"

interface CreateCommentParams {
  issueId: string
  text: string
}

export async function createComment({ issueId, text }: CreateCommentParams) {
  await setTimeout(2000)

  const url = new URL(
    `/api/issues/${issueId}/comments`,
    clientEnv.NEXT_PUBLIC_API_ENV,
  )

  const incomingHeaders = await headers()

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: getCookiesFromHeaders(incomingHeaders),
  })

  const data = await response.json()

  return CommentSchema.parse(data)
}
