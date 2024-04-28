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


### USER STORIES

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
