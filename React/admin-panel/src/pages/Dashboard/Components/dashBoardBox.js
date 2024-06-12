import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';

const DashBoardBox = (props) => {
    return(
        <Button className="dashBoardBox" style={{
            backgroundImage:`linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}>
            <div className="d-flex w-100 ms-2">
                <div className="col1">
                    <h4 className="text-black">Total Users</h4>
                    <span className="text-black">277</span>
                </div>

                <div className="ms-auto me-1">
                    {
                    props.icon ?
                        <span span className="icon">
                            {props.icon ? props.icon:""}
                        </span>
                        :
                        ''
                    }
                </div>
                
            </div>

            <div className="d-flex align-items-center mt-3 ms-2 w-100">
                <h6 className="text-black mb-0 mt-0">Last Month</h6>
                <Button className="ms-auto toggleIcon"><HiDotsVertical/></Button>
            </div>
            
        </Button>
    )
}

export default DashBoardBox;