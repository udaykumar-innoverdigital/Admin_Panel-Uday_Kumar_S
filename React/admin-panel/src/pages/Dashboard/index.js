import DashBoardBox from "./Components/dashBoardBox";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
    return(
        <>
            <div className="right-content w-100">
                <div className="row dashBoardWrapperRow">
                    <div className="col-md-8">
                        <div className="dashBoardWrapper d-flex">
                            <DashBoardBox color ={["#8a9149", "#afb860e0"]} icon={<FaUserCircle/>}/>
                            <DashBoardBox color ={["#8a9149", "#afb860e0"]}/>
                            <DashBoardBox color ={["#8a9149", "#afb860e0"]}/>
                            <DashBoardBox color ={["#8a9149", "#afb860e0"]}/>
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;