import AdmissionInfo from "./Admissioninfo/Admissioninfo";
import Calendar from "./Calendar/Calendar";
import Club from "./Club/Club";
import Song from "./NationalSong/Song";
import Portal from "./Portal/Portal";
import Principal from "./Principal";


const SideContent = () => {
    return (
        <div>
            <Principal />
            <Calendar />
            <Portal />
            <AdmissionInfo />
            <Club />
            <Song />
        </div>
    );
};

export default SideContent;