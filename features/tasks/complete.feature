Feature: Tasks :: Complete

  Background: User has a task
    Given User creates a task 'Buy milk'
    And User creates a task 'Feed a cat'


  Rule: User can complete a task

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
