interface CreateGoalRequest {
  title: string
  deseridWeeklyFrequency: number
}

export async function createGoal({title, deseridWeeklyFrequency}: CreateGoalRequest) {
  await fetch('https://nlw-pocket-full-stack-nodejs.onrender.com/goals', {
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
