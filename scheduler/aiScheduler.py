"""
AI Task Scheduler
Handles intelligent task scheduling based on priority and deadlines.
"""

from datetime import datetime, timedelta
from typing import List, Dict, Any


class AIScheduler:
    """Main scheduler class for AI-based task planning."""
    
    def __init__(self):
        self.tasks = []
        self.schedule = []
    
    def add_task(self, task_id: int, title: str, priority: str, 
                 estimated_time: int, deadline: datetime = None):
        """Add a task to be scheduled."""
        task = {
            'id': task_id,
            'title': title,
            'priority': priority,
            'estimated_time': estimated_time,  # in minutes
            'deadline': deadline,
            'created_at': datetime.now()
        }
        self.tasks.append(task)
        return task
    
    def calculate_priority_score(self, task: Dict[str, Any]) -> float:
        """Calculate priority score based on urgency and importance."""
        priority_weights = {'high': 3, 'medium': 2, 'low': 1}
        base_score = priority_weights.get(task['priority'], 2)
        
        if task['deadline']:
            time_until_deadline = (task['deadline'] - datetime.now()).total_seconds() / 3600
            if time_until_deadline < 24:
                base_score *= 2
            elif time_until_deadline < 72:
                base_score *= 1.5
        
        return base_score
    
    def generate_schedule(self) -> List[Dict[str, Any]]:
        """Generate an AI-optimized task schedule."""
        sorted_tasks = sorted(
            self.tasks,
            key=lambda t: self.calculate_priority_score(t),
            reverse=True
        )
        
        self.schedule = sorted_tasks
        return self.schedule
    
    def get_next_task(self) -> Dict[str, Any]:
        """Get the next recommended task to work on."""
        if not self.schedule:
            self.generate_schedule()
        
        return self.schedule[0] if self.schedule else None


# Example usage
if __name__ == '__main__':
    scheduler = AIScheduler()
    
    scheduler.add_task(1, 'Design database schema', 'high', 120, 
                      datetime.now() + timedelta(hours=24))
    scheduler.add_task(2, 'Write documentation', 'medium', 90)
    scheduler.add_task(3, 'Code review', 'high', 60)
    
    schedule = scheduler.generate_schedule()
    print("Optimized Schedule:")
    for task in schedule:
        print(f"- {task['title']} (Priority: {task['priority']})")
