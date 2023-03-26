The `queries.rs` file is part of the Clockwork project and contains two main structs: `NextAfterQuery` and `PrevFromQuery`. Both structs are generic over a timezone `Z` that implements the `TimeZone` trait from the `chrono` crate. These structs are used to find the next or previous occurrence of a specific time unit (e.g., month, day, hour, minute, second) after or before a given `DateTime`.

The `NextAfterQuery` struct has an `initial_datetime` field, which is the starting point for the query, and boolean fields to track if it's the first occurrence of each time unit. The struct provides methods to get the lower bound of each time unit and reset the state of the struct for each time unit. The `from` method creates a new `NextAfterQuery` instance by adding one second to the given `DateTime`.

The `PrevFromQuery` struct is similar to `NextAfterQuery`, but it's used to find the previous occurrence of a specific time unit before a given `DateTime`. It also has an `initial_datetime` field and boolean fields to track if it's the first occurrence of each time unit. The struct provides methods to get the upper bound of each time unit and reset the state of the struct for each time unit. The `from` method creates a new `PrevFromQuery` instance by subtracting one second from the given `DateTime`.

Both structs use the `Ordinal` type from the `ordinal` module and the time unit types from the `time_unit` module, such as `DaysOfMonth`, `Hours`, `Minutes`, `Months`, `Seconds`, and `TimeUnitField`. The `chrono` crate is used for handling date and time operations, such as adding or subtracting durations from `DateTime` objects.
## Questions: 
 1. Question: What is the purpose of the `NextAfterQuery` and `PrevFromQuery` structs?
   Answer: The `NextAfterQuery` struct is used to find the next occurrence of a specified time unit after a given initial datetime, while the `PrevFromQuery` struct is used to find the previous occurrence of a specified time unit before a given initial datetime.

2. Question: What is the role of the `TimeZone` trait bound on the generic type `Z` in both structs?
   Answer: The `TimeZone` trait bound on the generic type `Z` ensures that the structs can work with any type that implements the `TimeZone` trait, allowing for flexibility in handling different time zones.

3. Question: What is the purpose of the `reset_*` methods in both structs (e.g., `reset_month`, `reset_day_of_month`, etc.)?
   Answer: The `reset_*` methods are used to reset the corresponding "first" flags (e.g., `first_month`, `first_day_of_month`, etc.) to `false`, which indicates that the initial datetime has already been considered for that time unit, and the next/previous occurrence should be calculated from the minimum/maximum value of that time unit.

4. Question: Why are the `year_lower_bound` and `year_upper_bound` methods implemented differently from the other `*_lower_bound` and `*_upper_bound` methods?
   Answer: Unlike the other time units, years will never wrap around, so there is no need to reset the "first" flag or calculate the minimum/maximum value for years. The `year_lower_bound` and `year_upper_bound` methods simply return the year of the initial datetime as the lower and upper bounds, respectively.

5. Question: What is the purpose of the `TODO` comment at the beginning of the code?
   Answer: The `TODO` comment suggests that there might be a possibility to refactor the code and use a single query struct instead of having separate `NextAfterQuery` and `PrevFromQuery` structs. This indicates that the developer might be considering future improvements to the code structure.
    