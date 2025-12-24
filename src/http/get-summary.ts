type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch('https://nlw-pocket-full-stack-nodejs.onrender.com/summary')
  const data = await response.json()

  console.log('Api data: ' + data.summary)

  return data.summary
}