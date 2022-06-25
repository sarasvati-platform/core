Feature: Tasks :: Due Date

  Background: User has a task
    Given User creates a task 'Buy milk'


  Rule: User can set due date for a task

    Scenario: User can set due date for a task
      When User sets the due date of the task 'Buy milk' to '2022-02-22'
      Then Task 'Buy milk' has a due date of '2022-02-22'

    Scenario: User can see overdue tasks
      When User sets the due date of the task 'Buy milk' to '1987-01-01'
      Then User has 1 overdue task

    Scenario: User can undo setting of a due date for a task
      When User sets the due date of the task 'Buy milk' to '2022-02-22'
      When User sets the due date of the task 'Buy milk' to '2022-02-23'
      And User undoes the last action
      Then Task 'Buy milk' has a due date of '2022-02-22'
      And User undoes the last action
      Then Task 'Buy milk' has no due date
