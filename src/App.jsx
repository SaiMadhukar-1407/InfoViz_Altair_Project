import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    fetch("/AirQualityUCI_new.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        setData(parsedData);
        setSelectedDate(parsedData[0].Date); // Set default to first available date
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setSelectedData(data.find((entry) => entry.Date === selectedDate));
    }
  }, [selectedDate, data]);

  return (
    <div>
      <Dashboard
        selectedData={selectedData}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        availableDates={[...new Set(data.map((entry) => entry.Date))]} // Unique dataset dates
      />
    </div>
  );
};

export default App;
