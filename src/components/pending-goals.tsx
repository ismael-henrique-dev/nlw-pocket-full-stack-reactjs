import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'
import { createGoalCompletion } from '../http/create-goal-completion'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 60 * 1000,
  })

  if (!data) {
    return null
  }

  console.log(data)

  async function handleCompletionGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }
  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        console.log(
          `Aqui está o desiredWeeklyFrequency: ${goal.deseridWeeklyFrequency}`
        )
        console.log(goal.completionCount)
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.deseridWeeklyFrequency <= goal.completionCount}
            onClick={() => handleCompletionGoal(goal.id)} // Sempre que eu tiver uma função com parâmetro eu executo dessa forma
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
