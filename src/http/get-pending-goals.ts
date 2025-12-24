type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('https://nlw-pocket-full-stack-nodejs.onrender.com/pending-goals')

  const data = await response.json()

  console.log('pending goals ' + data.pendingGoals)
  return data.pendingGoals
}
