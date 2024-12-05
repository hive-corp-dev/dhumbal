import { PiWarningFill } from "react-icons/pi";

export default function Icon({ icon }) {
  if (icon === "warning") {
    return <PiWarningFill />;
  }
  return null;
}
