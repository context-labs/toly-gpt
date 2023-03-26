The `schedule.rs` file is part of the Clockwork project and is responsible for handling schedules and their related operations. It uses the `chrono` crate for handling date and time operations and implements various structs and methods for working with schedules.

The `Schedule` struct represents a schedule with a source string and a `ScheduleFields` struct. The `ScheduleFields` struct contains fields for years, days of the week, months, days of the month, hours, minutes, and seconds. The `Schedule` struct has methods for creating a new schedule, finding the next and previous date and time after a given date and time, checking if a date and time is included in the schedule, and accessing the time unit specifications for each field.

The `ScheduleIterator` struct is used for iterating through the dates and times in a schedule. It has methods for creating a new iterator, getting the next date and time in the schedule, and getting the previous date and time in the schedule.

The `is_leap_year` function checks if a given year is a leap year, and the `days_in_month` function returns the number of days in a given month and year.

The file also includes tests for various functionalities, such as creating schedules from strings, converting schedules to strings, checking schedule equality, and iterating through schedules.
## Questions: 
 1. What is the purpose of the `Schedule` struct and its associated methods?

   The `Schedule` struct represents a schedule with specific time units (years, months, days, hours, minutes, and seconds). It provides methods to find the next and previous date-times that match the schedule, check if a given date-time is included in the schedule, and access the time unit specifications of the schedule.

2. How does the `next_after` method work?

   The `next_after` method takes a reference to a `DateTime` and returns an `Option<DateTime>` representing the next date-time that matches the schedule after the given date-time. It iterates through the time units in the schedule and checks if the candidate date-time matches the schedule's constraints.

3. How does the `prev_before` method work?

   The `prev_before` method takes a reference to a `DateTime` and returns an `Option<DateTime>` representing the previous date-time that matches the schedule before the given date-time. It iterates through the time units in the schedule in reverse order and checks if the candidate date-time matches the schedule's constraints.

4. What is the purpose of the `ScheduleIterator` struct?

   The `ScheduleIterator` struct is an iterator that allows iterating through the date-times that match a given schedule, starting from a specified date-time. It implements the `Iterator` and `DoubleEndedIterator` traits, providing `next` and `next_back` methods to get the next and previous matching date-times, respectively.

5. How is the `days_in_month` function used in the code?

   The `days_in_month` function takes a month and a year as input and returns the number of days in that month, considering leap years. It is used in the `next_after` and `prev_before` methods to determine the range of days to iterate through when searching for matching date-times.
    