Feature: Tasks :: Generic

  Rule: User can create a new task

    Scenario: User can create a task
      When User creates a task 'Buy milk'
      And User creates a task 'Feed a cat'
      Then User has 2 tasks

    Scenario: Created tasks are uncompleted
      When User creates a task 'Buy milk'
      And User has 0 completed tasks

    Scenario: User can undo creation of a new task
      When User creates a task 'Buy milk'
      And User undoes the last action
      Then User has 0 tasks


  Rule: User can complete a task

    Background: User has a task
      Given User creates a task 'Buy milk'
      And User creates a task 'Feed a cat'

    Scenario: User can complete a task
      When User completes the task 'Buy milk'
      Then Task 'Buy milk' is completed
      And Task 'Feed a cat' is not completed
      And User has 1 completed task

    Scenario: User can revert a completed task
      When User completes the task 'Buy milk'
      And User undoes the last action
      Then Task 'Buy milk' is not completed
      And User has 0 completed task
