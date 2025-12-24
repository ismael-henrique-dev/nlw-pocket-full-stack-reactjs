export async function createGoalCompletion(goalId: string) {
  await fetch('https://nlw-pocket-full-stack-nodejs.onrender.com/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
