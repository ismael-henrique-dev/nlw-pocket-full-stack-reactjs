type PendingGoalsResponse = {
  id: string
  title: string
  deseridWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('http://localhost:3333/pendding-goals')
  const data = await response.json()

  return data.penddingGoals
}