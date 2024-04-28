
# AIRPORT PLANE CONTROL FLOW MANAGER

The primary role of an air traffic controller is to uphold high standards of safety on the runway. Controlling the flow of air traffic is crucial in order to avoid delays and accidents, and the process of verifying arrival and departure requests can be time consuming and prone to human error. This software monitors current conditions in the airport and automates the verification process. This removes routine tasks from responsibility of air traffic control, improving efficiency and eliminating mistakes.

## Benefits

The software streamlines the workflow of air traffic control, standardises practices across teams and offers demonstrable adherence to airport health and safety practices. Its use allows personnel to manage their time more effectively, leading to improved standards and growth across the board.

Using this software makes sure communications can be accurate and professional and flight crews can be sure that the airport is of the highest standard. The seamless functionality behind the scenes ensures passengers have a relaxing and reassuring travel experience, eliminating delays and marking the airport as a reliable travel choice for commuters and holiday makers alike.

This is achieved with the following features:

- **Adjustable Capacity**

The software sets the maximum capacity of the airport. A default capacity allows general levels to be set, and this can be overridden to ensure no change to standard practices in circumstances such as terminal closures and runway maintenance.

- **Plane Tracking**

A list of planes currently at the airport is automatically adjusted as planes arrive and depart. This allows air traffic control to identify when capacity levels have been reached, know what planes are currently at the airport and communicate effectively with flight crews.

- **Weather Alert**

The software also monitors current weather and informs air traffic control when there is an active storm, ensuring runway conditions are safe before any communication takes place with flight crews.

- **Verifies Arrival/Departure Requests**

When requests are received by the airport, this software automatically checks the capacity, current weather conditions and identification of the plane before verifying or denying the request. This ensures air traffic control can be confident in their communications with flight crews and upholds high standards of safety on the runway.


  
## Risks

The risks associated with this product are 

- As personnel are able to adjust airport capacity, there is some room for user error in this program. If the capacity has been adjusted, it may be helpful to draw attention to that by requiring additional confirmation from the user before instructing planes to land.
- Number of planes at airport is decreased when planes have been instructed to take off, some time *before* the plane has left the airport. It may be safer to confirm successful take off before doing this to ensure the recorded number of planes in the airport reflects the *actual* number of planes using the airport at any one time.
- More information could be recorded about the planes that could help allocation of space, for example the size of the aircraft, turnaround time and number of passengers.
- The program only informs if it's stormy. It maybe be helpful to report the conditions with more specificity and enable some middle ground between the runway being closed/open, for example if visibility is low, the capacity of the airport could be reduced by some percentage.
- There is no way for personnel to override the system if it is refusing or accepting a plane and it is then immediately added to the list of current planes. Occasions may arise where air traffic control may wish to refuse or accept traffic based on factors outwith the scope of this program and it could be improved by included some capacity to do this.