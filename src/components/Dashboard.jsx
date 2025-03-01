import React from "react";
import { FaTemperatureHigh, FaTint } from "react-icons/fa";
import DateSelector from "./DateSelector";
import "./Dashboard.css";

const Dashboard = ({ selectedData, selectedDate, onDateChange, availableDates }) => {
  if (!selectedData) return <p>No data available</p>;

  return (
    <div className="dashboard">
      <h2>AirViz Dashboard</h2>
      <DateSelector selectedDate={selectedDate} onDateChange={onDateChange} availableDates={availableDates} />
      <div className="metrics">
        <div className="metric">
          <strong>CO</strong>
          <p>{selectedData["CO(GT)"]} mg/m³</p>
        </div>
        <div className="metric">
          <strong>C6H6</strong>
          <p>{selectedData["C6H6(GT)"]} mg/m³</p>
        </div>
        <div className="metric">
          <strong>NMHC</strong>
          <p>{selectedData["NMHC(GT)"]} mg/m³</p>
        </div>
        <div className="metric">
          <strong>NO2</strong>
          <p>{selectedData["NO2(GT)"]} µg/m³</p>
        </div>
        <div className="metric">
          <strong>O3</strong>
          <p>{selectedData["PT08.S5(O3)"]} µg/m³</p>
        </div>
        <div className="metric">
          <strong>NOx</strong>
          <p>{selectedData["NOx(GT)"]} ppb</p>
        </div>
      </div>
      <div className="extra-info">
        <p className="temp-icon">
          <FaTemperatureHigh /> {selectedData["T"]}°C
        </p>
        <p className="humidity-icon">
          <FaTint /> {selectedData["RH"]}%
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
