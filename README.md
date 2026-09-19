# Ricardo Morales Interactive Productivity Dashboard

This project is a web-based dashboard for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

- [x] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator

## Weekly Task Goals

This feature calculates a user's weekly task target based on their daily task goal and any weekly bonus tasks. The form collects the user's name, daily goal, and bonus tasks, then displays the calculated weekly total on the page.

## Metric Converter Pseudocode

```text
BEGIN

    DISPLAY "Metric Converter"

    INPUT numericValue

    DISPLAY "Choose a conversion:"
    DISPLAY "1. Inch to Centimeter"
    DISPLAY "2. Foot to Centimeter"
    DISPLAY "3. Yard to Meter"
    DISPLAY "4. Mile to Kilometer"
    DISPLAY "5. Centimeter to Inch"
    DISPLAY "6. Centimeter to Foot"
    DISPLAY "7. Meter to Yard"
    DISPLAY "8. Kilometer to Mile"

    INPUT conversionChoice

    IF conversionChoice = 1 THEN
        SET result = numericValue * 2.54
        DISPLAY result + " centimeters"

    ELSE IF conversionChoice = 2 THEN
        SET result = numericValue * 30.48
        DISPLAY result + " centimeters"

    ELSE IF conversionChoice = 3 THEN
        SET result = numericValue * 0.91
        DISPLAY result + " meters"

    ELSE IF conversionChoice = 4 THEN
        SET result = numericValue * 1.61
        DISPLAY result + " kilometers"

    ELSE IF conversionChoice = 5 THEN
        SET result = numericValue * 0.39
        DISPLAY result + " inches"

    ELSE IF conversionChoice = 6 THEN
        SET result = numericValue * 0.0328
        DISPLAY result + " feet"

    ELSE IF conversionChoice = 7 THEN
        SET result = numericValue * 1.09
        DISPLAY result + " yards"

    ELSE IF conversionChoice = 8 THEN
        SET result = numericValue * 0.62
        DISPLAY result + " miles"

    ELSE
        DISPLAY "Invalid conversion choice"

    END IF

END
```