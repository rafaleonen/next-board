import { IssueInteractionsResponseSchema } from "@/api/routes/schemas/issue-interactions"
import { clientEnv } from "@/client-env"

interface GetIssueInsteractionsParams {
  issueIds: string[]
}

export async function getIssueInteractions({
  issueIds,
}: GetIssueInsteractionsParams) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const url = new URL("/api/issues/interactions", clientEnv.NEXT_PUBLIC_API_ENV)

  if (issueIds.length) {
    url.searchParams.set("issueIds", issueIds.join(","))
  }

  const response = await fetch(url, {
    credentials: "include",
  })

  const data = await response.json()

  return IssueInteractionsResponseSchema.parse(data)
}
