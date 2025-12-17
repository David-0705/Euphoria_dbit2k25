
import DefaultPage from "../components/DefaultPage"
import ScheduleHandler from "../components/ScheduleHandler"
import { schedulenav } from "../constants"
function Schedules()
{


    return <>
    <DefaultPage nav={schedulenav}>
        <ScheduleHandler/>
    </DefaultPage>
    </>
    
}
export default Schedules