import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const DatePickerField = ({ date, setDate }) => {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">ددلاین</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        value={date}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
        onChange={(date) => setDate(date)}/>
    </div>
  );
};

export default DatePickerField;
