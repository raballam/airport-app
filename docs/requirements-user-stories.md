
# AIRPORT PLANE CONTROL FLOW MANAGER

This program monitors current conditions at the airport in order to give air traffic controllers the necessary information in order to safely direct planes to land/takeoff.

## Benefits

- Defines maximum capacity of the airport so that a safe number of planes is not exceeded.
    - Appropriate personnel can adjust maximum capacity as required, in order to maintain accuracy if circumstances change (eg. closed terminal, maintenance on runways).
- Keeps track of number of planes at the airport, in order to check whether there is space for planes to land.
- Checks whether capacity has been met before instructing a plane to land, in order to prevent overfilling.
- Verifies whether planes are currently in the airport or not in order to give appropriate instructions.
- Checks current weather, in order to ensure safe landing conditions.
- Instructs planes to land/takeoff after verifying the above, to facilitate clear communication between air traffic control and flight crew.
  
## Risks

- As personnel are able to adjust airport capacity, there is some room for user error in this program. If the capacity has been adjusted, it may be helpful to draw attention to that by requiring additional confirmation from the user before instructing planes to land.
- Number of planes at airport is decreased when planes have been instructed to take off, some time *before* the plane has left the airport. It may be safer to confirm successful take off before doing this to ensure the recorded number of planes in the airport reflects the *actual* number of planes using the airport at any one time.


# USER STORIES

1.  As an **air traffic controller**,
    I want **the maximum capacity of the airport to be defined**,
    So that **I know the safe maximum number of planes**.

2.  As an **air traffic controller**,
    I want **to be able to override the maximum capacity of the airport**,
    So that **my information is still correct if circumstances change**.

3.  As an **air traffic controller**,
    I want **the number of planes in the airport to increase by 1 when a plane lands**,
    So that **the current number of planes is correct**.

4. As an **air traffic controller**,
    I want **the number of planes in the airport to decrease by 1 when a plane takes off**,
    So that **the current number of planes is correct**.

5.  As an **air traffic controller**,
    I want **to only be able to allow planes to land when maximum capacity has not been reached**,
    So that **the airport is not too full**.

6.  As an **air traffic controller**,
    I want **to know whether a plane is at the airport already**,
    So that **I have accurate information**.

7.  As an **air traffic controller**,
    I want **to be unable to instruct a plane to land if it is already in the airport**,
    So that **I can give accurate instructions**.

8.  As an **air traffic controller**,
    I want **to be unable to instruct a plane to take off if it is not in the airport**,
    So that **I can give accurate instructions**.

9.  As an **air traffic controller**,
    I want **know if it is stormy**,
    So that **planes can land and take off safely**.

10. As an **air traffic controller**,
    I want **to be unable to instruct a plane to land during unsafe conditions**,
    So that **planes can land safely**.

11. As an **air traffic controller**,
    I want **to be unable to instruct a plane to take off during unsafe conditions**,
    So that **planes can take off safely**.
