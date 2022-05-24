# Ideation

## Mission Statement
I want espresso enthusiast to be able achieve their **God Shot** by tracking & comparing the result of their shots over time. 

## Main Idea (MS explained)
Users should be able to track their espresso shots, the various variables involved in getting a great shot & easily note down the result of their shot. The idea being that over time, they can use the collected data to replicate their best shots per specific type of coffee bean etc. 

## General Functionalities & Layout (draft)
### Dashboard (Home Page):
*From the Dashboard, users should be able to see some of their previous actions and navigate to the different parts of the app*
1. Quick Link Cards: 
    * Previous shot pulled
    * Pull a shot
2. Navigation Bar (top - desktop / bottom - mobile)
    1. Dashboard
    2. Espresso Overview
        1. Cards of last few shots (w/ basic results) + calendar
        2. Button to pull a shot
    3. Machines (Espresso Machine & Grinder)
    4. Coffee beans

### Pull a shot:
*This is the central feature of the App. Users should be able to input all the different variables for their shots*
1. Equipment
    1. Machine dropdown
    2. Grinder dropdown
    3. Coffee bean dropdown
2. Shot variables
    1. Form field: Coffee-in (in grams)
    2. Form field(?): Grind Setting (as a graphical dial)
    3. Form field: Brew Time
    4. Form field: Coffee-out (in grams)
        * Button to stop watch
3. Result
    1. Extraction dropdown
        1. Under-extracted
        2. Balanced
        3. Over-extracted
    2. Form field: description of results
4. Submit button
5. Delete button

### Equipment
*In the equipment section users can input the details of their equipment (the espresso machine and grinder)*
1. My Machines
    1. add button (opens view that lets user enter details of their machine)
        * Machine Name
    2. List of added Machines
2. My Grinders
    1. add button (opens view that lets users enter name of Grinder)
        * Grinder Name
        * Grinder Range
            * Min:
            * Max:
    2. List of added Grinders

### Coffee
*In the Coffee section users can store their coffee beans*
1. List of Coffees
2. Button to add new coffee to list (opens new view)
    1. Name
    2. Roastery
    3. Origin
    4. Roast 
        * light
        * medium
        * dark
    5. Roast Date
    6. Additional tags (freeform field)


### Must have
* Pull a Shot section
Basic Dashboard
### Nice to have
Equipment Section
Coffee Section

### Future Improvements
1. User accounts (login / pass / sec etc.)
2. Search / filter functionalities that let users set specific parameters to search (a) their own shots & (b) other peoples shots that have similar equipment/coffee
3. Database:
    1. Searchable list of Equipment 
    2. Searchable list of Coffees (hard to implement because of sheer number of coffee varieties worldwide and coffee roasteries per country + consistent change in both)
    3. Save all shots in a db rather than localStorage or fake api.