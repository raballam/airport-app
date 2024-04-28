## Requirements

- The system must feature a representation of the airport that defines a maximum capacity.
  - This capacity should have the ability to be overridden as appropriate.
- Air traffic controllers should not be able to:
  - Instruct a plane to land if the airport is full.
  - Instruct a plane to land if it's already at the airport.
  - Instruct a plane to take off if it's not at the airport.
  - Instruct a plane to land or take off during stormy weather.
  - Instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport.
  - Instruct a plane to take off from an airport as long as it is currently at the airport.


## User Stories

1.  As an **air traffic controller**,\
    I want **the maximum capacity of the airport to be defined**,\
    So that **I know the safe maximum number of planes**.

2.  As an **air traffic controller**,\
    I want **to be able to override the maximum capacity of the airport**,\
    So that **my information is still correct if circumstances change**.

3.  As an **air traffic controller**,\
    I want **the number of planes in the airport to increase by 1 when a plane lands**,\
    So that **the current number of planes is correct**.

4. As an **air traffic controller**,\
    I want **the number of planes in the airport to decrease by 1 when a plane takes off**,\
    So that **the current number of planes is correct**.

5.  As an **air traffic controller**,\
    I want **to only be able to allow planes to land when maximum capacity has not been reached**,\
    So that **the airport is not too full**.

6.  As an **air traffic controller**,\
    I want **to be unable to instruct a plane to land if it is already in the airport**,
    So that **I can give accurate instructions**.

7.  As an **air traffic controller**,\
    I want **to be unable to instruct a plane to take off if it is not in the airport**,\
    So that **I can give accurate instructions**.

8.  As an **air traffic controller**,\
    I want **know if it is stormy**,\
    So that **planes can land and take off safely**.

9.  As an **air traffic controller**,\
    I want **to be unable to instruct a plane to land during unsafe conditions**,\
    So that **planes can land safely**.

10. As an **air traffic controller**,\
    I want **to be unable to instruct a plane to take off during unsafe conditions**,\
    So that **planes can take off safely**.

## Development Plan

The steps taken to develop this project were as follows: 

- Decompose user stories as single function
- Create domain models
- Write all tests
- Code functionality

Each user story was fully tested and functionally coded in turn. A kanban board was used to track progress.

![`Kanban board with user stories`](images/kanban.jpeg)

## Domain Models

Domain models were built by forming objects and behaviours from the user stories as below:

![`Domain models`](images/domain-models.jpeg)

## Test Plan

The following tests were devised:

1. Verify that the airport has maximum capacity of 10.
2. Verify that maximum capacity can be adjusted.
3. Verify that default is 10.
4. Verify that capacity is not set to null.
5. Verify that capacity cannot be negative.
6. Verify that currentPlanes increases by 1 when plane lands.
7. Verify that the plane added to currentPlanes is the same as the plane that lands.
8. Verify that planes can land when planes are already in the airport.
9. Verify that currentPlanes decreases by 1 when a plane takes off.
10. Verify that plane removed from currentPlanes is correct plane.
11. Verify that planes cannot land if maximum capacity has been reached.
12. Verify plane can land if it will cause airport to reach capacity.
13. Verify that plane can't land if it's already at the airport.
14. Verify that plane can't take off if it's not at the airport.
15. Verify that no planes are removed from currentPlanes if planeTakeOff is called with plane that is not there.
16. Verify that airport.safeWeather returns false if weather is stormy.
17. Verify that airport.safeWeather returns true if weather is not stormy.
18. Verify that plane cannot land during unsafe weather.
19. Verify that plane cannot take off during unsafe weather.
20. Verify that weather reports if it's stormy.


