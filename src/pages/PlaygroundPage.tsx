import { log } from "console";
import ExpandableText from "../components/ExpandableText";
import Onboarding from "../components/Onboarding";
import SearchBox from "../components/SearchBox";
import TermsAndConditions from "../components/TermsAndConditions";
import ToastDemo from "../components/ToastDemo";
import { Toaster } from "react-hot-toast";
import OrderStatusSelector from "../components/OrderStatusSelector";

const PlaygroundPage = () => {
  return (
    <>
    <OrderStatusSelector onChange={console.log}/> 
    </>
  );
};

export default PlaygroundPage;
