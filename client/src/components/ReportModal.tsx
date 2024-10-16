import { Popup } from "reactjs-popup"; 
import { Report } from "../types"; 
import ReportMap from "../components/ReportMap"; 

interface ReportModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  report: Report; 
  weather: any;
}

const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onRequestClose,
  report,
  weather,
}) => {
  return (
    <Popup open={isOpen} onClose={onRequestClose} modal>
      <div className="p-8 bg-gray-50 rounded-xl shadow-2xl border border-gray-300 max-w-lg mx-auto mt-24">
        <h2 className="text-2xl font-bold mb-4">{report?.title}</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Status:</span> {report?.status || "Open"}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Reporter:</span> {report?.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">City:</span> {report?.city}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Date:</span> {report?.createdAt ? new Date(report.createdAt).toLocaleString() : "N/A"}
        </p>

        <h3 className="text-xl font-semibold mt-4">Weather Details:</h3>
        {weather ? (
          <div className="mt-2 text-gray-700">
            <p><span className="font-semibold">City:</span> {weather?.name}</p>
            <p><span className="font-semibold">Temperature:</span> {weather?.main?.temp}°F</p>
            <p><span className="font-semibold">Condition:</span> {weather?.weather[0]?.description}</p>
            <p><span className="font-semibold">Wind:</span> {weather?.wind?.speed} mph</p>
            <p><span className="font-semibold">Humidity:</span> {weather?.main?.humidity}%</p>
          </div>
        ) : (
          <p className="mt-2 text-gray-500">No weather data available.</p>
        )}

        {/* Scrollable Map Section */}
        <div className="mt-4 max-h-60 overflow-y-auto border border-gray-200 rounded-lg"> 
          <ReportMap
            lat={report.lat} 
            lon={report.lon} 
            title={report.title}
            description={report.description}
          />
        </div>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </Popup>
  );
};

export default ReportModal;
