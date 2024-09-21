interface CreateGoalRequest {
  title: string
  deseridWeeklyFrequency: number
}

export async function createGoal({title, deseridWeeklyFrequency}: CreateGoalRequest) {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     title,
     deseridWeeklyFrequency
    }),
  })
}
